import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { getTechnologyIcon } from '../data/technologyIcons'

export default function HomePage({ portfolio, uiText }) {
  const location = useLocation()
  const featuredProjects = portfolio.projects.slice(0, 3)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const section = params.get('section')

    if (!section) {
      return
    }

    const target = document.getElementById(section)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.search])

  return (
    <>
      <section className="hero-section" id="presentacion">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="role">{portfolio.role}</p>
            <h1>
              {portfolio.heroTitle.split(' ').slice(0, 2).join(' ')}{' '}
              <span>{portfolio.heroTitle.split(' ').slice(2).join(' ')}</span>
            </h1>

            <div className="pitch-lines">
              {portfolio.pitchLines.map((line) => (
                <p key={line.text} className={`pitch-line pitch-${line.tone}`}>
                  {line.text}
                </p>
              ))}
            </div>

            <div className="social-links">
              <a href={portfolio.social.linkedin} target="_blank" rel="noreferrer">
                {uiText.linkedin}
              </a>
              <a href={portfolio.social.github} target="_blank" rel="noreferrer">
                {uiText.github}
              </a>
              <a href={`mailto:${portfolio.social.email}`}>{portfolio.social.email}</a>
              <a href={`tel:${portfolio.social.phoneRaw}`}>{portfolio.social.phone}</a>
            </div>

            <Link className="hero-jump" to="/?section=experiencia">
              {uiText.experience}
            </Link>
          </div>

          <div className="hero-photo-wrap">
            <img
              src={portfolio.profileImage}
              alt="Foto de perfil de Santiago Jordan Vargas"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="content-section" id="experiencia">
        <div className="container">
          <h2>{uiText.experience}</h2>

          <div className="experience-items">
            {portfolio.experience.map((job) => (
              <article className="experience-item" key={`${job.company}-${job.period}`}>
                <h3>
                  {job.role} <span>- {job.company}</span>
                </h3>
                <p className="meta">{job.period}</p>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="proyectos">
        <div className="container">
          <div className="section-heading">
            <h2>{uiText.projects}</h2>
            <p>{uiText.projectsDescription}</p>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                compact
                ctaLabel={uiText.viewProject}
              />
            ))}
          </div>

          <div className="section-action">
            <Link to="/proyectos">{uiText.viewAllProjects}</Link>
          </div>
        </div>
      </section>

      <section className="content-section" id="sobre-mi">
        <div className="container">
          <h2>{uiText.about}</h2>

          <div className="about-grid">
            <div className="about-image">
              <img
                src={portfolio.profileImage}
                alt="Retrato profesional de Santiago Jordan Vargas"
                loading="lazy"
              />
            </div>

            <div className="about-text">
              {portfolio.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="about-cv">
            <a href={portfolio.cvUrl} target="_blank" rel="noreferrer">
              {uiText.viewResume}
            </a>
          </div>
        </div>
      </section>

      <section className="content-section" id="tecnologias">
        <div className="container">
          <div className="section-heading">
            <h2>{uiText.technologies}</h2>
            <p>{uiText.technologiesDescription}</p>
          </div>

          <div className="tech-grid">
            {Object.entries(portfolio.technologies).map(([category, list]) => (
              <article className="tech-card" key={category}>
                <h3>{category}</h3>
                <ul>
                  {list.map((item) => {
                    const { Icon, color } = getTechnologyIcon(item)

                    return (
                      <li key={`${category}-${item}`}>
                        <span className="tech-item-icon" aria-hidden="true">
                          <Icon style={{ color }} />
                        </span>
                        <span className="tech-item-name">{item}</span>
                      </li>
                    )
                  })}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
