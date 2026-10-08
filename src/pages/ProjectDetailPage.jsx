import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { setPageMeta } from '../seo'

export default function ProjectDetailPage({ portfolio, uiText }) {
  const { slug } = useParams()
  const project = portfolio.projects.find((item) => item.slug === slug)

  useEffect(() => {
    if (!project) {
      return
    }
    setPageMeta({
      title: `${project.title} | ${portfolio.name}`,
      description: project.what,
      path: `/proyectos/${project.slug}`,
      image: project.image,
    })
  }, [portfolio.name, project])

  if (!project) {
    return <Navigate to="/proyectos" replace />
  }

  return (
    <>
      <section className="projects-hero">
        <div className="container">
          <Link className="back-link" to="/proyectos">
            {uiText.backToCases}
          </Link>
          <p className="case-kicker">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="case-what">{project.what}</p>
          <p className="case-role">
            <strong>{uiText.whatIDid}.</strong> {project.role}
          </p>
          <p>{project.summary}</p>
        </div>
      </section>

      <section className="content-section projects-page-body">
        <div className="container case-list">
          <ProjectCard project={project} variant="full" omitIntro uiText={uiText} />
        </div>
      </section>
    </>
  )
}
