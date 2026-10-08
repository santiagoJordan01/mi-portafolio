const SITE = 'https://santiagojordan01.github.io/mi-portafolio'
const DEFAULT_IMAGE = `${SITE}/foto%20de%20perfil%20portfolio.jpg`

function upsertMeta(attribute, key, content) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export function absoluteAsset(src) {
  if (!src) {
    return DEFAULT_IMAGE
  }
  if (src.startsWith('http')) {
    return src
  }
  const path = src.replace(/^\.\//, '').replace(/^\//, '').replace(/^mi-portafolio\//, '')
  return `${SITE}/${path}`
}

export function setPageMeta({ title, description, path = '/', image }) {
  const url = path === '/' ? `${SITE}/` : `${SITE}${path}`
  const picture = absoluteAsset(image)

  document.title = title
  upsertMeta('name', 'description', description)
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:url', url)
  upsertMeta('property', 'og:image', picture)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:locale', 'es_CO')
  upsertMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary')
  upsertMeta('name', 'twitter:title', title)
  upsertMeta('name', 'twitter:description', description)
  upsertMeta('name', 'twitter:image', picture)

  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', url)
}
