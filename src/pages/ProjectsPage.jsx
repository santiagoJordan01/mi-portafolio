import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsPage({ portfolio, uiText }) {
  const [activeFilter, setActiveFilter] = useState(portfolio.projectFilters[0])

  const allFilter = portfolio.projectFilters[0]

  const visibleProjects = useMemo(() => {
    if (activeFilter === allFilter) {
      return portfolio.projects
    }

    return portfolio.projects.filter((project) => project.category === activeFilter)
  }, [activeFilter, allFilter, portfolio.projects])

  return (
    <>
      <section className="projects-hero">
        <div className="container">
          <h1>{uiText.projects}</h1>
          <p>{uiText.projectsPageDescription}</p>
        </div>
      </section>

      <section className="content-section projects-page-body">
        <div className="container">
          <div className="project-filters" role="tablist" aria-label={uiText.projectFiltersAria}>
            {portfolio.projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-button ${activeFilter === filter ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid route-grid">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} ctaLabel={uiText.viewProject} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
