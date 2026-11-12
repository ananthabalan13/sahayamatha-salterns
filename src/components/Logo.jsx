import { Link } from 'react-router-dom';
import { img } from '../data/images';
import { company } from '../data/company';

export default function Logo({ inverse = false }) {
  return (
    <Link to="/" className={`brand ${inverse ? 'brand-inverse' : ''}`} aria-label={`${company.name} home`}>
      <span className="brand-mark">
        <img src={img('logo', 157, 78)} alt="" width="78" height="39" />
      </span>
      <span className="brand-text">
        <strong>Sahayamatha</strong>
        <small>Salterns Pvt. Ltd.</small>
      </span>
    </Link>
  );
}
