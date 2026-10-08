import { createReadStream, existsSync, statSync } from 'node:fs'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer-core'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const port = 4179
const origin = `http://127.0.0.1:${port}`
const base = '/mi-portafolio'

const source = await readFile(path.join(root, 'src', 'data', 'portfolioData.js'), 'utf8')
const slugs = [...source.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1])
const routes = ['/', '/proyectos', ...slugs.map((slug) => `/proyectos/${slug}`)]

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.pdf': 'application/pdf',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
}

function startServer() {
  const dist = path.join(root, 'dist')
  const server = http.createServer((request, response) => {
    const urlPath = decodeURIComponent(request.url.split('?')[0])
    if (!urlPath.startsWith(base)) {
      response.writeHead(404)
      response.end('not found')
      return
    }

    const relative = urlPath.slice(base.length).replace(/^\/+/, '')
    let file = path.resolve(dist, relative)
    if (!file.startsWith(dist)) {
      response.writeHead(403)
      response.end('forbidden')
      return
    }
    if (existsSync(file) && statSync(file).isDirectory()) {
      file = path.join(file, 'index.html')
    }
    if (!existsSync(file) || statSync(file).isDirectory()) {
      if (path.extname(relative)) {
        response.writeHead(404)
        response.end('not found')
        return
      }
      file = path.join(dist, 'index.html')
    }

    const extension = path.extname(file)
    response.writeHead(200, { 'Content-Type': types[extension] || 'application/octet-stream' })
    createReadStream(file).pipe(response)
  })

  return new Promise((resolve) => {
    server.listen(port, '127.0.0.1', () => resolve(server))
  })
}

const server = await startServer()

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
})

try {
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 1000 })
  page.on('pageerror', (error) => {
    console.error('pageerror', error.message)
  })
  page.on('console', (message) => {
    if (message.type() === 'error') {
      console.error('console', message.text())
    }
  })
  page.on('response', (response) => {
    if (response.status() >= 400) {
      console.error('http', response.status(), response.url())
    }
  })

  for (const route of routes) {
    const url = `${origin}${base}${route === '/' ? '/' : route}`
    const response = await page.goto(url, { waitUntil: 'networkidle0' })
    console.log('status', response?.status(), url)
    try {
      await page.waitForSelector('#root h1', { timeout: 8000 })
    } catch (error) {
      const body = await page.evaluate(() => document.body.innerText.slice(0, 500))
      throw new Error(`${error.message}\n${body}`)
    }
    const html = await page.content()
    const text = await page.$eval('#root', (node) => node.innerText)
    if (!text.includes('Santiago') && !text.trim()) {
      throw new Error(`La ruta ${route} se prerenderizó vacía.`)
    }
    if (route.includes('phone-colombia') && !text.includes('PhoneColombia')) {
      throw new Error('PhoneColombia no quedó en el HTML.')
    }
    const file =
      route === '/'
        ? path.join(root, 'dist', 'index.html')
        : path.join(root, 'dist', route.slice(1), 'index.html')
    await mkdir(path.dirname(file), { recursive: true })
    await writeFile(file, html)
    console.log(`prerender ${route}`)
  }
} finally {
  await browser.close()
  await new Promise((resolve) => server.close(resolve))
}
