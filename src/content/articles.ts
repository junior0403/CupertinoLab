import type { CategorySlug, Cluster } from "@/content/taxonomy";
import { duoLote } from "@/content/duo-lote";
import { lineup } from "@/content/lineup";

export type Article = {
  slug: string;
  title: string;
  dek: string;
  directAnswer: string;
  cluster: Cluster;
  category: CategorySlug;
  tags: string[];
  minutes: number;
  updated: string;
  confidence: "ficha" | "manos" | "pendiente";
  sections: { heading: string; paragraphs: string[]; subsections?: { heading: string; paragraphs: string[] }[] }[];
  unknowns: string[];
  decision: string;
  faq: { q: string; a: string }[];
  related: string[];
  table?: { caption: string; headers: string[]; rows: string[][] };
  sources?: { label: string; href: string }[];
  coverAlt?: string;
  metaTitle?: string;
  metaDescription?: string;
};

const updated = "29 sep 2026";

export const articles: Article[] = [
  {
    slug: "ios-26",
    title: "iOS 26: lo nuevo y lo que se rompió",
    dek: "Liquid Glass y traducción en vivo, frente a los cortes de red, los iconos en blanco y el parche de seguridad del 28 de septiembre.",
    directAnswer:
      "iOS 26 cambia el dibujo del sistema (Liquid Glass) y mete traducción en vivo, filtro de llamadas y una app de Fotos más clara. No llegó limpio: Apple reconoció cortes de Wi-Fi, Bluetooth y red móvil, fotos con artefactos, iconos en blanco y VoiceOver que se apagaba. El 28 de septiembre de 2026 el parche de esta rama es el 26.7.1.",
    cluster: "informativo",
    category: "ios",
    tags: ["iOS 26", "Liquid Glass", "fallos", "actualización"],
    minutes: 7,
    updated,
    confidence: "ficha",
    table: {
      caption: "Fallos que Apple escribió en las notas de iOS 26",
      headers: ["Qué pasaba", "A quién", "Dónde quedó"],
      rows: [
        ["Wi-Fi y Bluetooth se cortan", "iPhone 17, Air y 17 Pro", "Reconocido al salir la 26"],
        ["El iPhone no coge red móvil", "Una minoría, tras actualizar", "Reconocido al salir la 26"],
        ["Fotos con manchas raras", "17, Air y 17 Pro, cierta luz", "Reconocido al salir la 26"],
        ["Iconos en blanco", "Quien teñía los iconos", "Reconocido al salir la 26"],
        ["VoiceOver se desactiva", "Algunos, justo al actualizar", "Reconocido al salir la 26"],
        ["No carga por cable casi sin batería", "iPhone Air y 17", "Cerrado en la 26.5.1"],
        ["La actualización no baja por datos", "Quien no tenía Wi-Fi", "Cerrado en la 26.6.2"],
      ],
    },
    sections: [
      {
        heading: "Qué cambia de verdad",
        paragraphs: [
          "El cambio que se ve es Liquid Glass: controles, iconos y la pantalla de bloqueo dejan de ser placas opacas y refractan lo que hay debajo. El reloj de la bloqueo se encoge si llegan avisos. El fondo puede ganar un efecto espacial, un relieve leve al mover el teléfono. Los iconos admiten tinte claro u oscuro.",
          "Apple Intelligence entra en más sitios. Desde el botón de captura puedes preguntar por lo que hay en pantalla. La traducción en vivo funciona en Mensajes, FaceTime, Teléfono y AirPods. Atajos puede llamar a las herramientas de escritura y a los modelos, incluido ChatGPT, si lo activas.",
        ],
      },
      {
        heading: "Las apps que sí se notan",
        paragraphs: [
          "Teléfono junta el historial y añade filtro de llamadas y ayuda para no quedarte colgado en una espera. Mensajes filtra desconocidos, permite fondos y encuestas. Fotos vuelve a separar Biblioteca y Colecciones: Apple deshizo parte del lío de iOS 18. Cámara simplifica los modos. Mapas recuerda sitios visitados. Música traduce letras y mezcla canciones. CarPlay hereda el cristal y gana widgets. Llega Apple Games, y Vista Previa abre y marca PDF.",
          "Nada de esto es un rumor. Está en las notas de Apple de iOS 26. Lo que no está es una promesa de que el cristal se lea igual de bien sobre cualquier foto: sobre un fondo cargado, los controles translúcidos pierden contraste. Eso no es un cierre inesperado. Es el diseño.",
        ],
      },
      {
        heading: "Lo que los usuarios se encontraron",
        paragraphs: [
          "La versión de salida no fue pareja. En las propias notas, Apple reconoció que en iPhone 17, iPhone Air y iPhone 17 Pro el Wi-Fi y el Bluetooth se cortaban a veces; que una minoría se quedaba sin red móvil después de actualizar; que algunas fotos salían con artefactos según la luz; que teñir los iconos podía dejarlos en blanco; y que VoiceOver se desactivaba solo en algunos teléfonos.",
          "Más adelante, en la 26.5.1, Apple cerró un caso en el que el Air y el 17 no cargaban por cable si la batería estaba casi vacía. En la 26.6.2, otro: la actualización no se descargaba usando datos móviles. No le pasó a todo el mundo. Quien lo sufrió lo describió como un teléfono a medias, no como un detalle.",
        ],
      },
      {
        heading: "Dónde está la rama hoy",
        paragraphs: [
          "El 14 de septiembre de 2026 salió iOS 27. Esta ficha no es esa. iOS 26 sigue instalado en la mayoría de los iPhone, y Apple sigue parcheándola. El 28 de septiembre publicó la 26.7.1, de seguridad. La compañía dijo que un fallo del motor gráfico pudo usarse en ataques muy dirigidos contra versiones anteriores a iOS 27. Si sigues en la 26, el paso inmediato es instalar la 26.7.1, no esperar a decidir si saltas a la 27.",
          "El [[otono-2026|iPhone 18]] sale con la generación nueva del sistema. Esta página sirve para quien todavía vive en la 26 y quiere saber qué ganó y qué se le rompió por el camino.",
        ],
      },
    ],
    unknowns: [
      "Cuánta gente, en porcentaje, sufrió cada fallo. Apple dice «algunos» o «una minoría» y no da cifra.",
      "Si Liquid Glass cansa la vista a largo plazo. Hay quejas de contraste; no hay un estudio.",
      "Qué queda sin cerrar en la 26.7.1 más allá del aviso de seguridad. Las notas de ese parche no listan fallos nuevos.",
    ],
    decision:
      "Si estás en iOS 26, instala la 26.7.1 por el fallo de seguridad. No actualices a iOS 27 el mismo día si dependes del teléfono para trabajar: la 27.0.1 ya está tapando Face ID y cortes de cobertura en los modelos nuevos, y el pulido todavía no está cerrado.",
    faq: [
      {
        q: "¿iOS 26 sigue recibiendo parches?",
        a: "Sí. El 28 de septiembre de 2026 Apple publicó iOS 26.7.1, centrada en seguridad.",
      },
      {
        q: "¿Los fallos de red le pasaron a todo el mundo?",
        a: "No. Apple los acotó a una parte de los iPhone 17, Air y 17 Pro, y a una minoría que se quedó sin red móvil. Si el tuyo va fino, no tienes que reinstalar por eso.",
      },
    ],
    related: ["otono-2026", "precios-gama-iphone"],
  },
  ...duoLote,
  ...lineup,
];

const bySlug = new Map(articles.map((article) => [article.slug, article]));

export function getArticle(slug: string) {
  return bySlug.get(slug);
}

export function articlesInCategory(slug: CategorySlug) {
  return articles.filter((article) => article.category === slug);
}

export const confidenceLabel = {
  ficha: "Ficha de Apple",
  manos: "Manos de prensa",
  pendiente: "Sin prueba independiente",
} as const;
