import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { getTechnologyIcon } from '../data/technologyIcons'

export default function HomePage({ portfolio, uiText }) {
  const location = useLocation()
  const featuredProjects = portfolio.projects

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
            <div className="role-row">
              <p className="role">{portfolio.role}</p>
              <p className="availability">{portfolio.availability}</p>
            </div>
            <h1>
              {portfolio.headlineBefore}
              <span>{portfolio.headlineAccent}</span>
              {portfolio.headlineAfter}
            </h1>

            <div className="pitch-lines">
              {portfolio.pitchLines.map((line) => (
                <p key={line.text} className={`pitch-line pitch-${line.tone}`}>
                  {line.text}
                </p>
              ))}
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href={portfolio.whatsappUrl} target="_blank" rel="noreferrer">
                {uiText.whatsapp}
              </a>
              <a className="btn btn-secondary" href={portfolio.contactUrl} target="_blank" rel="noreferrer">
                {uiText.emailCta}
              </a>
              <Link className="btn btn-ghost" to="/?section=proyectos">
                {uiText.viewCases}
              </Link>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <img src={portfolio.profileImage} alt={uiText.profileAlt} />
          </div>
        </div>
      </section>

      <section className="content-section proof-section" id="pruebas">
        <div className="container">
          <h2>{uiText.proofs}</h2>
          <ul className="proof-grid">
            {portfolio.proofs.map((proof) => (
              <li className="proof-card" key={proof.title}>
                <h3>{proof.title}</h3>
                <p>{proof.text}</p>
              </li>
            ))}
          </ul>
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
                uiText={uiText}
              />
            ))}
          </div>

          <div className="section-action">
            <Link to="/proyectos">{uiText.viewAllProjects}</Link>
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
                  {job.role} <span>— {job.company}</span>
                </h3>
                <p className="meta">{job.period}</p>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet.lead}>
                      <strong>{bullet.lead}</strong> {bullet.text}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="sobre-mi">
        <div className="container">
          <h2>{uiText.about}</h2>

          <div className="about-grid">
            <div className="about-image">
              <img src={portfolio.profileImage} alt={uiText.aboutAlt} loading="lazy" />
            </div>

            <div className="about-text">
              {portfolio.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="about-cv">
            <a className="btn btn-primary" href={portfolio.cvUrl} target="_blank" rel="noreferrer">
              {uiText.downloadCv}
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
