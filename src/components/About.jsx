import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { about, person } from '../data/profile'
import './About.css'

/**
 * About: the biography in the first person on the left — this is the only place
 * the page talks about the person rather than the work — and the profile facts
 * (previously the About page's bullet list) as a definition grid on the right.
 */
export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="shell about__grid">
        <div className="about__intro">
          <SectionHead
            index="02 — About"
            title="Hi, I'm Gokul Sami."
            lede={person.summary}
            titleId="about-title"
          />
        </div>

        <Reveal className="bezel about__facts" variant="right" delay={60}>
          <dl className="bezel__core about__facts-core">
            {about.facts.map((fact) => (
              <div className="about__fact" key={fact.label}>
                <dt className="mono about__fact-label">{fact.label}</dt>
                <dd className="about__fact-value">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
