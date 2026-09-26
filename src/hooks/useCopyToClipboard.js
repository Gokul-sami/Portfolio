import { useCallback, useEffect, useRef, useState } from 'react'

/** Copy-to-clipboard with a short-lived "copied" confirmation state. */
export default function useCopyToClipboard(resetAfter = 2000) {
  const [copied, setCopied] = useState(false)
  const timeout = useRef(0)

  const copy = useCallback(
    async (value) => {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(value)
        } else {
          // Fallback for browsers or contexts without the async clipboard API.
          const field = document.createElement('textarea')
          field.value = value
          field.setAttribute('readonly', '')
          field.style.position = 'fixed'
          field.style.opacity = '0'
          document.body.appendChild(field)
          field.select()
          document.execCommand('copy')
          document.body.removeChild(field)
        }

        setCopied(true)
        window.clearTimeout(timeout.current)
        timeout.current = window.setTimeout(() => setCopied(false), resetAfter)
        return true
      } catch {
        return false
      }
    },
    [resetAfter],
  )

  useEffect(() => () => window.clearTimeout(timeout.current), [])

  return { copied, copy }
}
