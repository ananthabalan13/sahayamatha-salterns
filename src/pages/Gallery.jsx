import HeroBanner from '../components/HeroBanner';
import Gallery from '../components/Gallery';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { galleryImages } from '../data/gallery';

export default function GalleryPage() {
  useDocumentMeta('Gallery', 'Photographs of the Sahayamatha Salterns salt works, products and surroundings in Tuticorin.');
  return (
    <>
      <HeroBanner compact image="sunset" eyebrow="Gallery" title="Photo gallery" text="Our salt works, products and surroundings." />
      <section className="section">
        <div className="container">
          <Gallery images={galleryImages} />
        </div>
      </section>
    </>
  );
}
