import useReveal from '../hooks/useReveal';

// Wraps children in a scroll-reveal container. `variant`: 'up' (default) or 'fade'.
export default function Reveal({ children, variant = 'up', delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, inView] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
