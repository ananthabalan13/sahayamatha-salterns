import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import HeroBanner from '../components/HeroBanner';
import ProductGrid from '../components/ProductGrid';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { products, categories } from '../data/products';

export default function Products() {
  useDocumentMeta(
    'Products',
    'Salt, liquid bromine, magnesium sulphate, magnesium chloride flakes, gypsum, plaster of Paris, sea weed and more from Sahayamatha Salterns.'
  );
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const inCategory = category === 'All' || p.category === category;
      const inQuery = !q || `${p.name} ${p.short} ${p.category}`.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [query, category]);

  return (
    <>
      <HeroBanner
        compact
        image="salt"
        eyebrow="Product catalogue"
        title="Our Products"
        text="Salt, byproducts of salt and chemicals."
      />
      <section className="section">
        <div className="container">
          <div className="catalogue-tools">
            <div className="search-box">
              <FiSearch aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                aria-label="Search products"
              />
            </div>
            <div className="filter-bar" role="group" aria-label="Filter by category">
              {['All', ...categories].map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`filter-chip ${category === c ? 'active' : ''}`}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <p className="result-count" aria-live="polite">
            Showing {items.length} of {products.length} products
          </p>
          <ProductGrid items={items} quoteLabel="Request Quote" />
        </div>
      </section>
    </>
  );
}
