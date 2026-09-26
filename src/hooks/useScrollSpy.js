import { useEffect, useState } from 'react'

const TOP_ID = 'top'

/**
 * Highlights the section currently crossing the middle of the viewport.
 * IntersectionObserver based, so there is no scroll listener and no layout
 * thrash. `ids` must be a stable array (module-level data).
 */
export default function useScrollSpy(ids, { rootMargin = '-45% 0px -45% 0px' } = {}) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element) => element !== null)

    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          setActiveId(entry.target.id === TOP_ID ? '' : entry.target.id)
        })
      },
      { rootMargin, threshold: 0 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [ids, rootMargin])

  return activeId
}
