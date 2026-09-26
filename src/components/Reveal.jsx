import useReveal from '../hooks/useReveal'

/**
 * Wraps content in a scroll-triggered fade-up.
 * `delay` staggers siblings (in ms) via the --reveal-delay custom property.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
