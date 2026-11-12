import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { company, yearsOfExperience } from '../data/company';
import { img } from '../data/images';

export default function About() {
  useDocumentMeta(
    'About Us',
    'Sahayamatha Salterns was promoted in 1971 in Tuticorin and is one of the largest manufacturers of salt, byproducts of salt and chemicals in South India.'
  );

  return (
    <>
      <HeroBanner
        compact
        image="sunset"
        eyebrow="About us"
        title="It all began with salt."
        text={`Promoted in ${company.established}, based in Tuticorin, Tamil Nadu.`}
      />

      <section className="section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <Reveal>
                <span className="eyebrow">Who we are</span>
                <h2 className="display-h2">{company.name}</h2>
                <p className="lead-text">{company.about[0]}</p>
                <p>
                  Established in {company.established}, the company has {yearsOfExperience()}+ years of
                  manufacturing experience.
                </p>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal variant="fade">
                <div className="image-frame">
                  <img src={img('hero', 1000, 700)} alt="The Sahayamatha Salterns salt works" loading="lazy" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
              <Reveal>
                <span className="eyebrow">What we make</span>
                <h2 className="display-h2">Salt, byproducts and chemicals</h2>
                <p>
                  We manufacture free flow and crystal iodised salt. Gypsum is a byproduct of salt, and our range
                  also includes liquid bromine, magnesium compounds, plaster of Paris and sea weed.
                </p>
                <Link to="/products" className="btn-site btn-primary">View Products</Link>
              </Reveal>
            </div>
            <div className="col-lg-6 order-lg-1">
              <Reveal variant="fade">
                <div className="image-frame">
                  <img src={img('salt', 1000, 700)} alt="Salt manufactured by Sahayamatha Salterns" loading="lazy" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Sister concerns"
            title="Companies we promoted"
            text={company.about[1]}
          />
          <div className="row g-4 justify-content-center">
            {company.sisterConcerns.map((name, i) => (
              <div className="col-md-6 col-lg-4" key={name}>
                <Reveal delay={(i % 3) * 80} className="h-100">
                  <div className="feature-card">
                    <h3>{name}</h3>
                    <p>Promoted by Sahayamatha Salterns in Tamil Nadu.</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <Reveal>
                <span className="eyebrow eyebrow-gold">Environmental responsibility</span>
                <h2 className="display-h2 text-white">A healthy ecosystem in our salt works</h2>
                <p className="lead-light">
                  Our salt works attract a wide range of migratory birds, including {company.birds.join(', ')}.
                </p>
                <Link to="/sustainability" className="btn-site btn-gold">Read More</Link>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal variant="fade">
                <div className="image-frame">
                  <img src={img('sunset', 1000, 700)} alt="Sunset at Veppalodai" loading="lazy" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <Reveal>
            <h2 className="display-h2">See our story year by year</h2>
            <p className="mb-4">The company's milestones and group companies in one place.</p>
            <Link to="/history" className="btn-site btn-primary">View History</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
