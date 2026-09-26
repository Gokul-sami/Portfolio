import useReveal from '../hooks/useReveal'

/**
 * Wraps content in a scroll-triggered entrance.
 * `delay` staggers siblings (in ms) via the --reveal-delay custom property and
 * `variant` picks the direction — 'up' (default), 'left', 'right', 'scale' or
 * 'blur' — resolved from [data-reveal] in global.css.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  variant = 'up',
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useReveal()

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={`reveal ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
