// Every value here comes from https://www.sahayamathasalterns.com/ unless marked otherwise.
// Anything the reference site does not state is left null/empty on purpose, and the UI
// handles that gracefully. Do not fill gaps with guesses.

export const company = {
  name: 'Sahayamatha Salterns Private Limited',
  shortName: 'Sahayamatha Salterns',
  tagline: 'It all began with salt.',
  established: 1971, // "The company was promoted in the year 1971."
  location: 'Tuticorin (Thoothukudi), Tamil Nadu, India',
  summary:
    'One of the largest manufacturers of salt, byproducts of salt and chemicals in South India.',
  about: [
    'Sahayamatha Salterns Private Limited is one of the largest manufacturers of salt, byproducts of salt and chemicals in South India. The company was promoted in the year 1971 and is situated in Tuticorin, Tamil Nadu, India.',
    'The company was instrumental in promoting Veppalodai Chemicals, Sahamatha Salt Refinery Pvt Ltd, South India Bromine & Allied Chemicals, Siba Flor and Amirta Chemicals in Tamil Nadu. The sister concern companies manufacture various products using the latest technology in the industry.',
  ],
  sisterConcerns: [
    'Veppalodai Chemicals',
    'Sahamatha Salt Refinery Pvt Ltd',
    'South India Bromine & Allied Chemicals',
    'Siba Flor',
    'Amirta Chemicals',
  ],
  birds: ['Flamingos', 'Pelicans', 'Storks', 'Glossy Ibis', 'Red Shank'],
  visitInvite: 'We warmly welcome you to visit our salt pans and factories.',
  contact: {
    addressLines: [
      '13-A/1, Pillaiyar Koil Street',
      'Meenakshipuram West',
      'Tuticorin, Tamil Nadu 628 002, India',
    ],
    // Phone and fax are from public business directories (ChemicalRegister, ZoomInfo)
    // that list the company's own website; the reference site itself shows no number.
    phone: '+91 461 2327389',
    phoneHref: 'tel:+914612327389',
    fax: '+91 461 2321650',
    // The reference website publishes no email address. Set one here once confirmed
    // and every email link in the site will appear automatically.
    email: null,
    mapQuery: '13-A/1 Pillaiyar Koil Street Meenakshipuram West Tuticorin 628002',
  },
  // The reference website lists no social profiles. Add real URLs here when available.
  social: [],
};

export const yearsOfExperience = () => new Date().getFullYear() - company.established;
