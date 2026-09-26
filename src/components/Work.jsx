import ProjectCard from './ProjectCard'
import SectionHead from './SectionHead'
import { projects } from '../data/projects'
import './Work.css'

/**
 * Selected work. Cards sit on an intentionally asymmetric 12-column grid
 * (7+5, then 5+7 with vertical offsets) so the page never reads as a uniform
 * card wall; everything collapses to a single column below 1000px.
 */
export default function Work() {
  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="shell">
        <SectionHead
          index="01 — Selected work"
          title="Projects I have built end to end."
          lede="A blogging platform, an AI screening app, a rescue-coordination platform and a study planner — each entry says what it does, the stack behind it and where to find it."
          titleId="work-title"
        />

        <div className="work__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} variant={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
