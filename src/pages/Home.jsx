import { Link } from 'react-router-dom';
import { FiAward, FiLayers, FiShare2, FiFeather, FiUsers, FiMail, FiPhone } from 'react-icons/fi';
import HeroBanner from '../components/HeroBanner';
import SectionHeading from '../components/SectionHeading';
import Statistics from '../components/Statistics';
import ProductGrid from '../components/ProductGrid';
import Timeline from '../components/Timeline';
import Reveal from '../components/Reveal';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { company, yearsOfExperience } from '../data/company';
import { products } from '../data/products';
import { timeline } from '../data/timeline';
import { img } from '../data/images';

const operations = [
  {
    title: 'Salt pans & salt works',
    text: 'Our salt works at Veppalodai, Tuticorin, are where it all began in 1971.',
  },
  {
    title: 'Iodised salt',
    text: 'We manufacture free flow and crystal iodised salt.',
  },
  {
    title: 'Byproducts & chemicals',
    text: 'Gypsum is a byproduct of salt, alongside bromine, magnesium compounds and more.',
  },
  {
    title: 'Sister concerns',
    text: 'Five sister concerns promoted by the company manufacture products with the latest technology in the industry.',
  },
];

const reasons = [
  { icon: FiAward, title: 'Manufacturing Experience', text: `Promoted in ${company.established}, with ${yearsOfExperience()}+ years in salt and chemicals.` },
  { icon: FiLayers, title: 'Broad Product Range', text: 'Salt, byproducts of salt and chemicals: nine product lines from one group.' },
  { icon: FiShare2, title: 'Integrated Group', text: 'We promoted five sister concerns across salt refining, bromine and allied chemicals.' },
  { icon: FiFeather, title: 'Environmental Responsibility', text: 'A healthy ecosystem is maintained in our salt works, attracting migratory birds.' },
  { icon: FiUsers, title: 'Open Doors', text: company.visitInvite },
];

export default function Home() {
  useDocumentMeta(
    null,
    'Sahayamatha Salterns Private Limited is one of the largest manufacturers of salt, byproducts of salt and chemicals in South India. Promoted in 1971, based in Tuticorin.'
  );
  const { contact } = company;

  return (
    <>
      <HeroBanner
        eyebrow={`Since ${company.established} · Tuticorin, Tamil Nadu`}
        title="Salt and chemicals, made at the source."
        text="One of the largest manufacturers of salt, byproducts of salt and chemicals in South India."
        actions="home"
      />

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <Reveal>
                <span className="eyebrow">About the company</span>
                <h2 className="display-h2">It all began with salt.</h2>
                <p className="lead-text">{company.about[0]}</p>
                <p>
                  Today the company has {yearsOfExperience()}+ years of experience in manufacturing, and a group of
                  sister concerns in Tamil Nadu.
                </p>
                <Link to="/about" className="btn-site btn-primary">Learn More</Link>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal variant="fade" delay={120}>
                <div className="image-frame">
                  <img src={img('sunset', 1000, 700)} alt="Sunset over the Sahayamatha salt works at Veppalodai" loading="lazy" />
                  <span className="image-badge"><strong>{company.established}</strong> Established</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section section-tint">
        <div className="container">
          <SectionHeading eyebrow="At a glance" title="The company in numbers" />
          <Statistics />
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our products"
            title="Salt, byproducts and chemicals"
            text="Explore the full range manufactured by Sahayamatha Salterns."
          />
          <ProductGrid items={products} />
          <div className="text-center mt-5">
            <Link to="/products" className="btn-site btn-primary">View Full Catalogue</Link>
          </div>
        </div>
      </section>

      {/* Operations (verified facts only) */}
      <section className="section section-navy">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="From salt pans to finished products"
            text="Our operations, as described by the company."
            light
          />
          <div className="row g-4">
            {operations.map((o, i) => (
              <div className="col-md-6 col-lg-3" key={o.title}>
                <Reveal delay={i * 80} className="h-100">
                  <div className="step-card">
                    <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{o.title}</h3>
                    <p>{o.text}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why Sahayamatha" title="Why choose us" />
          <div className="row g-4 justify-content-center">
            {reasons.map((r, i) => (
              <div className="col-md-6 col-lg-4" key={r.title}>
                <Reveal delay={(i % 3) * 80} className="h-100">
                  <div className="feature-card">
                    <span className="feature-icon"><r.icon /></span>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section section-tint">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
              <Reveal>
                <span className="eyebrow">Infrastructure</span>
                <h2 className="display-h2">Salt pans and factories at Veppalodai</h2>
                <p className="lead-text">{company.visitInvite}</p>
                <p>Our salt works and the facilities of our sister concerns are based in Tamil Nadu.</p>
                <Link to="/infrastructure" className="btn-site btn-primary">View Infrastructure</Link>
              </Reveal>
            </div>
            <div className="col-lg-6 order-lg-1">
              <Reveal variant="fade">
                <div className="image-frame">
                  <img src={img('hero', 1000, 700)} alt="The Sahayamatha Salterns salt works" loading="lazy" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our history" title="Milestones and group companies" />
          <Timeline items={timeline} />
          <div className="text-center mt-4">
            <Link to="/history" className="btn-site btn-outline">Full History</Link>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section section-navy">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <Reveal>
                <span className="eyebrow eyebrow-gold">Sustainability</span>
                <h2 className="display-h2 text-white">A salt works that shelters wildlife</h2>
                <p className="lead-light">
                  A healthy ecosystem is maintained in our salt works, resulting in attracting a wide range of
                  migratory birds.
                </p>
                <ul className="chip-list">
                  {company.birds.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <Link to="/sustainability" className="btn-site btn-gold">Our Environment</Link>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal variant="fade">
                <div className="image-frame">
                  <img src={img('sunset', 1000, 700)} alt="Evening light over the salt pans at Veppalodai" loading="lazy" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Business enquiry */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-panel">
              <div>
                <span className="eyebrow eyebrow-gold">Business enquiry</span>
                <h2>Planning a purchase or partnership?</h2>
                <p>Tell us which products you need and we will get back to you at the earliest.</p>
                <div className="cta-contact">
                  <a href={contact.phoneHref}><FiPhone /> {contact.phone}</a>
                  {contact.email && <a href={`mailto:${contact.email}`}><FiMail /> {contact.email}</a>}
                </div>
              </div>
              <Link to="/contact#enquiry" className="btn-site btn-gold">Contact Us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
