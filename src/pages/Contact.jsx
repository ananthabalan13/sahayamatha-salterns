import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiPrinter } from 'react-icons/fi';
import HeroBanner from '../components/HeroBanner';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { company } from '../data/company';
import { getProduct } from '../data/products';

export default function Contact() {
  useDocumentMeta('Contact Us', 'Contact Sahayamatha Salterns in Tuticorin, Tamil Nadu for product enquiries, quotes and visits.');
  const { contact } = company;
  const [params] = useSearchParams();
  const { hash } = useLocation();
  const product = getProduct(params.get('product') || '');

  // Honour #enquiry links after the route has rendered.
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  }, [hash]);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;

  return (
    <>
      <HeroBanner compact eyebrow="Contact us" title="Let's talk" text="Product enquiries, quotes and visits to our salt pans." />

      <section className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <Reveal>
                <h2 className="display-h2">Get in touch</h2>
                <ul className="contact-list">
                  <li>
                    <span className="feature-icon"><FiMapPin /></span>
                    <div>
                      <strong>Address</strong>
                      <address>{contact.addressLines.map((l) => <span key={l}>{l}</span>)}</address>
                    </div>
                  </li>
                  <li>
                    <span className="feature-icon"><FiPhone /></span>
                    <div>
                      <strong>Phone</strong>
                      <a href={contact.phoneHref}>{contact.phone}</a>
                    </div>
                  </li>
                  {contact.fax && (
                    <li>
                      <span className="feature-icon"><FiPrinter /></span>
                      <div>
                        <strong>Fax</strong>
                        <span>{contact.fax}</span>
                      </div>
                    </li>
                  )}
                  {contact.email && (
                    <li>
                      <span className="feature-icon"><FiMail /></span>
                      <div>
                        <strong>Email</strong>
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </div>
                    </li>
                  )}
                </ul>
                <p className="muted">{company.visitInvite}</p>
              </Reveal>
            </div>

            <div className="col-lg-7" id="enquiry">
              <Reveal delay={100}>
                <div className="form-card">
                  <h2>Business enquiry</h2>
                  <p className="muted">Fields marked * are required.</p>
                  <ContactForm defaultSubject={product ? `Enquiry: ${product.name}` : ''} key={product ? product.slug : 'general'} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section" aria-label="Map showing our location">
        <iframe
          title="Sahayamatha Salterns location on Google Maps"
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}
