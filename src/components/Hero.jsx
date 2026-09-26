import Icon from './Icon'
import { heroFacts, person, stats } from '../data/profile'
import './Hero.css'

/**
 * Editorial hero — no portrait. The copy runs wide on the left, the résumé
 * colophon fills the right column, and the headline numbers close the section
 * on a full-width hairline. The original two role headings and the
 * "<p> … </p>" tagline are kept.
 */
export default function Hero() {
  const [primaryRole, secondaryRole] = person.roles

  return (
    <section className="hero" id="top">
      <div className="shell hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow" style={{ '--i': 0 }}>
            <span className="eyebrow__dot" aria-hidden="true" />
            {primaryRole} · {secondaryRole}
          </p>

          <h1 className="hero__name" style={{ '--i': 1 }}>
            <span className="hero__name-line">{person.name}</span>
          </h1>

          <p className="hero__tagline" style={{ '--i': 2 }}>
            <span className="hero__bracket" aria-hidden="true">
              &lt;p&gt;
            </span>
            {person.tagline}
            <span className="hero__bracket" aria-hidden="true">
              &lt;/p&gt;
            </span>
          </p>

          <div className="hero__actions" style={{ '--i': 3 }}>
            <a className="btn btn--primary" href="#work">
              View selected work
              <span className="btn__icon">
                <Icon name="arrow-up-right" width={14} height={14} />
              </span>
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
              <span className="btn__icon">
                <Icon name="arrow-up-right" width={14} height={14} />
              </span>
            </a>
          </div>

        </div>

        <dl className="hero__facts" style={{ '--i': 4 }}>
          {heroFacts.map((fact) => (
            <div className="hero__fact" key={fact.label}>
              <dt className="mono hero__fact-label">{fact.label}</dt>
              <dd className="hero__fact-value">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="shell">
        <ul className="hero__stats" style={{ '--i': 5 }}>
          {stats.map((stat) => (
            <li className="hero__stat" key={stat.label}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="shell hero__foot" style={{ '--i': 6 }}>
        <a className="hero__scroll" href="#work">
          <span className="mono">Scroll for selected work</span>
          <Icon name="arrow-up" width={14} height={14} />
        </a>
      </div>
    </section>
  )
}
