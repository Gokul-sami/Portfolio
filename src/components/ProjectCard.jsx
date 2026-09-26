import Icon from './Icon'
import Reveal from './Reveal'
import useParallax from '../hooks/useParallax'
import './ProjectCard.css'

/**
 * Single project card: media, what it does, stack chips and links.
 * `variant` is the grid column slot, `reveal` the entrance direction and
 * `delay` the stagger passed on to Reveal.
 */
export default function ProjectCard({ project, variant, reveal = 'up', delay = 0 }) {
  const { index, title, description, focus, date, image, position, tags, links } = project

  // Cover art drifts against the card as it crosses the viewport.
  const coverRef = useParallax(10)

  // Writes the pointer position straight to the node for the sheen overlay.
  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <Reveal
      as="article"
      className={`bezel bezel--spot bezel--lift work__card work__card--${variant}`}
      variant={reveal}
      delay={delay}
      onPointerMove={handlePointerMove}
    >
      <div className="bezel__core project__core">
        <div className="project__media">
          <div className="project__media-drift" ref={coverRef}>
            <img
              className="project__image"
              src={image}
              alt={`${title} preview`}
              style={{ objectPosition: position }}
              loading="lazy"
              decoding="async"
            />
          </div>
          <span className="project__scrim" aria-hidden="true" />
          <span className="project__index mono" aria-hidden="true">
            {index}
          </span>
        </div>

        <div className="project__body">
          <div className="project__meta">
            <span className="mono project__date">{date}</span>
            <span className="mono project__focus">{focus}</span>
          </div>

          <h3 className="project__title">
            {title}
            <Icon name="arrow-up-right" className="project__title-icon" width={17} height={17} />
          </h3>

          <p className="project__text">{description}</p>

          <ul className="project__tags">
            {tags.map((tag) => (
              <li className="chip" key={tag}>
                {tag}
              </li>
            ))}
          </ul>

          <div className="project__links">
            {links.map((link) => (
              <a
                key={link.href}
                className="project__link"
                href={link.href}
                title={`${title} — ${link.label}`}
              >
                <Icon name={link.icon} width={16} height={16} />
                {link.label}
                <span className="btn__icon project__link-icon" aria-hidden="true">
                  <Icon name="arrow-up-right" width={12} height={12} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
