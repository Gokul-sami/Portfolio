import Reveal from './Reveal'

/**
 * Shared section header: mono index, display title and optional lede.
 * Enters on a focus pull by default (blur → sharp); pass `variant` to override.
 */
export default function SectionHead({ index, title, lede, titleId, variant = 'blur', delay = 0 }) {
  return (
    <Reveal className="section__head" variant={variant} delay={delay}>
      <p className="section__index">{index}</p>
      <h2 className="section__title" id={titleId}>
        {title}
      </h2>
      {lede ? <p className="section__lede">{lede}</p> : null}
    </Reveal>
  )
}
