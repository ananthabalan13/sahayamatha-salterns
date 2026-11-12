// Names, descriptions and image files are from the reference website.
// `applications` repeats only uses stated in those descriptions.
// `specifications` and `packaging` stay empty until the company supplies verified data,
// and `datasheet` stays null until a real PDF exists (e.g. '/datasheets/liquid-bromine.pdf').

export const categories = ['Salt', 'Chemicals', 'Magnesium Compounds', 'Building Materials', 'Marine'];

export const products = [
  {
    slug: 'salt',
    name: 'Salt',
    category: 'Salt',
    image: 'salt',
    short: 'Free flow and crystal iodised salt for food and industry.',
    description:
      'Salt has long been used for flavouring and for preserving food. It has also been used in tanning, dyeing and bleaching, and the production of pottery, soap, and chlorine. Today, it is widely used in the chemical industry. We manufacture free flow and crystal iodised salt.',
    applications: [
      'Flavouring and preserving food',
      'Tanning, dyeing and bleaching',
      'Production of pottery, soap and chlorine',
      'Chemical industry',
    ],
    variants: ['Free flow iodised salt', 'Crystal iodised salt'],
    specifications: [],
    packaging: [],
    datasheet: null,
  },
  {
    slug: 'liquid-bromine',
    name: 'Liquid Bromine',
    category: 'Chemicals',
    image: 'bromine',
    short: 'Used in agricultural chemicals, dyestuffs, pharmaceuticals and more.',
    description:
      'Bromine is used in many areas such as agricultural chemicals, dyestuffs, insecticides, pharmaceuticals and chemical intermediates. Some uses are being phased out for environmental reasons, but new uses continue to be found. Bromine compounds can be used as flame retardants.',
    applications: [
      'Agricultural chemicals',
      'Dyestuffs',
      'Insecticides',
      'Pharmaceuticals',
      'Chemical intermediates',
      'Flame retardants (bromine compounds)',
    ],
    specifications: [],
    packaging: [],
    datasheet: null,
  },
  {
    slug: 'magnesium-sulphate',
    name: 'Magnesium Sulphate',
    category: 'Magnesium Compounds',
    image: 'magSulphate',
    short: 'Magnesium sulphate, including medical use.',
    description:
      'Magnesium sulfate as a medication is used to treat and prevent low blood magnesium and seizures in women with eclampsia. It is also used in the treatment of torsades de pointes, severe asthma exacerbations, constipation, and barium poisoning.',
    applications: [
      'Low blood magnesium',
      'Seizures in women with eclampsia',
      'Torsades de pointes',
      'Severe asthma exacerbations',
      'Constipation and barium poisoning',
    ],
    specifications: [],
    packaging: [],
    datasheet: null,
  },
  {
    slug: 'magnesium-chloride-flakes',
    name: 'Magnesium Chloride Flakes',
    category: 'Magnesium Compounds',
    image: 'magChloride',
    short: 'A magnesium mineral supplement in flake form.',
    description:
      'This medication is a mineral supplement used to prevent and treat low amounts of magnesium in the blood. Magnesium is very important for the normal functioning of cells, nerves, muscles, bones, and the heart. Usually, a well-balanced diet provides normal blood levels of magnesium.',
    applications: ['Mineral supplement to prevent and treat low blood magnesium'],
    specifications: [],
    packaging: [],
    datasheet: null,
  },
  {
    slug: 'gypsum',
    name: 'Gypsum',
    category: 'Building Materials',
    image: 'gypsum',
    short: 'A byproduct of salt, used in fertiliser, plaster and wallboard.',
    description:
      'Gypsum is a byproduct of salt. It is a soft sulfate mineral composed of calcium sulfate dihydrate, with the chemical formula CaSO₄·2H₂O. It is widely mined and is used as a fertilizer and as the main constituent in many forms of plaster, blackboard chalk and wallboard.',
    applications: ['Fertiliser', 'Plaster', 'Blackboard chalk', 'Wallboard'],
    specifications: [],
    packaging: [],
    datasheet: null,
  },
  {
    slug: 'plaster-of-paris',
    name: 'Plaster of Paris',
    category: 'Building Materials',
    image: 'pop',
    short: 'Plaster for coating, protecting and decorating walls and ceilings.',
    description:
      'Plaster is a building material used for coating, protecting and decorating internal walls and ceilings. It can also be used to create architectural mouldings such as ceiling roses, cornices, corbels, and so on. The most common types of plaster are a composition of gypsum, lime or cement with water and sand.',
    applications: [
      'Coating, protecting and decorating internal walls and ceilings',
      'Architectural mouldings such as ceiling roses, cornices and corbels',
    ],
    specifications: [],
    packaging: [],
    datasheet: null,
  },
  {
    slug: 'sea-weed',
    name: 'Sea Weed',
    category: 'Marine',
    image: 'seaweed',
    short: 'Used as food, fertiliser and a source of industrial gums and chemicals.',
    description:
      'Seaweeds are used in many maritime countries as a source of food, for industrial applications and as a fertiliser. The major utilisation of these plants as food is in Asia, particularly Japan, Korea and China, where seaweed cultivation has become a major industry. The present uses of seaweeds are as human foods, cosmetics, fertilisers, and for the extraction of industrial gums and chemicals.',
    applications: [
      'Human food',
      'Cosmetics',
      'Fertiliser',
      'Extraction of industrial gums and chemicals',
    ],
    specifications: [],
    packaging: [],
    datasheet: null,
  },
  {
    slug: 'magnesium-sulphate-pentahydrate',
    name: 'Magnesium Sulphate Pentahydrate',
    category: 'Magnesium Compounds',
    image: 'magSulphatePenta',
    short: 'Magnesium sulphate pentahydrate for agriculture.',
    description: 'Magnesium Sulphate Pentahydrate is supplied for agricultural use.',
    applications: ['Agriculture'],
    specifications: [],
    packaging: [],
    datasheet: null,
  },
  {
    slug: 'magnesium-hydroxide',
    name: 'Magnesium Hydroxide',
    category: 'Magnesium Compounds',
    image: 'magHydroxide',
    short: 'Magnesium hydroxide for agriculture.',
    description: 'Magnesium Hydroxide is supplied for agricultural use.',
    applications: ['Agriculture'],
    specifications: [],
    packaging: [],
    datasheet: null,
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);

export const getRelated = (product, count = 3) => {
  const same = products.filter((p) => p.slug !== product.slug && p.category === product.category);
  const rest = products.filter((p) => p.slug !== product.slug && p.category !== product.category);
  return [...same, ...rest].slice(0, count);
};
