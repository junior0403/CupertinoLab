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
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

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
