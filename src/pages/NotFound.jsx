import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function NotFound({ message = 'The page you are looking for does not exist.' }) {
  useDocumentMeta('Page not found', message);
  return (
    <section className="section not-found">
      <div className="container text-center">
        <span className="eyebrow">Error 404</span>
        <h1 className="display-h2">Page not found</h1>
        <p className="mb-4">{message}</p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Link to="/" className="btn-site btn-primary">Back to Home</Link>
          <Link to="/products" className="btn-site btn-outline">Browse Products</Link>
        </div>
      </div>
    </section>
  );
}
