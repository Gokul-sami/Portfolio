import { person, sections } from '../data/profile'
import './Footer.css'

/** Closing strip: identity, in-page navigation and the build note. */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__brand">
          <span className="footer__mark" aria-hidden="true">
            {person.initials}
          </span>
          <div>
            <p className="footer__name">{person.name}</p>
            <p className="mono footer__role">Full-stack web · App developer</p>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {sections.map((section) => (
            <a key={section.id} className="footer__link" href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
          <a className="footer__link" href="#top">
            Top
          </a>
        </nav>

        <p className="mono footer__note">
          © {year} {person.name} · Built with React &amp; Vite
        </p>
      </div>
    </footer>
  )
}
