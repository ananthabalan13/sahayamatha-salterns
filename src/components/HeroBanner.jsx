import { Link } from 'react-router-dom';
import { img } from '../data/images';

// Full-width hero. Used on Home (large) and as a page banner on inner pages (compact).
export default function HeroBanner({
  image = 'hero',
  eyebrow,
  title,
  text,
  compact = false,
  actions = null,
  children,
}) {
  return (
    <section className={`hero ${compact ? 'hero-compact' : ''}`}>
      <img
        className="hero-bg"
        src={img(image, 2000, 1200)}
        alt=""
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-overlay" />
      <div className="container hero-inner">
        {eyebrow && <span className="eyebrow eyebrow-gold hero-anim hero-anim-1">{eyebrow}</span>}
        <h1 className="hero-anim hero-anim-2">{title}</h1>
        {text && <p className="hero-text hero-anim hero-anim-3">{text}</p>}
        {actions === 'home' && (
          <div className="hero-actions hero-anim hero-anim-4">
            <Link to="/products" className="btn-site btn-gold">Explore Products</Link>
            <Link to="/contact" className="btn-site btn-light">Contact Us</Link>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
