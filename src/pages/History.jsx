import HeroBanner from '../components/HeroBanner';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';
import Reveal from '../components/Reveal';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { timeline } from '../data/timeline';
import { company, yearsOfExperience } from '../data/company';

export default function History() {
  useDocumentMeta('History', 'Sahayamatha Salterns was promoted in 1971 in Tuticorin and went on to promote five sister concerns in Tamil Nadu.');

  return (
    <>
      <HeroBanner
        compact
        eyebrow="Our history"
        title={`${yearsOfExperience()}+ years since ${company.established}`}
        text="From a salt works in Tuticorin to a group of companies in salt and chemicals."
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Interactive timeline" title="Milestones" text="Select an entry to read more." />
          <Timeline items={timeline} />
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="row g-4">
            {timeline.map((item, i) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <Reveal delay={(i % 3) * 80} className="h-100">
                  <div className="feature-card">
                    <span className="eyebrow">{item.year || item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
