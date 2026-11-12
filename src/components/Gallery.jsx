import { useCallback, useEffect, useMemo, useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';
import { img } from '../data/images';
import { galleryCategories } from '../data/gallery';

export default function Gallery({ images, showFilters = true }) {
  const [filter, setFilter] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

  // Only offer categories that actually contain photos.
  const categories = useMemo(
    () => ['All', ...galleryCategories.filter((c) => images.some((i) => i.category === c))],
    [images]
  );
  const visible = filter === 'All' ? images : images.filter((i) => i.category === filter);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir) => setOpenIndex((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    if (openIndex === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : visible[openIndex];

  return (
    <>
      {showFilters && (
        <div className="filter-bar" role="group" aria-label="Filter gallery">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`filter-chip ${filter === c ? 'active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="gallery-grid">
        {visible.map((item, i) => (
          <button
            type="button"
            key={item.id}
            className="gallery-item"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open ${item.title}`}
          >
            <img src={img(item.image, 700, 520)} alt={item.alt} loading="lazy" decoding="async" />
            <span className="gallery-caption">
              <span>
                <small>{item.category}</small>
                {item.title}
              </span>
              <FiMaximize2 aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.title} onClick={close}>
          <button type="button" className="lightbox-btn lightbox-close" onClick={close} aria-label="Close">
            <FiX />
          </button>
          {visible.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-btn lightbox-prev"
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                aria-label="Previous image"
              >
                <FiChevronLeft />
              </button>
              <button
                type="button"
                className="lightbox-btn lightbox-next"
                onClick={(e) => { e.stopPropagation(); step(1); }}
                aria-label="Next image"
              >
                <FiChevronRight />
              </button>
            </>
          )}
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={img(current.image, 1800, 1200)} alt={current.alt} />
            <figcaption>{current.title}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
