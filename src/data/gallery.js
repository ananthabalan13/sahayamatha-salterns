// Only photographs published on the reference website are listed. Categories with no
// photographs yet (Infrastructure, Company Activities) are hidden automatically by the
// Gallery component. Add entries here as real photos become available.

export const galleryImages = [
  {
    id: 'sunset',
    image: 'sunset',
    category: 'Nature',
    title: 'Sunset at Veppalodai',
    alt: 'Sunset over the salt works at Veppalodai',
  },
  {
    id: 'salt-works',
    image: 'hero',
    category: 'Salt Pans',
    title: 'Sahayamatha salt works',
    alt: 'Photograph of the Sahayamatha Salterns salt works',
  },
  { id: 'p-salt', image: 'salt', category: 'Manufacturing', title: 'Salt', alt: 'Salt produced by Sahayamatha Salterns' },
  { id: 'p-gypsum', image: 'gypsum', category: 'Manufacturing', title: 'Gypsum', alt: 'Gypsum, a byproduct of salt' },
  { id: 'p-mgso4', image: 'magSulphate', category: 'Manufacturing', title: 'Magnesium Sulphate', alt: 'Magnesium sulphate' },
  { id: 'p-mgcl2', image: 'magChloride', category: 'Manufacturing', title: 'Magnesium Chloride Flakes', alt: 'Magnesium chloride flakes' },
  { id: 'p-pop', image: 'pop', category: 'Manufacturing', title: 'Plaster of Paris', alt: 'Plaster of Paris' },
];

export const galleryCategories = ['Salt Pans', 'Manufacturing', 'Infrastructure', 'Nature', 'Company Activities'];
