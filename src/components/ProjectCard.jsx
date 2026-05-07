export default function ProjectCard({ project, compact = false, ctaLabel = 'Ver proyecto' }) {
  return (
    <article className={`project-card ${compact ? 'is-compact' : ''}`}>
      <div className={`project-cover ${project.tone}`}>
        <span className="project-badge">{project.category}</span>
        <p className="project-cover-title">{project.subtitle}</p>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul className="tag-list">
          {project.tags.map((tag) => (
            <li key={`${project.slug}-${tag}`}>{tag}</li>
          ))}
        </ul>

        <a href={project.url} target="_blank" rel="noreferrer">
          {ctaLabel}
        </a>
      </div>
    </article>
  )
}
