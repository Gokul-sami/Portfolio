import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { skillGroups } from '../data/profile'
import './Skills.css'

/**
 * Capabilities as an asymmetrical bento grid: 7+5 on the first row, then three
 * equal cards. Every group is text-labelled (no icon-only chips, no meters).
 * Cards scale in on a 60ms stagger so the grid assembles rather than appearing.
 */
export default function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="shell">
        <SectionHead
          index="03 — Toolkit"
          title="The stack behind those builds."
          lede="Grouped by where each tool sits in a project — the interface, the server, the models, the data and the delivery pipeline."
          titleId="skills-title"
        />

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.id}
              className={`bezel bezel--spot bezel--lift skills__card skills__card--${group.id}`}
              variant="scale"
              delay={index * 60}
            >
              <div className="bezel__core skills__core">
                <div className="skills__head">
                  <span className="mono skills__index" aria-hidden="true">
                    {group.index}
                  </span>
                  <h3 className="skills__title">{group.title}</h3>
                </div>

                {group.blurb ? <p className="skills__blurb">{group.blurb}</p> : null}

                <ul className="skills__items">
                  {group.items.map((item) => (
                    <li className="chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
