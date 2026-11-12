// Images are the company's own photos, served from the reference website's media host.
// For production, download them into src/assets/images and import them locally.
const BASE = 'https://static.wixstatic.com/media/';

export const wix = (file, w = 1000, h = 750) =>
  `${BASE}${file}/v1/fill/w_${w},h_${h},al_c,q_80/${file}`;

export const FILES = {
  logo: 'f20fd4_a638c34fddde40568c81865612cbfc31~mv2.jpeg',
  hero: 'f20fd4_1163777813d04d2795e5cdfc3371d342~mv2_d_3264_2448_s_4_2.jpg',
  sunset: 'f20fd4_9e086b8d26154537a3675189ecddf526~mv2_d_3947_2603_s_4_2.jpg',
  aboutBadge: 'f20fd4_ea8b8674bcad410caf84be2397936efd~mv2.jpg',
  salt: 'f20fd4_f28592fbf98449daba1148785d60847d~mv2_d_4032_3024_s_4_2.jpg',
  bromine: 'f20fd4_ba3aff146c7542409ceab6943176b2fc~mv2_d_3024_4032_s_4_2.jpg',
  magSulphate: 'f20fd4_d5c3c254e14f47a7a906344f86efb3fd~mv2_d_4032_3024_s_4_2.jpg',
  magChloride: 'f20fd4_9b514c42c40b457f8fd9975306fe1e02~mv2_d_4032_3024_s_4_2.jpeg',
  gypsum: 'f20fd4_d1ffec1f0d0941beb9afe80449e5ba1b~mv2_d_4032_3024_s_4_2.jpeg',
  pop: 'f20fd4_2dfcd3d0faaa4f47b90c0d40611d1a8c~mv2_d_4032_3024_s_4_2.jpeg',
  seaweed: 'f20fd4_cbc797343cce43a9bed81f1e9cb19b49~mv2_d_3024_4032_s_4_2.jpeg',
  magSulphatePenta: 'f20fd4_1e67050e549649fe8a706504ca8961a1~mv2_d_3024_3024_s_4_2.jpeg',
  magHydroxide: 'f20fd4_a319d2864fc747b48ec0a2fa23f9e1a3~mv2_d_3024_4032_s_4_2.jpg',
};

export const img = (key, w, h) => wix(FILES[key], w, h);
