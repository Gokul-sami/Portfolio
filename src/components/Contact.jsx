import { useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import useCopyToClipboard from '../hooks/useCopyToClipboard'
import { contactLinks, socials } from '../data/profile'
import './Contact.css'

const DEFAULT_HINT = 'Email is the fastest way to reach me.'

/**
 * Contact: the address in plain text (highest-converting contact method),
 * a copy-to-clipboard button and the destination list from the old About page
 * with its hover/focus feedback line kept intact.
 */
export default function Contact() {
  const [hint, setHint] = useState(DEFAULT_HINT)
  const { copied, copy } = useCopyToClipboard()

  const hintHandlers = (text) => ({
    onMouseEnter: () => setHint(text),
    onFocus: () => setHint(text),
    onMouseLeave: () => setHint(DEFAULT_HINT),
    onBlur: () => setHint(DEFAULT_HINT),
  })

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="shell">
        <SectionHead
          index="04 — Contact"
          title="Get in touch."
          lede="Open to conversations about web, mobile and cloud work — email is the fastest way to reach me."
          titleId="contact-title"
        />

        <div className="contact__grid">
          <Reveal className="bezel bezel--spot contact__panel" variant="scale" delay={60}>
            <div className="bezel__core contact__panel-core">
              <span className="contact__glow" aria-hidden="true" />
              <p className="mono contact__label">Email</p>

              <a className="contact__email" href={`mailto:${socials.email}`}>
                {socials.email}
              </a>

              <div className="contact__actions">
                <a className="btn btn--primary" href={`mailto:${socials.email}`}>
                  Send an email
                  <span className="btn__icon">
                    <Icon name="arrow-up-right" width={14} height={14} />
                  </span>
                </a>
                <button type="button" className="btn btn--ghost" onClick={() => copy(socials.email)}>
                  {copied ? 'Address copied' : 'Copy address'}
                  <span className="btn__icon" aria-hidden="true">
                    <Icon name={copied ? 'check' : 'copy'} width={14} height={14} />
                  </span>
                </button>
              </div>

              <p className="sr-only" role="status" aria-live="polite">
                {copied ? 'Email address copied to clipboard' : ''}
              </p>
            </div>
          </Reveal>

          <div className="contact__aside">
            <ul className="contact__list">
              {contactLinks.map((link, index) => (
                <Reveal as="li" key={link.id} variant="right" delay={index * 60}>
                  <a className="contact__link" href={link.href} {...hintHandlers(link.hint)}>
                    <span className="contact__link-icon" aria-hidden="true">
                      <Icon name={link.icon} width={18} height={18} />
                    </span>
                    <span className="contact__link-text">
                      <span className="contact__link-label">{link.label}</span>
                      <span className="mono contact__link-meta">{link.meta}</span>
                    </span>
                    <span className="contact__link-arrow" aria-hidden="true">
                      <Icon name="arrow-up-right" width={16} height={16} />
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>

            <p className="contact__hint mono" aria-live="polite">
              {hint}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
