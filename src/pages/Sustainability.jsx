import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { company } from '../data/company';
import { img } from '../data/images';

export default function Sustainability() {
  useDocumentMeta(
    'Sustainability',
    'A healthy ecosystem is maintained in the Sahayamatha Salterns salt works, attracting flamingos, pelicans, storks, glossy ibis and red shank.'
  );

  return (
    <>
      <HeroBanner
        compact
        image="sunset"
        eyebrow="Sustainability"
        title="A working salt works that welcomes wildlife"
        text="A healthy ecosystem is maintained in our salt works."
      />

      <section className="section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <Reveal>
                <span className="eyebrow">Environmental responsibility</span>
                <h2 className="display-h2">The salt pan ecosystem</h2>
                <p className="lead-text">
                  A healthy ecosystem is maintained in our salt works, resulting in attracting a wide range of
                  migratory birds.
                </p>
                <p>
                  Salt pans at Veppalodai, Tuticorin, are shared with the birds that visit them. Looking after this
                  ecosystem is part of how we run our salt works.
                </p>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal variant="fade">
                <div className="image-frame">
                  <img src={img('sunset', 1000, 700)} alt="Sunset over the salt pans at Veppalodai" loading="lazy" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHeading
            eyebrow="Migratory birds"
            title="Visitors to our salt works"
            text="Birds recorded at our salt works include:"
          />
          <div className="row g-4 justify-content-center">
            {company.birds.map((bird, i) => (
              <div className="col-6 col-md-4 col-lg" key={bird}>
                <Reveal delay={i * 70} className="h-100">
                  <div className="bird-card">{bird}</div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <Reveal>
            <h2 className="display-h2">{company.visitInvite}</h2>
            <p className="mb-4">Get in touch to arrange a visit.</p>
            <Link to="/contact#enquiry" className="btn-site btn-primary">Contact Us</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
