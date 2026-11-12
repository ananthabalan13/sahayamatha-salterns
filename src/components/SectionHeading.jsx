import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, text, align = 'center', light = false }) {
  return (
    <Reveal className={`section-heading text-${align} ${light ? 'is-light' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}
