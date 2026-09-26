import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import useLockBodyScroll from '../hooks/useLockBodyScroll'
import useScrollSpy from '../hooks/useScrollSpy'
import { person, sections, socials } from '../data/profile'
import './Navbar.css'

/** Stable spy targets: the hero plus every navigation section. */
const spyIds = ['top', ...sections.map((section) => section.id)]

/**
 * Floating pill navigation (deliberately not glued edge to edge) with
 * scroll-spy highlighting and a full-screen menu below 900px.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(spyIds)
  const toggleRef = useRef(null)

  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <a className="nav__brand" href="#top" onClick={close}>
            <span className="nav__mark" aria-hidden="true">
              {person.initials}
            </span>
            <span className="nav__name">{person.name}</span>
          </a>

          <nav className="nav__links" aria-label="Sections">
            {sections.map((section) => (
              <a
                key={section.id}
                className={`nav__link ${activeId === section.id ? 'is-active' : ''}`.trim()}
                href={`#${section.id}`}
                aria-current={activeId === section.id ? 'true' : undefined}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a
              className="nav__icon"
              href={socials.github}
              aria-label="GitHub profile"
              title="GitHub profile"
            >
              <Icon name="github" />
            </a>
            <a
              className="nav__icon"
              href={socials.linkedin}
              aria-label="LinkedIn profile"
              title="LinkedIn profile"
            >
              <Icon name="linkedin" />
            </a>
            <a className="btn btn--primary nav__cta" href="#contact">
              Let&apos;s talk
              <span className="btn__icon">
                <Icon name="arrow-up-right" width={14} height={14} />
              </span>
            </a>
            <button
              type="button"
              className="nav__toggle"
              ref={toggleRef}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              <Icon name={open ? 'close' : 'menu'} width={20} height={20} />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`menu-panel ${open ? 'is-open' : ''}`.trim()}>
        <nav className="menu-panel__links" aria-label="Sections (mobile)">
          {sections.map((section, index) => (
            <a
              key={section.id}
              className="menu-panel__link"
              href={`#${section.id}`}
              style={{ '--i': index }}
              onClick={close}
              aria-current={activeId === section.id ? 'true' : undefined}
            >
              <span className="menu-panel__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              {section.label}
            </a>
          ))}
        </nav>

        <div className="menu-panel__foot">
          <a className="btn btn--ghost" href={socials.github}>
            GitHub
            <span className="btn__icon">
              <Icon name="arrow-up-right" width={14} height={14} />
            </span>
          </a>
          <a className="btn btn--ghost" href={socials.linkedin}>
            LinkedIn
            <span className="btn__icon">
              <Icon name="arrow-up-right" width={14} height={14} />
            </span>
          </a>
        </div>
      </div>
    </>
  )
}
