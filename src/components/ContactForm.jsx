import { useState } from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import LoadingSpinner from './LoadingSpinner';
import { company } from '../data/company';

const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT;

const EMPTY = { name: '', email: '', phone: '', companyName: '', subject: '', message: '' };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (values.phone.trim() && !/^[+()\d\s-]{7,20}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (values.subject.trim().length < 3) errors.subject = 'Please add a subject.';
  if (values.message.trim().length < 10) errors.message = 'Please write at least 10 characters.';
  return errors;
}

export default function ContactForm({ defaultSubject = '', id = 'enquiry-form' }) {
  const [values, setValues] = useState({ ...EMPTY, subject: defaultSubject });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorText, setErrorText] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    // Be honest when no delivery service is connected: never pretend the enquiry was sent.
    if (!ENDPOINT) {
      setStatus('error');
      setErrorText(
        `Online enquiry delivery is not connected yet, so your message was not sent. Please call ${company.contact.phone}${
          company.contact.email ? ` or email ${company.contact.email}` : ''
        }.`
      );
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setStatus('success');
      setValues({ ...EMPTY });
    } catch (err) {
      setStatus('error');
      setErrorText('Sorry, something went wrong while sending your enquiry. Please try again or contact us by phone.');
    }
  };

  const field = (name, label, props = {}) => (
    <div className={props.wide ? 'col-12' : 'col-12 col-md-6'}>
      <label htmlFor={`${id}-${name}`} className="form-label-site">{label}</label>
      {props.textarea ? (
        <textarea
          id={`${id}-${name}`} name={name} rows="5" value={values[name]} onChange={onChange}
          className={`form-control-site ${errors[name] ? 'invalid' : ''}`}
          aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${id}-${name}-err` : undefined}
        />
      ) : (
        <input
          id={`${id}-${name}`} name={name} type={props.type || 'text'} value={values[name]} onChange={onChange}
          autoComplete={props.autoComplete}
          className={`form-control-site ${errors[name] ? 'invalid' : ''}`}
          aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${id}-${name}-err` : undefined}
        />
      )}
      {errors[name] && <p className="field-error" id={`${id}-${name}-err`}>{errors[name]}</p>}
    </div>
  );

  if (status === 'success') {
    return (
      <div className="form-alert form-success" role="status">
        <FiCheckCircle />
        <div>
          <strong>Thank you. Your enquiry has been sent.</strong>
          <p>We will get back to you at the earliest.</p>
          <button type="button" className="btn-site btn-outline btn-sm" onClick={() => setStatus('idle')}>
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="contact-form">
      <div className="row g-3">
        {field('name', 'Full Name *', { autoComplete: 'name' })}
        {field('email', 'Email *', { type: 'email', autoComplete: 'email' })}
        {field('phone', 'Phone', { type: 'tel', autoComplete: 'tel' })}
        {field('companyName', 'Company Name', { autoComplete: 'organization' })}
        {field('subject', 'Subject *', { wide: true })}
        {field('message', 'Message *', { wide: true, textarea: true })}
      </div>

      {status === 'error' && (
        <div className="form-alert form-error" role="alert">
          <FiAlertCircle />
          <p>{errorText}</p>
        </div>
      )}

      <button type="submit" className="btn-site btn-primary mt-3" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <>
            <LoadingSpinner inline label="Sending" /> Sending...
          </>
        ) : (
          'Send Enquiry'
        )}
      </button>
    </form>
  );
}
