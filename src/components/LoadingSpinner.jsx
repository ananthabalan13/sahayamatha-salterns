export default function LoadingSpinner({ label = 'Loading', inline = false }) {
  return (
    <span className={inline ? 'spinner-wrap inline' : 'spinner-wrap'} role="status" aria-live="polite">
      <span className="spinner" aria-hidden="true" />
      <span className="visually-hidden">{label}</span>
    </span>
  );
}
