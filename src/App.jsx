import { useEffect, useMemo, useState } from 'react'
import { HashRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { getNavItems, getPortfolio, getUiText } from './data/portfolioData'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import './App.css'

function Footer({ portfolio, uiText }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>{portfolio.brand}</p>
        <ul>
          <li>
            <Link to="/?section=experiencia">{uiText.footerExperience}</Link>
          </li>
          <li>
            <Link to="/?section=sobre-mi">{uiText.footerAbout}</Link>
          </li>
          <li>
            <Link to="/?section=tecnologias">{uiText.footerTechnologies}</Link>
          </li>
          <li>
            <Link to="/proyectos">{uiText.footerProjects}</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('portfolio-theme')
    return storedTheme === 'light' ? 'light' : 'dark'
  })

  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('portfolio-language')
    return storedLanguage === 'en' ? 'en' : 'es'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('portfolio-language', language)
  }, [language])

  const portfolio = useMemo(() => getPortfolio(language), [language])
  const navItems = useMemo(() => getNavItems(language), [language])
  const uiText = useMemo(() => getUiText(language), [language])

  return (
    <HashRouter>
      <div className="site-shell">
        <Navbar
          portfolio={portfolio}
          navItems={navItems}
          uiText={uiText}
          language={language}
          setLanguage={setLanguage}
          theme={theme}
          setTheme={setTheme}
        />

        <Routes>
          <Route
            path="/"
            element={<HomePage portfolio={portfolio} uiText={uiText} />}
          />
          <Route
            path="/proyectos"
            element={<ProjectsPage portfolio={portfolio} uiText={uiText} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer portfolio={portfolio} uiText={uiText} />
      </div>
    </HashRouter>
  )
}

export default App
