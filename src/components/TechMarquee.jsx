import { skills } from '../data/profile'
import './TechMarquee.css'

/** Split the list in half so both bands always carry the same number of chips. */
const HALF = Math.ceil(skills.length / 2)
const ROW_ONE = skills.slice(0, HALF)
const ROW_TWO = skills.slice(HALF)

/** One duplicated row of chips; the track is translated by exactly -50%. */
function Track({ items, reverse = false, duration }) {
  return (
    <div className="marquee__track" style={{ '--duration': `${duration}s` }}>
      <div className={`marquee__row ${reverse ? 'is-reverse' : ''}`.trim()}>
        {[0, 1].map((pass) =>
          items.map((skill) => (
            <span className="marquee__item" key={`${pass}-${skill}`} aria-hidden={pass === 1}>
              {skill}
            </span>
          )),
        )}
      </div>
    </div>
  )
}

/**
 * Two full-bleed technology bands scrolling in opposite directions — the modern
 * take on the original skills marquee. Decorative, so the readable version of
 * the list lives in the Skills section.
 */
export default function TechMarquee() {
  return (
    <section className="marquee" aria-label="Technologies used">
      <Track items={ROW_ONE} duration={34} />
      <Track items={ROW_TWO} duration={42} reverse />
      <p className="sr-only">
        Technologies used: {skills.join(', ')}. See the Skills section for the full list.
      </p>
    </section>
  )
}
