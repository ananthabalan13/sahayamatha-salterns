import { Link } from 'react-router-dom';

// Sends the visitor to the contact page with the product pre-selected as the subject.
export default function EnquiryButton({ product, label = 'Request Enquiry', variant = 'outline', className = '' }) {
  const to = product ? `/contact?product=${encodeURIComponent(product)}#enquiry` : '/contact#enquiry';
  return (
    <Link to={to} className={`btn-site btn-${variant} ${className}`}>
      {label}
    </Link>
  );
}
