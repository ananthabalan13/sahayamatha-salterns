import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

import Home from './pages/Home';

// Secondary pages are code-split to keep the first load fast.
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Infrastructure = lazy(() => import('./pages/Infrastructure'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const History = lazy(() => import('./pages/History'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Suspense fallback={<div className="page-loading"><LoadingSpinner label="Loading page" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/history" element={<History />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
