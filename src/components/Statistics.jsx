import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import useReveal from '../hooks/useReveal';
import { company, yearsOfExperience } from '../data/company';
import { products } from '../data/products';

// Counts up from 0 once visible. Respects reduced-motion.
function Counter({ value, plain = false }) {
  const [ref, inView] = useReveal(0.4);
  const [shown, setShown] = useState(plain ? value : 0);

  useEffect(() => {
    if (plain) return undefined;
    if (!inView) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(value);
      return undefined;
    }
    const start = performance.now();
    const duration = 1200;
    let frame;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setShown(Math.round(value * (1 - (1 - t) ** 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, plain]);

  return <span ref={ref}>{plain ? value : shown}</span>;
}

// Only figures that can be verified from the company's own website are shown.
export default function Statistics() {
  const stats = [
    { label: 'Established', value: company.established, plain: true },
    { label: 'Years of Experience', value: yearsOfExperience(), suffix: '+' },
    { label: 'Products & Byproducts', value: products.length },
    { label: 'Sister Concerns', value: company.sisterConcerns.length },
  ];
  return (
    <div className="row g-4">
      {stats.map((s, i) => (
        <div className="col-6 col-lg-3" key={s.label}>
          <Reveal delay={i * 80} className="h-100">
            <div className="stat-card">
              <strong>
                <Counter value={s.value} plain={s.plain} />
                {s.suffix}
              </strong>
              <span>{s.label}</span>
            </div>
          </Reveal>
        </div>
      ))}
    </div>
  );
}
