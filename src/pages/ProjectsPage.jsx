import { useEffect, useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { setPageMeta } from '../seo'

export default function ProjectsPage({ portfolio, uiText }) {
  const [activeFilter, setActiveFilter] = useState(portfolio.projectFilters[0].key)

  useEffect(() => {
    setPageMeta({
      title: `${uiText.projects} | ${portfolio.name}`,
      description: uiText.projectsPageDescription,
      path: '/proyectos',
    })
  }, [portfolio.name, uiText])

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return portfolio.projects
    }

    return portfolio.projects.filter((project) => project.categoryKey === activeFilter)
  }, [activeFilter, portfolio.projects])

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
                key={filter.key}
                type="button"
                className={`filter-button ${activeFilter === filter.key ? 'is-active' : ''}`}
                aria-pressed={activeFilter === filter.key}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="case-list">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="full" uiText={uiText} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
