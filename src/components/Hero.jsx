import Icon from './Icon'
import { heroFacts, heroLinks, person, statsLine } from '../data/profile'
import './Hero.css'

/**
 * Portfolio masthead — the first screen of a CV, not a landing hero. The name
 * sits at document scale, the tagline keeps its `<p>` brackets, and the two
 * calls to action are gone: what a recruiter needs is one line of plain
 * destinations (email, GitHub, LinkedIn, résumé) and the résumé colophon on the
 * right. The headline numbers survive as a single mono line, so the work itself
 * moves up the page.
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
            {person.name}
            <span className="hero__name-stop" aria-hidden="true">
              .
            </span>
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

          <ul className="hero__links" style={{ '--i': 3 }}>
            {heroLinks.map((link) => (
              <li key={link.id}>
                <a className="hero__link" href={link.href}>
                  <Icon name={link.icon} width={15} height={15} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="mono hero__glance" style={{ '--i': 4 }}>
            {statsLine}
          </p>
        </div>

        <dl className="hero__facts" style={{ '--i': 5 }}>
          {heroFacts.map((fact) => (
            <div className="hero__fact" key={fact.label}>
              <dt className="mono hero__fact-label">{fact.label}</dt>
              <dd className="hero__fact-value">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="shell hero__foot" style={{ '--i': 6 }}>
        <a className="hero__scroll" href="#work">
          <span className="mono">Selected work</span>
          <Icon name="arrow-up" width={14} height={14} />
        </a>
      </div>
    </section>
  )
}
