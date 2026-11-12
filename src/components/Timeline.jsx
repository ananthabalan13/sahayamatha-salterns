import { useState } from 'react';
import Reveal from './Reveal';

// Interactive timeline: select a node to read its detail. Undated nodes show a label
// instead of a year so no dates are implied that the company has not confirmed.
export default function Timeline({ items }) {
  const [active, setActive] = useState(items[0].id);
  const current = items.find((i) => i.id === active);

  return (
    <div className="timeline">
      <div className="timeline-track" role="tablist" aria-label="Company milestones">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === active}
            className={`timeline-node ${item.id === active ? 'active' : ''}`}
            onClick={() => setActive(item.id)}
          >
            <span className="timeline-dot" />
            <span className="timeline-when">{item.year || item.label}</span>
            <span className="timeline-name">{item.title}</span>
          </button>
        ))}
      </div>
      <Reveal key={current.id} variant="fade">
        <div className="timeline-detail" role="tabpanel">
          <span className="eyebrow">{current.year || current.label}</span>
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </div>
      </Reveal>
    </div>
  );
}
