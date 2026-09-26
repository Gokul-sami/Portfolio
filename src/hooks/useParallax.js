import { useCallback } from 'react'

/**
 * Scroll-linked parallax. The drift is written to the `--parallax` custom
 * property on the node and consumed through CSS's independent `translate`
 * property, so it composes with the transform-based reveal/hover motion instead
 * of overwriting it.
 *
 * travel: maximum distance in px in each direction; sign sets the direction.
 * mode:   'flow'   — in-flow elements drift as they cross the viewport centre
 *         'window' — fixed background layers drift with the page offset
 */
const entries = new Set()
let frame = 0
let listening = false

/** Two passes per frame: read every rect, then write — no layout thrashing. */
function measure() {
  frame = 0

  const viewport = window.innerHeight || 1
  const offset = window.scrollY || window.pageYOffset || 0
  const pending = []

  entries.forEach((entry) => {
    const { node, travel, mode } = entry

    if (!node.isConnected) {
      entries.delete(entry)
      return
    }

    const limit = Math.abs(travel)
    let drift

    if (mode === 'window') {
      drift = ((offset / viewport) * travel)
    } else {
      const rect = node.getBoundingClientRect()
      if (rect.bottom < -240 || rect.top > viewport + 240) return

      // -1 below the fold, 0 at the viewport centre, 1 once it has scrolled past
      const progress =
        (viewport / 2 - (rect.top + rect.height / 2)) / (viewport / 2 + rect.height / 2)
      drift = progress * travel
    }

    pending.push([node, Math.max(-limit, Math.min(limit, drift))])
  })

  pending.forEach(([node, drift]) => {
    node.style.setProperty('--parallax', `${drift.toFixed(2)}px`)
  })
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(measure)
}

function listen() {
  if (listening) return
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule, { passive: true })
  listening = true
}

/**
 * Ref callback (returns its own cleanup, as React 19 allows). Reduced-motion
 * users get a static layer, and browsers without matchMedia simply drift.
 */
export default function useParallax(travel = 16, mode = 'flow') {
  return useCallback(
    (node) => {
      if (!node) return undefined

      const reduced =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (reduced) {
        node.style.setProperty('--parallax', '0px')
        return undefined
      }

      const entry = { node, travel, mode }
      entries.add(entry)
      listen()
      schedule()

      return () => {
        entries.delete(entry)
        node.style.removeProperty('--parallax')
      }
    },
    [travel, mode],
  )
}
