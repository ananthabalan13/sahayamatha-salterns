import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import SectionHeading from '../components/SectionHeading';
import Gallery from '../components/Gallery';
import Reveal from '../components/Reveal';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { company } from '../data/company';
import { galleryImages } from '../data/gallery';
import { img } from '../data/images';

const areas = [
  {
    title: 'Salt pans and salt works',
    text: 'Our salt works at Veppalodai, Tuticorin, are the foundation of the company. A healthy ecosystem is maintained here, which attracts a wide range of migratory birds.',
    image: 'sunset',
    alt: 'Sunset over the salt works at Veppalodai',
  },
  {
    title: 'Factories and sister concerns',
    text: 'The company promoted Veppalodai Chemicals, Sahamatha Salt Refinery Pvt Ltd, South India Bromine & Allied Chemicals, Siba Flor and Amirta Chemicals. These sister concerns manufacture various products using the latest technology in the industry.',
    image: 'hero',
    alt: 'The Sahayamatha Salterns salt works',
  },
];

export default function Infrastructure() {
  useDocumentMeta(
    'Infrastructure',
    'Salt pans, salt works and factories of Sahayamatha Salterns and its sister concerns in Tuticorin, Tamil Nadu.'
  );

  return (
    <>
      <HeroBanner
        compact
        eyebrow="Infrastructure"
        title="Salt pans and factories"
        text={company.visitInvite}
      />

      <section className="section">
        <div className="container">
          {areas.map((a, i) => (
            <div className={`row align-items-center g-5 ${i ? 'mt-5' : ''}`} key={a.title}>
              <div className={`col-lg-6 ${i % 2 ? 'order-lg-2' : ''}`}>
                <Reveal>
                  <span className="eyebrow">Facility</span>
                  <h2 className="display-h2">{a.title}</h2>
                  <p className="lead-text">{a.text}</p>
                </Reveal>
              </div>
              <div className={`col-lg-6 ${i % 2 ? 'order-lg-1' : ''}`}>
                <Reveal variant="fade">
                  <div className="image-frame">
                    <img src={img(a.image, 1000, 700)} alt={a.alt} loading="lazy" />
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHeading eyebrow="Facility gallery" title="Photographs" />
          <Gallery images={galleryImages.filter((i) => ['Salt Pans', 'Nature', 'Infrastructure'].includes(i.category))} showFilters={false} />
          <p className="note-box mt-4">
            Details of production areas and industrial equipment are available on request. To arrange a visit
            or ask about our facilities, please <Link to="/contact#enquiry">contact us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
