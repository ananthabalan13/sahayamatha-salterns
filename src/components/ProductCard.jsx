import { Link } from 'react-router-dom';
import { img } from '../data/images';
import EnquiryButton from './EnquiryButton';

export default function ProductCard({ product, quoteLabel = 'Request Enquiry' }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.slug}`} className="product-media" aria-label={`View ${product.name}`}>
        <img src={img(product.image, 640, 480)} alt={product.name} loading="lazy" decoding="async" />
        <span className="product-tag">{product.category}</span>
      </Link>
      <div className="product-body">
        <h3>{product.name}</h3>
        <p>{product.short}</p>
        <div className="product-actions">
          <Link to={`/products/${product.slug}`} className="btn-site btn-primary btn-sm">View Details</Link>
          <EnquiryButton product={product.slug} label={quoteLabel} className="btn-sm" />
        </div>
      </div>
    </article>
  );
}
