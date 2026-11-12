# Sahayamatha Salterns: Corporate Website

A multi-page corporate website for Sahayamatha Salterns Private Limited (Tuticorin, Tamil Nadu), rebuilt from scratch with React.

**Stack:** HTML5, CSS3, JavaScript ES6+, React 18, React Router DOM 6, Bootstrap 5 (CSS and grid only), React Icons. Vite is used only as the dev server and bundler. No Tailwind, Next.js, TypeScript, jQuery or other UI libraries. All visual design is custom CSS.

## Setup

Requires Node.js 18 or newer.

```bash
npm install
cp .env.example .env     # then set VITE_ENQUIRY_ENDPOINT (see "Enquiry form" below)
npm run dev              # http://localhost:5173
npm run build            # production build in /dist
npm run preview          # serve the production build locally
```

Because this is a single-page app with clean URLs (e.g. `/products/liquid-bromine`), your host must rewrite unknown paths to `index.html` (Netlify `_redirects`: `/* /index.html 200`; Vercel: a rewrite rule; Nginx: `try_files $uri /index.html;`).

## Pages and routes

| Route | Page |
| --- | --- |
| `/` | Home (hero, intro, statistics, products, operations, why choose us, infrastructure, timeline, sustainability, enquiry CTA) |
| `/about` | About Us |
| `/products` | Catalogue with search and category filters |
| `/products/:slug` | Product details, loaded dynamically from `data/products.js` |
| `/infrastructure` | Infrastructure |
| `/gallery` | Gallery with category filters and lightbox |
| `/sustainability` | Sustainability |
| `/history` | History timeline |
| `/contact` | Contact details, enquiry form, Google Map |
| `*` | 404 page (also shown for unknown product slugs) |

## Project structure

```
src/
  assets/{images,icons}/      place local images and icons here
  components/                 Header, Footer, HeroBanner, SectionHeading, ProductCard, ProductGrid,
                              Statistics, Timeline, Gallery, ContactForm, EnquiryButton,
                              ScrollToTop, LoadingSpinner (+ Logo, Reveal helpers)
  pages/                      one file per page
  data/                       company.js, products.js, timeline.js, gallery.js, images.js
  hooks/                      useReveal (scroll animation), useDocumentMeta (title + description per page)
  styles/                     global.css (design tokens), header, footer, home, products, pages, responsive
  App.jsx, main.jsx
```

The colour palette and typography are CSS variables at the top of `styles/global.css`.

## Content: what is verified and what is not

All company content was taken from <https://www.sahayamathasalterns.com/>. Nothing was invented. Where the reference site says nothing, the data is left empty and the UI says so honestly.

**Used from the reference site:** company description, "promoted in 1971", Tuticorin location, the five sister concerns, the migratory birds named (Flamingos, Pelican, Stork, Glossy Ibis, Red Shank), all nine product names, descriptions and photographs, the "Sunset at Veppalodai" photo, and the invitation to visit the salt pans and factories.

**Not available on the reference site, so not shown (add when the company confirms):**

- **Email address.** `company.contact.email` is `null`; email links appear automatically once it is set.
- **Technical specifications, packaging and datasheets.** The `specifications`, `packaging` and `datasheet` fields in `data/products.js` are empty. Product pages show "available on request". Add `[['Purity', '...']]`-style rows, packaging lines, or a datasheet path like `/datasheets/liquid-bromine.pdf` (put the file in `public/datasheets/`) and the sections fill in.
- **Dated history.** Only 1971 is stated. The sister concerns are listed without years, so the timeline shows them as "Sister concern" rather than implying dates. Add a `year` to an entry in `data/timeline.js` once known.
- **Step-by-step manufacturing process, production areas, equipment, mission and vision.** Not published, so the "What we do" section covers only what is stated. Add them to `Home.jsx` / `Infrastructure.jsx` when supplied.
- **Social media links.** Add `{ network: 'linkedin', url: '...' }` entries to `company.social`; the footer icons appear automatically.
- **Statistics.** Only verifiable figures are shown: established 1971, years of experience (calculated from the current year), nine product lines, five sister concerns.

**Please double-check before launch:** the phone number (+91 461 2327389) and fax come from public business directories that list the company's website, not from the reference site itself. Third-party directories also disagree on the founding date (some say 1970 or list a 1970 incorporation). The site uses 1971 because that is what the company's own site states.

## Images

Photos are the company's own, loaded from the reference website's media host through `src/data/images.js`. For production, download the originals into `src/assets/images/`, import them, and point `images.js` at the local files. That removes the dependency on the old Wix site. The gallery only shows categories that have photos, so "Infrastructure" and "Company Activities" appear once images are added to `data/gallery.js`.

## Enquiry form

The form validates all fields (name, email format, optional phone format, subject, message), shows a loading state, and displays success and error messages. A frontend-only form cannot send email, so this one does not pretend to:

- Set `VITE_ENQUIRY_ENDPOINT` in `.env` to any service or API that accepts a JSON `POST` (for example a [Formspree](https://formspree.io) form URL, or your own backend). The payload fields are `name`, `email`, `phone`, `companyName`, `subject`, `message`.
- With no endpoint configured, submitting shows an error explaining that delivery is not connected and giving the phone number.

## SEO, accessibility and performance

Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), page-specific `<title>` and meta description on every route, descriptive `alt` text, lazy-loaded images, code-split secondary pages, skip link, keyboard-operable menu, dropdown and lightbox (Esc and arrow keys), visible focus states, and `prefers-reduced-motion` support. For crawler-friendly social previews, consider pre-rendering the routes at deploy time.
