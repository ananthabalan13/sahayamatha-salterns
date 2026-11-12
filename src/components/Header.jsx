import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';
import { products } from '../data/products';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products', dropdown: true },
  { to: '/infrastructure', label: 'Infrastructure' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onDown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdown(false);
    };
    const onKey = (e) => e.key === 'Escape' && (setDropdown(false), setOpen(false));
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const productsActive = location.pathname.startsWith('/products');

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-wrap">
        <Logo />

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <nav id="primary-nav" className={`primary-nav ${open ? 'open' : ''}`} aria-label="Primary">
          <ul>
            {links.map((l) =>
              l.dropdown ? (
                <li
                  key={l.to}
                  ref={dropdownRef}
                  className={`has-dropdown ${dropdown ? 'show' : ''}`}
                  onMouseEnter={() => window.innerWidth >= 992 && setDropdown(true)}
                  onMouseLeave={() => window.innerWidth >= 992 && setDropdown(false)}
                >
                  <div className="dropdown-head">
                    <NavLink to={l.to} className={`nav-link-site ${productsActive ? 'active' : ''}`}>
                      {l.label}
                    </NavLink>
                    <button
                      type="button"
                      className="dropdown-caret"
                      aria-label="Toggle products menu"
                      aria-expanded={dropdown}
                      onClick={() => setDropdown((d) => !d)}
                    >
                      <FiChevronDown />
                    </button>
                  </div>
                  <ul className="dropdown-menu-site">
                    <li>
                      <Link to="/products" className="dropdown-all">All Products</Link>
                    </li>
                    {products.map((p) => (
                      <li key={p.slug}>
                        <Link to={`/products/${p.slug}`}>{p.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.end} className="nav-link-site">
                    {l.label}
                  </NavLink>
                </li>
              )
            )}
            <li className="nav-cta">
              <Link to="/contact#enquiry" className="btn-site btn-gold btn-sm">Get In Touch</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
