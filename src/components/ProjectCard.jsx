import { Link } from 'react-router-dom'

export default function ProjectCard({ project, variant = 'compact', uiText, omitIntro = false }) {
  const isFull = variant === 'full'

  return (
    <article className={`project-card ${isFull ? 'is-full' : 'is-compact'}`} id={project.slug}>
      {isFull && !omitIntro ? (
        <header className="case-header">
          <p className="case-kicker">{project.category}</p>
          <h2>{project.title}</h2>
          <p className="case-what">{project.what}</p>
          <p className="case-role">
            <strong>{uiText.whatIDid}.</strong> {project.role}
          </p>
          <p className="case-summary">{project.summary}</p>
        </header>
      ) : null}
      {isFull ? (
        project.image ? (
          <img className="case-shot" src={project.image} alt="" />
        ) : null
      ) : project.image ? (
        <Link className="project-shot" to={`/proyectos/${project.slug}`}>
          <img src={project.image} alt="" />
          <span className="project-badge">{project.category}</span>
        </Link>
      ) : (
        <div className={`project-cover ${project.tone}`}>
          <span className="project-badge">{project.category}</span>
          <div className="project-cover-copy">
            <h3 className="project-cover-title">
              <Link to={`/proyectos/${project.slug}`}>{project.title}</Link>
            </h3>
            <p className="project-cover-what">{project.what}</p>
          </div>
        </div>
      )}

      {isFull ? (
        <>
          <div className="case-sections">
            <section>
              <h3>{uiText.problem}</h3>
              <p>{project.problem}</p>
            </section>
            <section>
              <h3>{uiText.solution}</h3>
              <p>{project.solution}</p>
            </section>
            <section>
              <h3>{uiText.results}</h3>
              <ul className="case-results">
                {project.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </section>
          </div>
          <footer className="case-footer">
            <ul className="tag-list">
              {project.tags.map((tag) => (
                <li key={`${project.slug}-${tag}`}>{tag}</li>
              ))}
            </ul>
            <div className="project-actions">
              {project.demoUrl ? (
                <a className="btn btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                  {uiText.viewDemo}
                </a>
              ) : null}
              <a className="btn btn-secondary" href={project.repoUrl} target="_blank" rel="noreferrer">
                {uiText.viewCode}
              </a>
            </div>
          </footer>
        </>
      ) : (
        <div className="project-content">
          <h3>
            <Link to={`/proyectos/${project.slug}`}>{project.title}</Link>
          </h3>
          <p className="project-what">{project.what}</p>
          <p>{project.summary}</p>
          <ul className="tag-list">
            {project.tags.map((tag) => (
              <li key={`${project.slug}-${tag}`}>{tag}</li>
            ))}
          </ul>
          <div className="project-actions">
            {project.demoUrl ? (
              <a className="btn btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                {uiText.viewDemo}
              </a>
            ) : null}
            <a className="btn btn-secondary" href={project.repoUrl} target="_blank" rel="noreferrer">
              {uiText.viewCode}
            </a>
            <Link className="btn btn-ghost" to={`/proyectos/${project.slug}`}>
              {uiText.readCase}
            </Link>
          </div>
        </div>
      )}
    </article>
  )
}
