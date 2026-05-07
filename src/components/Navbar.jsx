import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaChevronDown, FaGithub, FaLinkedinIn, FaMoon, FaSun } from 'react-icons/fa'

function anchorHref(anchor, isHome) {
  return isHome ? `#${anchor}` : `/#${anchor}`
}

function routeIsActive(pathname, targetPath) {
  if (targetPath === '/') {
    return pathname === '/'
  }

  return pathname.startsWith(targetPath)
}

export default function Navbar({
  portfolio,
  navItems,
  uiText,
  language,
  setLanguage,
  theme,
  setTheme,
}) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isDark = theme === 'dark'
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langMenuRef = useRef(null)

  useEffect(() => {
    function onPointerDown(event) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangOpen(false)
      }
    }

    function onEscape(event) {
      if (event.key === 'Escape') {
        setIsLangOpen(false)
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onEscape)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onEscape)
    }
  }, [])

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <Link className="brand" to="/">
          {portfolio.brand}
        </Link>

        <nav aria-label={uiText.navAria}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.type === 'route' ? (
                  <Link
                    className={`nav-link ${routeIsActive(location.pathname, item.to) ? 'is-active' : ''}`}
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a className="nav-link" href={anchorHref(item.anchor, isHome)}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-tools">
          <div className="lang-control" ref={langMenuRef}>
            <button
              type="button"
              className="lang-trigger"
              aria-label={uiText.languageLabel}
              aria-haspopup="listbox"
              aria-expanded={isLangOpen}
              onClick={() => setIsLangOpen((prev) => !prev)}
            >
              <span>{language.toUpperCase()}</span>
              <FaChevronDown aria-hidden="true" className="lang-caret" />
            </button>

            <ul className={`lang-menu ${isLangOpen ? 'is-open' : ''}`} role="listbox">
              <li>
                <button
                  type="button"
                  className={`lang-option ${language === 'es' ? 'is-selected' : ''}`}
                  onClick={() => {
                    setLanguage('es')
                    setIsLangOpen(false)
                  }}
                >
                  ES
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`lang-option ${language === 'en' ? 'is-selected' : ''}`}
                  onClick={() => {
                    setLanguage('en')
                    setIsLangOpen(false)
                  }}
                >
                  EN
                </button>
              </li>
            </ul>
          </div>

          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? uiText.lightModeLabel : uiText.darkModeLabel}
            title={isDark ? uiText.lightModeLabel : uiText.darkModeLabel}
          >
            {isDark ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>

          <a className="chip" href={portfolio.cvUrl} target="_blank" rel="noreferrer">
            CV
          </a>
          <a
            className="icon-chip"
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={uiText.linkedin}
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>
          <a
            className="icon-chip"
            href={portfolio.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label={uiText.github}
          >
            <FaGithub aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
