import { useEffect, useState } from 'react'
import Icon from './Icon'

/** Floating "back to top" control that appears once past the hero. */
export default function BackToTop({ threshold = 700 }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      setVisible(window.scrollY > threshold)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [threshold])

  return (
    <a
      className={`to-top ${visible ? 'is-visible' : ''}`.trim()}
      href="#top"
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <Icon name="arrow-up" />
    </a>
  )
}
