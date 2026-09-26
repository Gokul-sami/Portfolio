import { useCallback } from 'react'

const REVEALED = 'is-revealed'

let observer = null

function getObserver() {
  if (!observer && typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add(REVEALED)
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
    )
  }

  return observer
}

/**
 * Ref callback that fades an element in the first time it enters the viewport.
 * Shared observer + no scroll listeners, and reduced-motion users (or browsers
 * without IntersectionObserver) get the final state immediately.
 */
export default function useReveal() {
  return useCallback((node) => {
    if (!node) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = getObserver()

    if (prefersReduced || !io) {
      node.classList.add(REVEALED)
      return
    }

    io.observe(node)
  }, [])
}
