import ProductCard from './ProductCard';
import Reveal from './Reveal';

export default function ProductGrid({ items, quoteLabel }) {
  if (!items.length) {
    return <p className="empty-state">No products match your search. Try a different term or category.</p>;
  }
  return (
    <div className="row g-4">
      {items.map((product, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={product.slug}>
          <Reveal delay={(i % 3) * 80} className="h-100">
            <ProductCard product={product} quoteLabel={quoteLabel} />
          </Reveal>
        </div>
      ))}
    </div>
  );
}
