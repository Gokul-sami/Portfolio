import Reveal from './Reveal'

/** Shared section header: mono index, display title and optional lede. */
export default function SectionHead({ index, title, lede, titleId }) {
  return (
    <Reveal className="section__head">
      <p className="section__index">{index}</p>
      <h2 className="section__title" id={titleId}>
        {title}
      </h2>
      {lede ? <p className="section__lede">{lede}</p> : null}
    </Reveal>
  )
}
