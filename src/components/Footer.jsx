import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from './Logo';
import { company } from '../data/company';
import { products } from '../data/products';

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
  youtube: FaYoutube,
};

const quickLinks = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/products', 'Products'],
  ['/infrastructure', 'Infrastructure'],
  ['/gallery', 'Gallery'],
  ['/sustainability', 'Sustainability'],
  ['/history', 'History'],
  ['/contact', 'Contact Us'],
];

export default function Footer() {
  const { contact } = company;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <Logo inverse />
            <p className="footer-about">
              {company.summary} Promoted in {company.established} and based in Tuticorin, Tamil Nadu.
            </p>
            {company.social.length > 0 && (
              <div className="footer-social">
                {company.social.map((s) => {
                  const Icon = socialIcons[s.network];
                  return Icon ? (
                    <a key={s.network} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.network}>
                      <Icon />
                    </a>
                  ) : null;
                })}
              </div>
            )}
          </div>

          <div className="col-6 col-lg-2">
            <h4>Quick Links</h4>
            <ul className="footer-list">
              {quickLinks.map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h4>Products</h4>
            <ul className="footer-list">
              {products.map((p) => (
                <li key={p.slug}><Link to={`/products/${p.slug}`}>{p.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <FiMapPin />
                <address>{contact.addressLines.map((l) => <span key={l}>{l}</span>)}</address>
              </li>
              <li><FiPhone /><a href={contact.phoneHref}>{contact.phone}</a></li>
              {contact.email && <li><FiMail /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} {company.name}. All Rights Reserved.</span>
          <Link to="/contact">Business enquiries</Link>
        </div>
      </div>
    </footer>
  );
}
