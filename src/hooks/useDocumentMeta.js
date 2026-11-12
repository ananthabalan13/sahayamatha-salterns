import { useEffect } from 'react';

const SITE = 'Sahayamatha Salterns';

// Sets a page-specific <title> and meta description without extra libraries.
export default function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} | Salt & Chemicals, Tuticorin`;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
