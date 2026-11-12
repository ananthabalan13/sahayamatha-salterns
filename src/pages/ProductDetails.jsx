import { Link, useParams } from 'react-router-dom';
import { FiCheck, FiDownload, FiArrowLeft } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { getProduct, getRelated } from '../data/products';
import { img } from '../data/images';
import NotFound from './NotFound';

export default function ProductDetails() {
  const { slug } = useParams();
  const product = getProduct(slug);

  useDocumentMeta(
    product ? product.name : 'Product not found',
    product ? product.short : 'The requested product could not be found.'
  );

  if (!product) return <NotFound message="We could not find that product." />;

  const related = getRelated(product);

  return (
    <>
      <section className="page-top">
        <div className="container">
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span>{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <Reveal variant="fade">
                <div className="image-frame detail-image">
                  <img src={img(product.image, 1000, 800)} alt={product.name} />
                </div>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal>
                <span className="eyebrow">{product.category}</span>
                <h1 className="detail-title">{product.name}</h1>
                <p className="lead-text">{product.description}</p>

                {product.variants && (
                  <p className="variant-line">
                    <strong>Available as:</strong> {product.variants.join(' · ')}
                  </p>
                )}

                <div className="detail-actions">
                  <a href="#product-enquiry" className="btn-site btn-primary">Request Quote</a>
                  {product.datasheet ? (
                    <a href={product.datasheet} className="btn-site btn-outline" download>
                      <FiDownload /> Download Datasheet
                    </a>
                  ) : (
                    <a href="#product-enquiry" className="btn-site btn-outline">Ask for Datasheet</a>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <Reveal className="h-100">
                <div className="info-card">
                  <h2>Applications</h2>
                  <ul className="check-list">
                    {product.applications.map((a) => (
                      <li key={a}><FiCheck aria-hidden="true" /> {a}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-4">
              <Reveal delay={80} className="h-100">
                <div className="info-card">
                  <h2>Technical specifications</h2>
                  {product.specifications.length ? (
                    <table className="spec-table">
                      <tbody>
                        {product.specifications.map(([k, v]) => (
                          <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="muted">Specifications are available on request. Please send us an enquiry.</p>
                  )}
                </div>
              </Reveal>
            </div>

            <div className="col-lg-4">
              <Reveal delay={160} className="h-100">
                <div className="info-card">
                  <h2>Packaging</h2>
                  {product.packaging.length ? (
                    <ul className="check-list">
                      {product.packaging.map((p) => (
                        <li key={p}><FiCheck aria-hidden="true" /> {p}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="muted">Packaging details are available on request.</p>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="product-enquiry">
        <div className="container">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-8">
              <Reveal>
                <div className="form-card">
                  <h2>Enquire about {product.name}</h2>
                  <p className="muted">Tell us what you need and we will get back to you.</p>
                  <ContactForm id="product-form" defaultSubject={`Enquiry: ${product.name}`} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4">
            <h2 className="display-h2 mb-0">Related products</h2>
            <Link to="/products" className="back-link"><FiArrowLeft /> All products</Link>
          </div>
          <div className="row g-4">
            {related.map((p) => (
              <div className="col-md-6 col-lg-4" key={p.slug}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
