export const categories = [
  {
    slug: "iphone",
    name: "iPhone",
    dek: "18 Pro y Pro Max ya están en tienda. Air, 17 y 17e siguen en la gama.",
  },
  {
    slug: "airpods",
    name: "AirPods",
    dek: "Los 5 ponen cancelación de ruido en el modelo de 129 dólares.",
  },
  {
    slug: "watch",
    name: "Watch",
    dek: "Series 12 y Ultra 4, a la venta desde el 18 de septiembre.",
  },
  {
    slug: "duo",
    name: "Duo",
    dek: "El plegable. Una sección, no el sitio entero. Preventa el 16 de octubre.",
  },
  {
    slug: "ios",
    name: "iOS",
    dek: "iOS 26: Liquid Glass, traducción en vivo y los fallos que Apple acabó escribiendo.",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export const sections = [
  {
    slug: "iphone",
    name: "iPhone",
    path: "/iphone",
    dek: "18 Pro y Pro Max ya están en tienda. Air, 17 y 17e siguen en la gama.",
  },
  {
    slug: "iphone-duo",
    name: "iPhone Duo",
    path: "/iphone/iphone-duo",
    dek: "Una entrada. Dentro, cada pregunta en su orden.",
  },
  {
    slug: "ios",
    name: "iOS",
    path: "/ios",
    dek: "Liquid Glass, traducción en vivo y los fallos que los usuarios reportaron.",
  },
  {
    slug: "airpods",
    name: "AirPods",
    path: "/airpods",
    dek: "Los 5 ponen cancelación de ruido en el modelo de 129 dólares.",
  },
  {
    slug: "watch",
    name: "Apple Watch",
    path: "/watch",
    dek: "Series 12 y Ultra 4, a la venta desde el 18 de septiembre.",
  },
  {
    slug: "accesorios",
    name: "Accesorios",
    path: "/accesorios",
    dek: "Lo que existe como producto, no como foto de un vídeo.",
  },
  {
    slug: "comparativas",
    name: "Comparativas",
    path: "/comparativas",
    dek: "Dos fichas, una pregunta. Solo cifras ya publicadas.",
  },
  {
    slug: "guias",
    name: "Trucos & Guías",
    path: "/guias",
    dek: "Cómo se usa, cuando el sistema ya lo describe.",
  },
] as const;

export type SectionSlug = (typeof sections)[number]["slug"];

const comparativas = new Set([
  "iphone-18-pro-vs-max",
  "iphone-duo-vs-iphone-18-pro-max",
  "iphone-duo-vs-galaxy-z-fold8",
]);

const guias = new Set(["funciones-trucos"]);

const accesorios = new Set([
  "mejores-fundas",
  "mejores-accesorios",
  "necesita-funda",
  "apple-pencil",
]);

export function sectionsFor(article: { slug: string; category: CategorySlug }): SectionSlug[] {
  const rails: SectionSlug[] = [];
  if (article.category === "iphone") rails.push("iphone");
  if (article.category === "duo") rails.push("iphone-duo");
  if (article.category === "airpods") rails.push("airpods");
  if (article.category === "watch") rails.push("watch");
  if (article.category === "ios") rails.push("ios");
  if (comparativas.has(article.slug)) rails.push("comparativas");
  if (guias.has(article.slug)) rails.push("guias");
  if (accesorios.has(article.slug)) rails.push("accesorios");
  return rails;
}

export function sectionBySlug(slug: string) {
  return sections.find((section) => section.slug === slug);
}

export function articlePath(article: { slug: string; category: CategorySlug }) {
  if (
    article.slug === "iphone-duo-vs-iphone-18-pro-max" ||
    article.slug === "iphone-duo-vs-galaxy-z-fold8"
  ) {
    return `/comparativas/${article.slug}`;
  }
  if (article.category === "duo") return `/iphone/iphone-duo/${article.slug}`;
  if (article.category === "iphone") return `/iphone/${article.slug}`;
  if (article.category === "airpods") return `/airpods/${article.slug}`;
  if (article.category === "ios") return `/ios/${article.slug}`;
  return `/watch/${article.slug}`;
}

export const clusters = {
  viral: "Señal",
  transaccional: "Compra",
  informativo: "Ficha",
  pilar: "Pilar",
} as const;

export type Cluster = keyof typeof clusters;

export function categoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export const featuredSlug = "otono-2026";

export const duoChapters = [
  "precio-espana",
  "funciones-trucos",
  "cuanto-dura-bateria",
  "sim-fisica-esim",
  "pliegue-pantalla",
  "cuantas-veces-se-puede-doblar-iphone-duo",
  "resistente-agua-ip68",
  "que-pasa-si-se-cae",
  "iphone-duo-vs-iphone-18-pro-max",
  "iphone-duo-vs-galaxy-z-fold8",
] as const;

export const legacyArticleHrefs: Record<string, string> = {
  "guia-completa": "/iphone/iphone-duo/funciones-trucos",
  "cuantas-veces-se-puede-doblar": "/iphone/iphone-duo/cuantas-veces-se-puede-doblar-iphone-duo",
  "pliegue-en-la-pantalla": "/iphone/iphone-duo/pliegue-pantalla",
  "resistente-al-agua": "/iphone/iphone-duo/resistente-agua-ip68",
  "cuanto-cuesta": "/iphone/iphone-duo/precio-espana",
  "vs-iphone-18-pro-max": "/comparativas/iphone-duo-vs-iphone-18-pro-max",
  "vs-galaxy-z-fold": "/comparativas/iphone-duo-vs-galaxy-z-fold8",
  bateria: "/iphone/iphone-duo/cuanto-dura-bateria",
  "sim-fisica": "/iphone/iphone-duo/sim-fisica-esim",
  "funciones-ocultas": "/iphone/iphone-duo/funciones-trucos",
  trucos: "/iphone/iphone-duo/funciones-trucos",
  "dos-aplicaciones": "/iphone/iphone-duo/funciones-trucos",
  "apple-pencil": "/iphone/iphone-duo/funciones-trucos",
  "mejores-fundas": "/iphone/iphone-duo/que-pasa-si-se-cae",
  "mejores-accesorios": "/iphone/iphone-duo/que-pasa-si-se-cae",
  "necesita-funda": "/iphone/iphone-duo/que-pasa-si-se-cae",
  "se-raya-la-pantalla": "/iphone/iphone-duo/pliegue-pantalla",
  "como-funciona-la-bisagra": "/iphone/iphone-duo/cuantas-veces-se-puede-doblar-iphone-duo",
  "antes-de-comprar": "/iphone/iphone-duo/precio-espana",
};
