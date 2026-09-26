import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { about, person } from '../data/profile'
import './About.css'

/**
 * About: editorial split with the biography on the left and the profile facts
 * (previously the About page's bullet list) as a definition grid on the right.
 */
export default function About() {
  const [primaryRole, secondaryRole] = person.roles

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
          <Reveal className="about__roles" delay={120}>
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              {primaryRole} · {secondaryRole}
            </p>
          </Reveal>
        </div>

        <Reveal className="bezel about__facts" delay={60}>
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
