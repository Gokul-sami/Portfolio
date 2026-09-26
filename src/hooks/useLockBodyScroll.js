import { useEffect } from 'react'

/**
 * Freezes background scrolling while the mobile menu is open and compensates
 * for the disappearing scrollbar so the layout does not jump.
 */
export default function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined

    const gap = window.innerWidth - document.documentElement.clientWidth
    document.body.style.setProperty('--scrollbar-gap', `${Math.max(gap, 0)}px`)
    document.body.classList.add('is-locked')

    return () => {
      document.body.classList.remove('is-locked')
      document.body.style.removeProperty('--scrollbar-gap')
    }
  }, [locked])
}
