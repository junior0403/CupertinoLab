import type { CategorySlug, Cluster } from "@/content/taxonomy";
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
  sections: { heading: string; paragraphs: string[] }[];
  unknowns: string[];
  decision: string;
  faq: { q: string; a: string }[];
  related: string[];
  table?: { caption: string; headers: string[]; rows: string[][] };
};

const updated = "29 sep 2026";

export const articles: Article[] = [...lineup,
  {
    slug: "guia-completa",
    title: "iPhone Duo: guía completa",
    dek: "Lo que Apple ya publicó, lo que vieron las manos de prensa y lo que conviene no decidir hasta el 23 de octubre.",
    directAnswer:
      "El iPhone Duo es el primer iPhone plegable: pantalla interior de 7,6 pulgadas, exterior de 5,4, desde 1.999 dólares con 256 GB. Preventa el 16 de octubre de 2026 y disponibilidad el 23. No es un rumor.",
    cluster: "pilar",
    category: "duo",
    tags: ["guía", "lanzamiento", "ficha"],
    minutes: 8,
    updated,
    confidence: "ficha",
    table: {
      caption: "Ficha corta, septiembre 2026",
      headers: ["Dato", "Publicado"],
      rows: [
        ["Precio de entrada", "1.999 USD / 256 GB"],
        ["Pantallas", "5,4 exterior · 7,6 interior"],
        ["Cuerpo", "5,2 mm abierto · 11,3 mm cerrado · 254 g"],
        ["Chip", "A20 Pro · iOS 27.1"],
        ["Agua y polvo", "IP68, 6 m / 30 min de laboratorio"],
        ["SIM", "Solo eSIM, en todo el mundo"],
        ["Bisagra", "Más de 100 piezas · ciclos no publicados"],
        ["Calendario", "Preventa 16 oct · venta 23 oct"],
      ],
    },
    sections: [
      {
        heading: "Qué es, sin el tráiler",
        paragraphs: [
          "Apple lo presentó el 9 de septiembre de 2026. Cerrado parece un pasaporte: pantalla exterior de 5,4 pulgadas. Abierto, una interior de 7,6 con relación cercana a 1:1,4, la misma familia de proporción en las dos caras. El marco es titanio de grado 5. Abierto mide 5,2 mm y es, en esa pose, el iPhone más fino; cerrado llega a 11,3 mm y pesa 254 g.",
          "El sistema es iOS 27.1 sobre el mismo A20 Pro de los iPhone planos de esta generación. La diferencia no es el chip: es que la interfaz sabe si está cerrado, abierto o a medias.",
        ],
      },
      {
        heading: "Dónde encaja dentro de CupertinoLab",
        paragraphs: [
          "Esta es la guía del Duo, no la del otoño entero. El mapa de lo que ya está en tienda —18 Pro, AirPods 5, Watch— está en [[otono-2026|septiembre 2026]]. Aquí cada ficha responde una sola pregunta del plegable y separa tres capas: lo que dice Apple, lo que vio la prensa en unidades de demostración y lo que nadie puede afirmar porque el Duo no llega a la calle hasta el 23 de octubre.",
          "Si vienes de un vídeo corto, no hace falta el contexto. Entra en la pregunta. La respuesta está en el primer bloque, antes de cualquier espacio de publicidad.",
        ],
      },
      {
        heading: "Para quién tiene sentido y para quién no",
        paragraphs: [
          "Tiene sentido si de verdad vas a usar la pantalla grande para dos apps a la vez o para leer y ver sin apoyar el móvil. No lo tiene si buscas el mejor zoom, el bolsillo más ligero o un teléfono ya curtido en caídas de un año. El [[vs-iphone-18-pro-max|iPhone 18 Pro Max]] sigue siendo el plano maduro y más barato. El [[vs-galaxy-z-fold|Galaxy Z Fold]] lleva generaciones de bisagra y un precio de entrada algo menor.",
          "El calendario manda: hasta el 23 de octubre no hay unidades de venta ni pruebas de laboratorio ajenas a Apple con el producto final en manos de quien lo paga.",
        ],
      },
    ],
    unknowns: [
      "Ciclos de apertura que aguanta la bisagra.",
      "Precio de reparar la pantalla interior o la bisagra.",
      "Autonomía real fuera del banco de pruebas de vídeo.",
      "Precios locales fuera de las listas ya publicadas (EE. UU., Reino Unido, India).",
    ],
    decision:
      "Usa esta guía como índice. No cierres la compra hasta contrastar peso, eSIM y la falta de teleobjetivo dedicado con tu uso de esta semana, no con el tráiler.",
    faq: [
      {
        q: "¿Sigue siendo un rumor?",
        a: "No. Está anunciado. Lo que sigue sin medir son la vida de la bisagra, las caídas y la batería de un día normal.",
      },
      {
        q: "¿Cuándo se puede encargar?",
        a: "Preventa el 16 de octubre de 2026. En tiendas y envíos, el 23 de octubre.",
      },
    ],
    related: [
      "cuanto-cuesta",
      "cuantas-veces-se-puede-doblar",
      "antes-de-comprar",
    ],
  },
  {
    slug: "cuantas-veces-se-puede-doblar",
    title: "¿Cuántas veces se puede doblar el iPhone Duo?",
    dek: "La pregunta del vídeo no tiene cifra. Apple publicó la bisagra y se calló el número que Samsung sí da.",
    directAnswer:
      "Apple no ha publicado cuántas veces se puede doblar el iPhone Duo. Sin ese dato, cualquiera que te diga una cifra redonda se la está inventando.",
    cluster: "viral",
    category: "duo",
    tags: ["bisagra", "ciclos", "durabilidad"],
    minutes: 5,
    updated,
    confidence: "pendiente",
    sections: [
      {
        heading: "Lo que sí está escrito",
        paragraphs: [
          "La bisagra tiene más de cien componentes, adhesivos pensados para aliviar la flexión y una cubierta impresa en 3D con titanio reciclado. El par es variable: se queda en ángulos intermedios, no solo abierta o cerrada. Tom Marieb, vicepresidente de hardware, la comparó con el cierre de una puerta de coche: firme, no floja.",
          "Eso describe cómo se siente. No dice cuántos ciclos soporta antes de perder ese par o antes de que el pliegue se marque más.",
        ],
      },
      {
        heading: "Por qué el silencio importa",
        paragraphs: [
          "En la misma temporada, la prensa cita 500.000 ciclos para la bisagra del Galaxy Z Fold 8. Es una cifra del rival, no una medición del Duo. Sirve solo para ver el hueco: un fabricante publica el número y el otro no.",
          "Quinientos mil dobleces, si fueran ciertos en un uso de 100 aperturas al día, darían más de una década. Sin la cifra de Apple, esa cuenta no se puede trasladar al Duo. El [[como-funciona-la-bisagra|mecanismo]] puede ser excelente y aun así no tener un rating público.",
        ],
      },
      {
        heading: "Qué hacer con el vídeo que promete el número",
        paragraphs: [
          "Si el clip dice «aguanta X dobleces» antes del 23 de octubre, pide la fuente. Una unidad de demostración en una mesa no es un banco de ciclos. Un render tampoco.",
          "Cuando existan pruebas serias, esta ficha se actualizará con el método: quién dobló, cuántas veces, y si el par y el pliegue cambiaron. Hasta entonces la respuesta honesta es que no se sabe.",
        ],
      },
    ],
    unknowns: [
      "Rating oficial de ciclos.",
      "Si el par se afloja con el uso diario.",
      "Coste de cambiar la bisagra fuera de garantía.",
    ],
    decision:
      "No compres el Duo por una cifra de dobleces que no existe. Compra si el uso de la pantalla grande te compensa no tener esa garantía publicada. Si el número es la condición, espera o mira un plegable que sí lo imprime.",
    faq: [
      {
        q: "¿200.000 o 500.000 dobleces?",
        a: "Ninguna de las dos cifras es de Apple para este teléfono. Repetirlas es desinformación.",
      },
      {
        q: "¿Se puede dejar doblado a medias toda la tarde?",
        a: "El diseño contempla ese uso. Nadie ha publicado todavía qué le hace al mecanismo durante años.",
      },
    ],
    related: ["como-funciona-la-bisagra", "pliegue-en-la-pantalla", "guia-completa"],
  },
  {
    slug: "pliegue-en-la-pantalla",
    title: "¿El iPhone Duo tiene pliegue en la pantalla?",
    dek: "Hay pliegue. El truco de Apple es óptico: un acabado mate que lo hace difícil de ver, no imposible de tocar.",
    directAnswer:
      "Sí. El pliegue existe y se puede notar al tacto. El nano-texturizado lo disimula en el uso normal; Apple no dice que haya desaparecido.",
    cluster: "viral",
    category: "duo",
    tags: ["pliegue", "pantalla", "nano-textura"],
    minutes: 5,
    updated,
    confidence: "manos",
    sections: [
      {
        heading: "Lo que vieron las primeras manos",
        paragraphs: [
          "En las unidades de demostración el surco se siente. En lectura, vídeo o al pasar de la pantalla de fuera a la de dentro, muchas crónicas dicen que deja de verse. Ars Technica llegó a no distinguirlo en los equipos de prueba. Otras notas, y el propio relato más frío, matizan: bajo cierta luz y cierto ángulo la línea vuelve.",
          "Apple no promete un panel sin topología. Promete que el acabado mate esconde la diferencia mejor que un cristal brillante, porque el brillo delata cualquier cambio de superficie.",
        ],
      },
      {
        heading: "Por qué eligieron mate",
        paragraphs: [
          "Marieb lo dijo sin adorno: en un panel brillante la especularidad hace evidente cualquier variación. El mate perdona más, también si la bisagra cede un poco con los años. Pidió que se les exija esa promesa dentro de un tiempo. Eso es una admisión de que el pliegue puede cambiar, no un certificado de que no lo hará.",
          "La cubierta interior es un polímero que Apple describe un 40 % más rígido que el estándar del sector, sobre vidrio flexible de alta resistencia. Más rígido no significa cristal de teléfono plano. El [[se-raya-la-pantalla|rayado]] y el pliegue son problemas distintos.",
        ],
      },
      {
        heading: "Cómo comprobarlo tú, en treinta segundos",
        paragraphs: [
          "En tienda, no mires solo de frente con la luz del techo a la espalda. Inclina el teléfono, apaga el vídeo de fondo y pasa un dedo en perpendicular al pliegue. Luego abre una página de texto en blanco.",
          "Si solo te importa que no se vea en Instagram, las manos de septiembre dicen que vas bien. Si te importa no sentirlo nunca, este teléfono no es ese teléfono.",
        ],
      },
    ],
    unknowns: [
      "Cuánto se marca el pliegue después de un año.",
      "Si una funda o el Pencil, cuando llegue, lo acentúan.",
      "Medida oficial de la profundidad del surco: Apple no la ha dado.",
    ],
    decision:
      "Trátalo como un pliegue bien disimulado, no como una pantalla lisa. Si en tienda lo sientes y te molesta, el Pro Max te va a irritar menos cada día.",
    faq: [
      {
        q: "¿Desaparece con el tiempo o empeora?",
        a: "Apple dice que el mate sigue disimulándolo. No hay un año de uso real que lo confirme o lo desmienta.",
      },
      {
        q: "¿Se ve en las fotos del anuncio?",
        a: "Las fotos de producto están hechas para no enseñarlo. La prueba es el dedo y una página blanca, no el keynote.",
      },
    ],
    related: ["se-raya-la-pantalla", "como-funciona-la-bisagra", "necesita-funda"],
  },
  {
    slug: "resistente-al-agua",
    title: "¿Es resistente al agua el iPhone Duo?",
    dek: "IP68 de laboratorio, el mismo techo que el iPhone 18 Pro. En un teléfono con costura móvil, la letra pequeña pesa más.",
    directAnswer:
      "Sí, con matices: IP68 hasta 6 metros durante 30 minutos en laboratorio. Apple avisa de que esa resistencia no es permanente y puede bajar con el desgaste.",
    cluster: "informativo",
    category: "duo",
    tags: ["IP68", "agua", "polvo"],
    minutes: 5,
    updated,
    confidence: "ficha",
    sections: [
      {
        heading: "La cifra, y solo la cifra",
        paragraphs: [
          "Apple declara IP68 bajo la norma IEC 60529, con un máximo de 6 metros hasta 30 minutos. Es la misma cifra que publica para el iPhone 18 Pro. En un plegable, igualar al modelo plano es la frase fuerte del lanzamiento: hay una bisagra y, aun así, la ficha no baja a un IPX4 o un IP48.",
          "La prensa ha contrastado esa ficha con el Galaxy Z Fold 8, citado con IP48. Más estanco sobre el papel no significa invulnerable en un bolsillo con sudor, polvo de playa o un grifo a presión.",
        ],
      },
      {
        heading: "Lo que IP68 no cubre",
        paragraphs: [
          "La propia nota de Apple dice que la resistencia a salpicaduras, agua y polvo no es una condición eterna y puede disminuir con el uso normal. En un Duo hay una costura que se mueve cientos de veces por semana. El laboratorio no reproduce un año de abrir el teléfono con las manos mojadas.",
          "Un IP alto tampoco autoriza piscina, mar, jabón o una caída al váter seguida de un ciclo de carga. Si entra agua y el daño se atribuye a líquido, la garantía suele quedarse fuera. Esa política no la ha reescrito este lanzamiento.",
        ],
      },
      {
        heading: "Uso razonable",
        paragraphs: [
          "Lluvia y un lavado de manos: entra en lo que la gente espera de un iPhone reciente, con el aviso de arriba. Sumergirlo para enseñarlo en un vídeo es otra cosa, y más con la pantalla interior desplegada.",
          "Si el agua es tu criterio principal, anota el IP68 y también que nadie ajeno a Apple ha repetido el ensayo sobre unidades de venta. Esa prueba llega después del [[que-pasa-si-se-cae|23 de octubre]].",
        ],
      },
    ],
    unknowns: [
      "Cómo está sellada la bisagra, más allá del rating.",
      "Cuánto cae la protección tras meses de pliegues.",
      "Comportamiento con agua salada: no forma parte del ensayo citado.",
    ],
    decision:
      "Puedes tratarlo como un iPhone resistente a un chapuzón de laboratorio, no como un reloj de buceo. No lo abras debajo del agua para el vídeo.",
    faq: [
      {
        q: "¿Puedo ducharme con él?",
        a: "El jabón, la presión y el vapor no son el ensayo de 6 metros en agua dulce. Mejor no.",
      },
      {
        q: "¿El IP68 incluye el polvo?",
        a: "Sí: el «6» es polvo, el «8» es inmersión. Las dos cosas están en la declaración, y las dos pueden degradarse.",
      },
    ],
    related: ["que-pasa-si-se-cae", "como-funciona-la-bisagra", "guia-completa"],
  },
  {
    slug: "que-pasa-si-se-cae",
    title: "¿Qué pasa si se cae un iPhone Duo?",
    dek: "No hay todavía un drop test de unidades de venta. Sí hay un mapa de qué cara recibe el golpe.",
    directAnswer:
      "Nadie ha publicado una prueba de caída seria sobre el modelo que vas a comprar: sale el 23 de octubre. Cerrado golpea titanio y Ceramic Shield. Abierto, el polímero interior es la cara débil.",
    cluster: "viral",
    category: "duo",
    tags: ["caída", "Ceramic Shield", "peso"],
    minutes: 5,
    updated,
    confidence: "pendiente",
    sections: [
      {
        heading: "Dos teléfonos según cómo caiga",
        paragraphs: [
          "Cerrado, el exterior lleva Ceramic Shield 2, que Apple cifra en tres veces más resistencia al rayado, y la trasera lleva Ceramic Shield. El marco es titanio de grado 5 con pulido de espejo. Eso es una armadura de teléfono plano, con un pero: 254 g y 11,3 mm de canto. Más masa es más energía cuando el suelo frena el golpe.",
          "Abierto, la cara grande es un polímero sobre vidrio flexible. No es el mismo material. Una caída con el teléfono desplegado —en la mesa, al levantarte del sofá— es el escenario que la ficha no ilustra y que un vídeo de TikTok va a intentar el primer fin de semana.",
        ],
      },
      {
        heading: "Lo que un clip de caída no demuestra",
        paragraphs: [
          "Una unidad de keynote, una moqueta y una toma única no son un protocolo. Tampoco lo es romper un prototipo prestado. Hasta que haya repeticiones sobre unidades de serie —altura, ángulo, abierto y cerrado— cualquier «sobrevive» o «se parte» es anécdota.",
          "El peso juega en contra aunque los materiales jueguen a favor. 254 g frente a los 201 g que las comparativas atribuyen al Z Fold 8 no es un detalle de ficha: es el golpe.",
        ],
      },
      {
        heading: "Mientras no exista la prueba",
        paragraphs: [
          "La protección práctica es aburrida: no usarlo abierto cerca del borde de la mesa, y valorar el [[necesita-funda|Folio]] si la pantalla interior va a apoyar en cualquier sitio. La funda oficial simple no es la que cubre esa cara al cerrar.",
          "Si tu historial con el teléfono es una funda en el cajón y una pantalla al año, este no es el modelo con el que experimentar. El recambio de un panel plegable no tiene precio público.",
        ],
      },
    ],
    unknowns: [
      "Altura a la que falla abierto y cerrado.",
      "Si el canto de titanio abolla o transfiere el golpe a la bisagra.",
      "Precio de la reparación de la pantalla interior.",
    ],
    decision:
      "Hasta que haya pruebas repetidas, asume que una caída abierto es cara. Si no vas a cuidarlo más que a un iPhone normal, no es tu compra.",
    faq: [
      {
        q: "¿El titanio lo hace irrompible?",
        a: "No. Cambia qué se raya y qué se abolla. No anula la física de 254 g contra el suelo.",
      },
      {
        q: "¿Hay vídeo oficial de caída?",
        a: "No forma parte de los datos que Apple ha publicado. Desconfía de los que rellenan ese silencio.",
      },
    ],
    related: ["se-raya-la-pantalla", "necesita-funda", "cuantas-veces-se-puede-doblar"],
  },
  {
    slug: "cuanto-cuesta",
    title: "¿Cuánto cuesta el iPhone Duo?",
    dek: "El número de entrada ya está. El que te va a doler es el salto de almacenamiento, y el de tu país si aún no está en la tabla.",
    directAnswer:
      "En Estados Unidos parte de 1.999 dólares con 256 GB. Las listas de prensa ponen 512 GB en 2.199, 1 TB en 2.599 y 2 TB en 3.199. Preventa el 16 de octubre.",
    cluster: "transaccional",
    category: "duo",
    tags: ["precio", "almacenamiento"],
    minutes: 5,
    updated,
    confidence: "ficha",
    table: {
      caption: "Precios publicados o citados por la prensa",
      headers: ["Capacidad", "EE. UU.", "India"],
      rows: [
        ["256 GB", "1.999 USD", "₹2,99,900"],
        ["512 GB", "2.199 USD", "₹3,24,900"],
        ["1 TB", "2.599 USD", "₹3,74,900"],
        ["2 TB", "3.199 USD", "₹4,49,900"],
      ],
    },
    sections: [
      {
        heading: "El precio que ya se puede repetir",
        paragraphs: [
          "1.999 dólares es la base en EE. UU. En Reino Unido, la base citada es 1.999 libras. En India, las tablas publicadas arrancan en 299.900 rupias para 256 GB: no es una conversión limpia del precio americano, es la lista local. Si tu país no está aquí, no inventes el euro con un multiplicador; espera a la Apple Store el día de la preventa.",
          "Al lado, Reuters sitúa el iPhone 18 Pro en 1.199 dólares y el Pro Max en 1.299. El Duo no es «un poco más caro». Son unos 700 dólares sobre el Max, antes de subir almacenamiento.",
        ],
      },
      {
        heading: "Con quién compite ese dinero",
        paragraphs: [
          "Ars sitúa al Galaxy Z Fold 8 y al Pixel 11 Pro Fold en 1.899 dólares, y al Z Fold 8 Ultra en 2.099. El Duo no es el plegable más caro del estante ni el más barato. Está en la banda alta, cien dólares por encima de los libro más conocidos y cien por debajo del Ultra cuadrado de Samsung.",
          "Ese hueco no incluye funda. El Case oficial se ha citado a 79 dólares y el Folio con soporte a 129. El Pencil ni siquiera se vende aún para este teléfono: llega más adelante. Súmalo mentalmente antes de comparar solo el teléfono.",
        ],
      },
      {
        heading: "Cómo no equivocarte de capacidad",
        paragraphs: [
          "256 GB en un equipo que invita a vídeo en una pantalla de 7,6 pulgadas se queda corto si grabas en alta resolución y no vacías el carrete. El salto a 512 GB son 200 dólares en la lista de EE. UU. El salto a 2 TB es otro teléfono de precio.",
          "No hay en esta página un botón de compra. Cuando los haya, serán enlaces marcados. El precio manda en la [[antes-de-comprar|lista de veinte puntos]] y en el careo con el [[vs-iphone-18-pro-max|Pro Max]].",
        ],
      },
    ],
    unknowns: [
      "Precio en euros y en el resto de América Latina.",
      "Planes de operador y su letra pequeña.",
      "Si el escalón de 1 TB se confirma tal cual en la Store el 16 de octubre.",
    ],
    decision:
      "Presupuesta 1.999 dólares más funda, no el número del meme. Si ese total te obliga a financiar algo que no vas a abrir veinte veces al día, quédate en el Pro Max.",
    faq: [
      {
        q: "¿Bajará en la preventa?",
        a: "Apple no suele rebajar el iPhone nuevo el día uno. Los descuentos reales llegan de operadores y del mercado de segunda mano, meses después.",
      },
      {
        q: "¿El precio incluye el Pencil?",
        a: "No. Además, la compatibilidad no está el día del lanzamiento.",
      },
    ],
    related: ["antes-de-comprar", "vs-iphone-18-pro-max", "mejores-fundas"],
  },
  {
    slug: "vs-iphone-18-pro-max",
    title: "iPhone Duo vs iPhone 18 Pro Max",
    dek: "Misma generación de chip. No es el mismo producto. Uno cabe en el uso de un teléfono; el otro pide que la pantalla grande trabaje.",
    directAnswer:
      "Elige el Pro Max si quieres el iPhone plano, más barato y sin bisagra. Elige el Duo solo si la pantalla de 7,6 pulgadas y dos apps a la vez justifican unos 700 dólares más, 254 g y un pliegue.",
    cluster: "transaccional",
    category: "duo",
    tags: ["comparativa", "Pro Max"],
    minutes: 6,
    updated,
    confidence: "ficha",
    table: {
      caption: "Lo que ya se puede contrastar",
      headers: ["", "Duo", "18 Pro Max"],
      rows: [
        ["Precio de entrada", "1.999 USD", "1.299 USD"],
        ["Formato", "Plegable 5,4 / 7,6", "Plano, de una pieza"],
        ["Chip", "A20 Pro", "A20 Pro"],
        ["Peso del Duo", "254 g", "Más ligero en el bolsillo, sin bisagra"],
        ["Riesgo de 1.ª generación", "Bisagra y polímero interior", "Línea ya conocida"],
      ],
    },
    sections: [
      {
        heading: "No compares tráilers",
        paragraphs: [
          "Los dos llevan A20 Pro. A partir de ahí se separan. El Pro Max es el teléfono grande de siempre: una pantalla, una costumbre de años, cámaras de flagship plano. El Duo cierra a 5,4 pulgadas —más pequeño que un Pro Max en la mano— y abre a 7,6. Pagas por esa transformación, no por un chip distinto.",
          "Reuters puso al Pro en 1.199 y al Max en 1.299. La diferencia contra el Duo de 256 GB es de 700 dólares. Con ese dinero se compra un iPad de entrada y sobra, si lo que querías era «una pantalla grande a veces».",
        ],
      },
      {
        heading: "Dónde el Duo gana y dónde pierde",
        paragraphs: [
          "Gana cuando dos contextos viven juntos: el mapa y el mensaje, el guion y la grabación, el billete y el correo. [[dos-aplicaciones|Split View]] guarda ese par. Gana también si lo apoyas a medias y miras sin manos. El Max no hace eso.",
          "Pierde en el bolsillo (254 g y 11,3 mm cerrado), en el zoom (no hay teleobjetivo dedicado; el 2x sale del sensor principal) y en la incertidumbre. El Max no tiene pliegue, ni polímero interior, ni un Pencil «para más adelante». Si la cámara larga es tu trabajo, la ficha del Duo es una rebaja, no un plus.",
        ],
      },
      {
        heading: "Una pregunta que ordena la compra",
        paragraphs: [
          "Cuenta los días de la última semana en los que echaste de menos una segunda app visible. Si son casi ninguno, el Max es el teléfono. Si son casi todos y además lees o revisas documentos fuera de la mesa, el Duo tiene un argumento que no es el unboxing.",
          "Ninguno de los dos necesita al otro. Comprar el Duo «por si acaso» es la forma cara de acabar usando solo la pantalla de 5,4.",
        ],
      },
    ],
    unknowns: [
      "Comparación de cámara lado a lado con unidades de venta.",
      "Autonomía real del Max frente a las 24 h mixtas que Apple reclama en el Duo.",
    ],
    decision:
      "Regla corta: si no sabes nombrar la tarea que harás en las 7,6 pulgadas, quédate en el Pro Max y ahórrate la bisagra.",
    faq: [
      {
        q: "¿El Duo sustituye al Pro Max y al iPad mini?",
        a: "Sustituye ratos de los dos. No hereda ni la cámara larga del Max ni la ventana grande y estable de un iPad.",
      },
      {
        q: "¿Se pueden usar los mismos accesorios?",
        a: "No des por hecho fundas ni el Pencil. El Pencil del Duo llega más tarde y por USB-C.",
      },
    ],
    related: ["cuanto-cuesta", "dos-aplicaciones", "guia-completa"],
  },
  {
    slug: "vs-galaxy-z-fold",
    title: "iPhone Duo vs Samsung Galaxy Z Fold",
    dek: "El Duo llega tarde a propósito. La ficha ataca el pliegue, el polvo y la proporción. El Fold responde con años, peso y ciclos publicados.",
    directAnswer:
      "El Duo presume de IP68, proporción tipo pasaporte y un pliegue más escondido. El Z Fold 8 es más ligero, más fino cerrado y tiene un rating de ciclos que Apple no ha querido imprimir. En precio de entrada están a cien dólares.",
    cluster: "transaccional",
    category: "duo",
    tags: ["Samsung", "Fold", "comparativa"],
    minutes: 6,
    updated,
    confidence: "manos",
    table: {
      caption: "Cifras citadas en septiembre 2026",
      headers: ["", "iPhone Duo", "Z Fold 8"],
      rows: [
        ["Entrada", "1.999 USD", "1.899 USD"],
        ["Cerrado / abierto", "11,3 mm / 5,2 mm", "9,7 mm / 4,5 mm"],
        ["Peso", "254 g", "201 g"],
        ["Estanqueidad", "IP68", "IP48"],
        ["Ciclos de bisagra", "No publicados", "500.000, según ficha citada"],
        ["Multitarea", "Dos apps, un par", "Ventanas más libres"],
      ],
    },
    sections: [
      {
        heading: "La discusión de verdad no es la marca",
        paragraphs: [
          "Apple ha criticado el formato casi cuadrado de otros plegables porque deja mal el vídeo y muchas apps. El Duo insiste en una proporción 1:1,4 abierta y cerrada, más parecida a un pasaporte. Si tu queja del Fold es que las fotos y las series quedan con bandas raras, el argumento del Duo va dirigido a ti.",
          "Samsung lleva más generaciones corrigiendo bisagra, pliegue y software. iOS 27.1 hace Split View y pares de apps. No es, en las manos publicadas, un gestor de ventanas al estilo del Fold. Si vives de tres apps flotando, el Duo te va a saber a poco.",
        ],
      },
      {
        heading: "Peso, agua y el número que falta",
        paragraphs: [
          "201 g contra 254 g se notan a la hora, no en la tabla. También el grosor cerrado: 9,7 mm frente a 11,3. El Duo gana abierto en delgadez proclamada (5,2 mm, sin contar el bloque de cámaras) y en la ficha de agua: IP68 contra el IP48 atribuido al Fold 8.",
          "El hueco incómodo es el de los ciclos. La cifra de 500.000 del Fold circula en las fichas de esta temporada. Apple describe materiales y calla el número. Para un primer plegable, ese silencio es parte del producto, no una nota al pie. Más contexto en [[cuantas-veces-se-puede-doblar|cuántas veces se dobla]].",
        ],
      },
      {
        heading: "Cámaras y ecosistema",
        paragraphs: [
          "El Duo, en las manos más precisas, lleva dos Fusion de 48 MP —principal con 2x por recorte y ultra gran angular— y no un tele dedicado. Quien venga de un Fold por el zoom largo tiene que mirar muestras el 23 de octubre, no el render.",
          "El cambio de sistema pesa más que la bisagra. AirDrop, reloj, auriculares y la compra de apps no viajan gratis. Si tu casa ya es Apple, el Duo evita esa mudanza. Si tu casa es Samsung, el Fold 8 es la versión aburrida y probablemente más cuerda.",
        ],
      },
    ],
    unknowns: [
      "Prueba de cámara con la misma escena.",
      "Si el IP68 del Duo aguanta el año mejor que el rating más bajo del Fold.",
      "Precio callejero del Fold cuando el Duo llegue a tienda.",
    ],
    decision:
      "Dentro de Apple, el Duo es el único plegable. Contra Samsung, solo compensa si quieres iOS y aceptas más peso a cambio de la proporción y del IP68 en la ficha.",
    faq: [
      {
        q: "¿El pliegue del Duo es menor que el del Fold?",
        a: "Las manos dicen que se ve menos gracias al mate. No hay una medición compartida de profundidad.",
      },
      {
        q: "¿Y el Z Fold 8 Ultra?",
        a: "Se ha citado a 2.099 dólares, por encima del Duo de entrada, con el formato más cuadrado que Apple dice querer evitar.",
      },
    ],
    related: ["cuantas-veces-se-puede-doblar", "pliegue-en-la-pantalla", "cuanto-cuesta"],
  },
  {
    slug: "bateria",
    title: "¿Cuánto dura la batería del iPhone Duo?",
    dek: "Hay tres cifras de Apple y ninguna es «un día de TikTok». Conviene no mezclarlas.",
    directAnswer:
      "Apple declara unas 24 horas de uso mixto con las dos pantallas, 31 horas de vídeo en la interior y 44 en la exterior. Son ensayos de la marca. No hay todavía una prueba independiente.",
    cluster: "informativo",
    category: "duo",
    tags: ["batería", "autonomía"],
    minutes: 5,
    updated,
    confidence: "ficha",
    sections: [
      {
        heading: "Tres números, tres pruebas distintas",
        paragraphs: [
          "31 horas es vídeo en la pantalla grande. 44 es el mismo tipo de ensayo en la pequeña. Las 24 horas son uso combinado, repartido entre las dos. Citar «hasta 44 horas» en un vídeo de batería sin decir que es reproducción de vídeo en la cara exterior es publicidad, no información.",
          "Por dentro hay dos celdas, una en cada mitad, gestionadas como una sola batería. Tiene sentido en un libro: el volumen está partido por la bisagra. No significa dos días de carga ni que puedas cambiar una y dejar la otra.",
        ],
      },
      {
        heading: "Qué se come la batería de verdad",
        paragraphs: [
          "La pantalla interior, a 120 Hz y 7,6 pulgadas, es el gasto que la ficha de vídeo ya asume. Split View con dos apps activas —mapa y cámara, o vídeo y mensajes— no es el ensayo de una película a brillo controlado. Tampoco lo es la cobertura mala, ni el calor, ni dejarlo en tienda de campaña media tarde.",
          "Quitar la SIM física está vendido como espacio ganado para batería. Es una decisión de diseño real, con un coste que no es eléctrico: [[sim-fisica|te quedas sin bandeja]] en todos los países.",
        ],
      },
      {
        heading: "Cómo vas a saber si te llega",
        paragraphs: [
          "Hasta el 23 de octubre, y unos días después, cualquier «me duró X horas» es una unidad de prensa o una invención. Cuando haya datos, mira el brillo, si estaba abierto y si había dos apps. Si no dicen eso, no compares.",
          "Si tu día es intenso y ya vas justo con un Pro Max, no des por hecho que el Duo te cubre. La promesa de 24 horas mixtas es el techo de marketing más honesto de los tres números. Aun así es un techo de Apple.",
        ],
      },
    ],
    unknowns: [
      "Horas de pantalla en uso mixto medido por terceros.",
      "Cuánto resta el 120 Hz continuo en la cara interior.",
      "Pérdida de capacidad el segundo año, con la bisagra de por medio.",
    ],
    decision:
      "Apunta a un día, no a 44 horas. Si duermes fuera o grabas mucho con la pantalla grande, sal con cable. No es el argumento para elegirlo; es el límite para no frustrarte.",
    faq: [
      {
        q: "¿Las dos baterías se cargan por separado?",
        a: "No hay ese modo. Apple las presenta como un solo sistema.",
      },
      {
        q: "¿Cerrado dura más?",
        a: "El ensayo de vídeo dice que sí: 44 h fuera frente a 31 h dentro. Tu día no es solo vídeo.",
      },
    ],
    related: ["sim-fisica", "dos-aplicaciones", "guia-completa"],
  },
  {
    slug: "sim-fisica",
    title: "¿El iPhone Duo tiene SIM física?",
    dek: "No en ningún país. El hueco de la bandeja se lo quedó la batería, y quien viaje con un plástico tiene que cambiar de plan antes de la preventa.",
    directAnswer:
      "No. El iPhone Duo es solo eSIM en todo el mundo. Admite dos eSIM activas a la vez y puede guardar ocho perfiles o más.",
    cluster: "informativo",
    category: "duo",
    tags: ["eSIM", "SIM", "viajes"],
    minutes: 4,
    updated,
    confidence: "ficha",
    sections: [
      {
        heading: "Adiós a la bandeja, también fuera de EE. UU.",
        paragraphs: [
          "En otros iPhone, Apple había dejado la SIM física en algunos mercados. En el Duo no. La compañía lo explica por espacio: sin el mecanismo de la bandeja cabe más batería, y de paso vende la eSIM como más flexible y más segura.",
          "Dos líneas activas cubren el caso personal-trabajo o el local-del-viaje, siempre que tu operador entregue eSIM de verdad y no un código que tarda un día. Ocho perfiles o más permiten guardar líneas apagadas sin ir borrando.",
        ],
      },
      {
        heading: "A quién se le complica",
        paragraphs: [
          "Si tu operador todavía te atiende con un plástico en un mostrador, o si viajas a sitios donde la eSIM de prepago es un rumor, este teléfono te añade un trámite antes de encenderlo. No es un ajuste menor el día que aterrizas.",
          "Tampoco hay una bandeja «por si acaso» escondida. Quien te diga que en cierta región vuelve el nano-SIM está hablando de otro iPhone, no de este, salvo que Apple rectifique la ficha.",
        ],
      },
      {
        heading: "Qué hacer antes del 16 de octubre",
        paragraphs: [
          "Pregunta a tu operador, por escrito, si puede pasarte a eSIM sin cambiar de número y cuánto tarda. Si tienes dos líneas, confirma que las dos pueden estar activas. Hazlo antes de soltar el dinero, no en la cola de la tienda.",
          "El beneficio citado —más sitio para la batería— solo te importa si la [[bateria|autonomía]] te cuadraba justa. Si la eSIM te bloquea el viaje del mes que viene, el Pro Max de tu mercado puede seguir teniendo bandeja. Compruébalo en esa ficha, no en la del Duo.",
        ],
      },
    ],
    unknowns: [
      "Operadores que aún no entregan eSIM el día de la preventa.",
      "Si alguna variante regional aparece más tarde. Hoy la ficha dice que no.",
    ],
    decision:
      "Si dependes de una SIM física, el Duo no es compatible con tu vida actual. Resuelve la eSIM primero. El teléfono puede esperar.",
    faq: [
      {
        q: "¿Puedo llevar dos números?",
        a: "Sí, dos eSIM activas. El resto de perfiles se guardan y se encienden cuando hagan falta.",
      },
      {
        q: "¿Y si pierdo el teléfono?",
        a: "Las líneas están en la cuenta del operador y en tu Apple ID, no en un plástico que puedas sacar. Tendrás que bloquearlas con el operador igual que hoy, solo que sin bandeja que extraer.",
      },
    ],
    related: ["bateria", "antes-de-comprar", "guia-completa"],
  },
  {
    slug: "funciones-ocultas",
    title: "15 funciones del iPhone Duo que el anuncio no explica",
    dek: "No hay un código secreto. Hay quince comportamientos del sistema que no caben en el tráiler y que sí están descritos.",
    directAnswer:
      "No existen 15 trucos ocultos de código. Estas son 15 cosas reales del Duo —pantalla, bisagra, eSIM y cámaras— que el vídeo de 20 segundos no cuenta.",
    cluster: "viral",
    category: "duo",
    tags: ["iOS", "funciones", "multitarea"],
    minutes: 7,
    updated,
    confidence: "ficha",
    sections: [
      {
        heading: "Pantalla y bisagra",
        paragraphs: [
          "Uno: la app que tienes fuera sigue al abrir, en la cara interior. Dos: al cerrar, vuelve a la de 5,4 sin que tengas que buscarla. Tres: Split View coloca dos apps y las trata como una sola unidad de multitarea. Cuatro: puedes guardar ese par y abrirlo otra vez. Cinco: con el teléfono a medias, el teclado puede partirse. Seis: dock y barra de estado se recuestan en el borde, no se quedan en una franja de teléfono vertical. Siete: los botones de algunas apps también se apartan hacia ese borde para que el pulgar llegue. Ocho: se sostiene en ángulo —tienda de campaña— para ver sin manos. Nueve: hay una pose de trabajo a 90 grados, no solo abierto del todo.",
          "Ninguna requiere un menú escondido. Están en cómo se pliega. El detalle de las dos apps está en [[dos-aplicaciones|cómo usarlas a la vez]]. Los gestos finos, en [[trucos|diez usos concretos]].",
        ],
      },
      {
        heading: "Líneas, lápiz y cámaras",
        paragraphs: [
          "Diez: solo eSIM. Once: dos líneas activas. Doce: ocho perfiles o más en reserva. Trece: el Apple Pencil está prometido para las dos pantallas, más adelante en 2026, no el 23 de octubre. Catorce: la cámara trasera principal ofrece un 2x de calidad óptica por recorte; no es un teleobjetivo aparte, y el ultra gran angular va en el segundo sensor de 48 MP. Quince: la cámara de la cara interior va bajo el panel y, según el anuncio, solo se hace visible cuando se usa. La exterior tiene su propia frontal.",
          "El punto 13 es el que más se va a vender como «función» en los vídeos. Hoy es una fecha, no un botón. No compres un Pencil «para el Duo» hasta que Apple diga cuál.",
        ],
      },
      {
        heading: "Por qué esta lista no es un truco",
        paragraphs: [
          "Un blog que numera funciones inventadas —gestos de tres dedos que nadie ha visto, modos de servicio, baterías secretas— es relleno. AdSense y el lector de TikTok se cansan de lo mismo, en distinto orden. Aquí cada número sale de la ficha o de una mano de prensa identificable.",
          "Si una app de terceros se ve rara en la pantalla grande, no es que te falte un ajuste oculto. Es que el desarrollador todavía no ha adaptado la interfaz. Netflix, Zoom y Slack se han citado entre las que sí se movieron. El resto, a esperar.",
        ],
      },
    ],
    unknowns: [
      "Lista cerrada de apps que recolocan sus botones.",
      "Si la cámara bajo la pantalla interior empeora el selfi respecto a la exterior.",
    ],
    decision:
      "Aprende las nueve primeras antes de juzgar el teléfono. Son el producto. El Pencil y el zoom largo no lo son, todavía o nunca.",
    faq: [
      {
        q: "¿Hay un modo desarrollador para ventanas libres?",
        a: "No se ha anunciado. La multitarea publicada es de dos apps, no un escritorio.",
      },
      {
        q: "¿El 2x es óptico de verdad?",
        a: "Apple y las manos lo llaman calidad óptica por recorte del sensor de 48 MP. No hay una tercera lente tele.",
      },
    ],
    related: ["trucos", "dos-aplicaciones", "apple-pencil"],
  },
  {
    slug: "trucos",
    title: "10 usos del iPhone Duo que sí ahorran tiempo",
    dek: "No son atajos secretos. Son formas de colocar el cuerpo del teléfono para no pelearte con él.",
    directAnswer:
      "El ahorro está en cambiar de cara y de ángulo, no en un menú oculto: cerrar para contestar, abrir para dos apps, y dejarlo a medias cuando las manos están ocupadas.",
    cluster: "viral",
    category: "duo",
    tags: ["trucos", "productividad"],
    minutes: 6,
    updated,
    confidence: "manos",
    sections: [
      {
        heading: "Con una mano y con dos",
        paragraphs: [
          "Uno: contesta mensajes cerrado. La 5,4 está para eso; abrir el teléfono para un «ya voy» es teatro. Dos: ábrelo solo cuando haya que leer, corregir o comparar. Tres: guarda un par de apps que repites —notas y Safari, correo y calendario— y ábrelo como una sola pieza. Cuatro: si el teclado tapara media pantalla, pliégalo un poco y usa el teclado partido. Cinco: apoya el ángulo de tienda para una videollamada y deja de sujetar el rectángulo con los dedos.",
          "Seis: en la cocina o en el escritorio, la pose a 90 grados deja una mitad como apoyo y la otra como pantalla. No es un portátil. Es suficiente para una receta o un tablero.",
        ],
      },
      {
        heading: "Para no estropearlo mientras lo usas",
        paragraphs: [
          "Siete: no lo dejes abierto boca abajo. El polímero es la cara que no perdona la mesa. Ocho: si lo guardas abierto en una mochila, vas a conocer el pliegue por las malas; ciérralo. Nueve: la cámara bajo la pantalla interior no es un motivo para tapar esa zona con un dedo grasiento justo en el pliegue. Diez: cuando llegue el Pencil, no lo estrenes apretando sobre el surco. Hasta entonces, no compres uno «por si sirve».",
          "Ninguno de estos usos requiere jailbreak ni un perfil de configuración. Si un vídeo te pide instalar un perfil desconocido para «activar el Duo», ciérralo.",
        ],
      },
      {
        heading: "Qué no intentar",
        paragraphs: [
          "No busques tres apps en paralelo: el sistema publicado no es ese. No compares estos gestos con un iPad con Stage Manager. Y no midas si «merece la pena» el primer día si solo lo has usado cerrado en la tienda.",
          "La versión larga de la pose y del par de apps está en [[dos-aplicaciones|dos aplicaciones a la vez]] y en la [[como-funciona-la-bisagra|bisagra]].",
        ],
      },
    ],
    unknowns: [
      "Qué pares de apps quedan bien de fábrica y cuáles se ven estiradas.",
      "Si el modo a 90 grados tapa altavoces o micrófonos según la funda.",
    ],
    decision:
      "Prueba en tienda los puntos uno, tres y cinco con tus apps, no con la demo. Si no notas el alivio, no pagues 1.999 dólares por el resto de la lista.",
    faq: [
      {
        q: "¿Funcionan el día del lanzamiento?",
        a: "Los de pantalla y bisagra, sí, con iOS 27.1. El del Pencil, no.",
      },
      {
        q: "¿Sirve para jugar desplegado?",
        a: "La pantalla está. Que el juego use el formato ancho depende del estudio, no de un truco.",
      },
    ],
    related: ["funciones-ocultas", "dos-aplicaciones", "necesita-funda"],
  },
  {
    slug: "dos-aplicaciones",
    title: "Cómo usar dos aplicaciones a la vez",
    dek: "Split View en la cara interior: dos apps, un solo recuerdo. No es el escritorio de un Galaxy ni el de un Mac.",
    directAnswer:
      "Abre la pantalla interior, pon dos apps en Split View y, si ese dúo se repite, guárdalo como un par. Al cerrar el teléfono no se convierten en ventanas: vuelves a una sola cara.",
    cluster: "informativo",
    category: "duo",
    tags: ["Split View", "multitarea", "iOS 27"],
    minutes: 5,
    updated,
    confidence: "ficha",
    sections: [
      {
        heading: "Lo que iOS 27.1 hace",
        paragraphs: [
          "La multitarea anunciada trata el dúo como una unidad: no son dos apps que tienes que recolocar cada mañana. Dock y estado se van al lateral para que la franja útil sea ancha, no un teléfono estirado con márgenes muertos. Algunas apps mueven sus controles hacia ese lado.",
          "Cerrar y abrir conserva el contexto. Empiezas un mensaje en la cara pequeña y lo sigues en la grande. Eso, más que el efecto del pliegue, es lo que decide si el formato te encaja.",
        ],
      },
      {
        heading: "Lo que no hace",
        paragraphs: [
          "No hay un modo libre de tres o cuatro ventanas en la ficha de lanzamiento. Quien llegue de un Z Fold echando de menos burbujas flotantes va a notar el techo. Tampoco es Stage Manager: no enchufas una pantalla y conviertes el Duo en un Mac.",
          "Si la app no está adaptada, verás una interfaz de iPhone escalada o rara. No es un ajuste que te estén escondiendo. Es trabajo del desarrollador. Las menciones tempranas a Netflix, Zoom y Slack no garantizan tu banco, tu aerolínea o tu app de notas favorita.",
        ],
      },
      {
        heading: "Un ensayo de un minuto en tienda",
        paragraphs: [
          "Pide abrir tus dos apps reales, no la pareja de la demo. Mira si el texto tiene un tamaño usable y si el botón principal cae donde está el pulgar. Guarda el par, cierra el teléfono, ábrelo. Si algo de eso falla, el Duo todavía no está listo para tu flujo, aunque la bisagra sea preciosa.",
          "Más gestos de ángulo en los [[trucos|diez usos]]. La comparación con Samsung está en el [[vs-galaxy-z-fold|careo con el Fold]].",
        ],
      },
    ],
    unknowns: [
      "Catálogo real de apps adaptadas el 23 de octubre.",
      "Si el par guardado sobrevive a un reinicio y a una actualización.",
    ],
    decision:
      "La segunda app visible es la única razón cotidiana para pagar el Duo frente a un Pro Max. Si en tienda no das con ese par, no lo compres por la promesa.",
    faq: [
      {
        q: "¿Se puede arrastrar de una app a la otra?",
        a: "Cabe esperar lo que iOS ya permite entre apps en paralelo, pero el gesto fino hay que verlo en la versión final. No lo afirmes en un tutorial todavía.",
      },
      {
        q: "¿Funciona en vertical y en horizontal?",
        a: "La pantalla interior se usa en las dos orientaciones. Split View está pensado para el formato ancho.",
      },
    ],
    related: ["trucos", "funciones-ocultas", "vs-galaxy-z-fold"],
  },
  {
    slug: "apple-pencil",
    title: "Cómo utilizar el Apple Pencil con el iPhone Duo",
    dek: "La frase corta: todavía no. Está prometido para más adelante en 2026, en las dos pantallas, y no es un accesorio de lanzamiento.",
    directAnswer:
      "El 23 de octubre el iPhone Duo no se usa con Apple Pencil. Apple ha dicho que la compatibilidad llegará más tarde en 2026, por USB-C, en la pantalla interior y en la exterior.",
    cluster: "transaccional",
    category: "duo",
    tags: ["Apple Pencil", "USB-C"],
    minutes: 4,
    updated,
    confidence: "ficha",
    sections: [
      {
        heading: "Qué está prometido",
        paragraphs: [
          "Las dos caras. Una conexión USB-C, no el Pencil de carga rara de generaciones viejas. Sirve para quien ya piensa el teléfono como libreta: firmar, marcar un plano, tomar notas en la pantalla grande.",
          "No hay, en lo publicado, una fecha de día ni el modelo exacto más allá de ese USB-C. Comprar hoy «el Pencil compatible con el Duo» es comprar a ciegas.",
        ],
      },
      {
        heading: "El problema no es el lápiz, es la superficie",
        paragraphs: [
          "La cara interior es polímero con nano-textura, no el cristal del iPad. Una punta dura, repetida, es justo el uso que más desgasta un recubrimiento. Apple no ha publicado cómo convive esa punta con el pliegue ni si hace falta una punta blanda.",
          "Hasta que alguien lo pruebe, trata el anuncio como una función futura, no como un motivo de compra. Si dibujar es la razón principal, un iPad sigue siendo la herramienta; el Duo sería un añadido cuando el software exista.",
        ],
      },
      {
        heading: "Qué hacer con las ganas",
        paragraphs: [
          "No lo metas en el presupuesto del 16 de octubre. No aceptes un enlace de afiliado que te venda un Pencil «listo para Duo» esta semana: o es genérico o es mentira. Cuando Apple publique el modelo, esta ficha dirá cuál y si vale la pena en el polímero.",
          "Mientras, la protección de esa cara depende de cómo lo apoyas y de si usas [[mejores-fundas|Folio]]. El lápiz es un riesgo extra, no un escudo.",
        ],
      },
    ],
    unknowns: [
      "Modelo exacto y precio.",
      "Fecha dentro de 2026.",
      "Desgaste de la nano-textura con la punta.",
    ],
    decision:
      "Si el Pencil es imprescindible el primer mes, este lanzamiento no te sirve. Espera a la actualización o compra un iPad.",
    faq: [
      {
        q: "¿Valdrá mi Pencil USB-C actual?",
        a: "Es lo más plausible y no está confirmado. Espera el nombre del modelo.",
      },
      {
        q: "¿Funciona cerrado, en la 5,4?",
        a: "Apple dice que en las dos pantallas, cuando la función exista. Hoy no existe.",
      },
    ],
    related: ["se-raya-la-pantalla", "mejores-accesorios", "funciones-ocultas"],
  },
  {
    slug: "mejores-fundas",
    title: "Fundas para el iPhone Duo: qué existe de verdad",
    dek: "Hay dos oficiales con precio. El resto, hasta que el teléfono esté en la calle, son fotos de un CAD.",
    directAnswer:
      "Apple tiene un Case a 79 dólares y un Folio con soporte a 129. Solo el Folio cubre la pantalla interior al cerrarlo. Las fundas de terceros aún no se pueden recomendar: no hay teléfono de venta con el que comprobar el ajuste.",
    cluster: "transaccional",
    category: "duo",
    tags: ["fundas", "Folio"],
    minutes: 5,
    updated,
    confidence: "ficha",
    table: {
      caption: "Oficiales citadas en el lanzamiento",
      headers: ["Pieza", "Precio citado", "Qué tapa"],
      rows: [
        ["Duo Case", "79 USD", "Exterior. No es la que cubre la interior al cerrar"],
        ["Folio con soporte", "129 USD", "Incluye la cara interior cuando está cerrado"],
      ],
    },
    sections: [
      {
        heading: "Las dos que tienen precio",
        paragraphs: [
          "El Case es la funda fina de siempre, adaptada a un cuerpo que cambia de grosor. El dato útil no es el color: es que no es la pieza que protege la pantalla interior cuando el teléfono está cerrado y esa cara podría apoyar contra algo, según la distinción que ya circula entre las dos oficiales.",
          "El Folio cuesta más porque hace de tapa y de apoyo. En un teléfono que se usa a medias —la pose que Apple ha vendido como parte del producto— el soporte no es un adorno. Es lo que evita que lo sujetes abierto con una mano cansada.",
        ],
      },
      {
        heading: "Por qué no hay un top de Amazon hoy",
        paragraphs: [
          "Un plegable filtra mal. Un milímetro de bisagra mal calculado y la funda roza el polímero o impide cerrar del todo. Hasta el 23 de octubre, las fundas de marca blanca son apuestas sobre filtraciones. Recomendarlas con un enlace sería cobrar por un encaje que nadie ha podido medir en serie.",
          "Cuando haya unidades, los criterios serán aburridos: ¿cierra sin forzar?, ¿la tapa toca la nano-textura?, ¿el botón coincide?, ¿el soporte aguanta el ángulo sin tapar el micrófono? Entonces sí habrá una lista corta. Hoy sería un anuncio disfrazado.",
        ],
      },
      {
        heading: "Qué comprar el primer día, si compras",
        paragraphs: [
          "Si vas a llevarlo abierto por casa, el Folio es la pieza que encaja con el riesgo. Si solo te preocupa el canto y lo vas a guardar siempre cerrado en un bolsillo limpio, el Case puede bastar y te ahorras 50 dólares. La duda está desarrollada en [[necesita-funda|si hace falta funda]].",
          "No sumes el Pencil a este pedido. No está a la venta para este teléfono.",
        ],
      },
    ],
    unknowns: [
      "Colores y stock el 16 de octubre.",
      "Si una tercera funda oficial aparece con MagSafe u otro acople.",
      "Ajuste real de las fundas que se anuncien esa semana.",
    ],
    decision:
      "Día uno: Folio si la pantalla interior va a ver mesa; Case si no. Terceros: espera a una foto del cierre real, no al render de la ficha de producto.",
    faq: [
      {
        q: "¿Sirve una funda de iPhone 17 o 18?",
        a: "No. Ni el grosor ni la bisagra coinciden.",
      },
      {
        q: "¿El Folio cabe en el bolsillo?",
        a: "Suma volumen a un teléfono que cerrado ya mide 11,3 mm y pesa 254 g. Pruébalo antes si vas justo de bolsillo.",
      },
    ],
    related: ["necesita-funda", "mejores-accesorios", "que-pasa-si-se-cae"],
  },
  {
    slug: "mejores-accesorios",
    title: "Accesorios del iPhone Duo que sí y que no",
    dek: "Casi nada de lo que vas a ver en un vídeo de «setup» existe todavía como producto probado. La lista corta es deliberadamente pobre.",
    directAnswer:
      "Día uno solo tiene sentido la funda oficial que encaje con tu uso. Cargador, lo que ya tengas de USB-C. El Pencil no. Las fundas y cristales de terceros, tampoco, hasta que haya unidades de venta.",
    cluster: "transaccional",
    category: "duo",
    tags: ["accesorios", "carga", "fundas"],
    minutes: 5,
    updated,
    confidence: "ficha",
    sections: [
      {
        heading: "Lo que sí entra en el pedido",
        paragraphs: [
          "Funda: Case o Folio, con la diferencia que está en [[mejores-fundas|fundas]]. Si eliges una, elige por la pantalla interior, no por el color del unboxing.",
          "Carga: el Duo no ha estrenado un puck mágico distinto en lo publicado. Sirve tu cable y tu cargador USB-C actuales. Comprar un ladrillo nuevo «edición Duo» es margen de alguien, no una necesidad técnica conocida.",
        ],
      },
      {
        heading: "Lo que conviene dejar en el carrito",
        paragraphs: [
          "Apple Pencil, hasta que exista la compatibilidad. Protectores de pantalla universal: en la cara interior pueden interferir con el pliegue y con el tacto del polímero. Soportes de coche pensados para un iPhone plano: 11,3 mm y una bisagra no caben en todas las pinzas, y una pinza que apriete el canto equivocado es una palanca contra el mecanismo.",
          "Baterías magnéticas y anillos adhesivos: no los pegues cerca de la costura ni sobre la cámara hasta saber qué acoples admite la funda oficial. Un adhesivo en el titanio pulido es un daño tonto y permanente.",
        ],
      },
      {
        heading: "Cuando esta página cambie",
        paragraphs: [
          "Después del 23 de octubre se puede hablar de fundas con nombre, de pinzas medidas y, más tarde, del Pencil concreto. Hasta ese día, una lista de «los 12 mejores» es contenido vacío con enlaces. No es el tipo de página que CupertinoLab va a fingir.",
          "Si alguien te enseña un cristal templado «sin burbujas en el pliegue», pide el vídeo del teléfono cerrando después de ponerlo. Si no existe, es un accesorio de otro aparato.",
        ],
      },
    ],
    unknowns: [
      "Vatios y MagSafe exactos si Apple los detalla en la Store.",
      "Modelo de Pencil.",
      "Primeras fundas de terceros que no rocen al cerrar.",
    ],
    decision:
      "Gasta en la funda que tapa lo que vas a apoyar. El resto del «setup Duo» puede esperar a que el teléfono exista fuera del escenario.",
    faq: [
      {
        q: "¿Hace falta un cargador nuevo?",
        a: "No, con lo publicado. USB-C es suficiente mientras Apple no diga lo contrario.",
      },
      {
        q: "¿Un cristal en la pantalla interior?",
        a: "No lo pongas por anticipado. El pliegue y el polímero no se llevan bien con láminas genéricas.",
      },
    ],
    related: ["mejores-fundas", "apple-pencil", "necesita-funda"],
  },
  {
    slug: "necesita-funda",
    title: "¿Necesita funda el iPhone Duo?",
    dek: "Cerrado, el titanio y el Ceramic Shield aguantan más conversación. Abierto, la pregunta cambia de pantalla.",
    directAnswer:
      "Cerrado puedes ir sin funda si aceptas rayones en el pulido de espejo. Abierto, el polímero interior no debería apoyar desnudo en una mesa. Si lo usas desplegado fuera de la mano, necesita tapa.",
    cluster: "transaccional",
    category: "duo",
    tags: ["funda", "protección"],
    minutes: 4,
    updated,
    confidence: "manos",
    sections: [
      {
        heading: "Dos respuestas porque hay dos caras",
        paragraphs: [
          "La exterior tiene Ceramic Shield 2 y la trasera Ceramic Shield, sobre titanio de grado 5. Es el discurso de durabilidad de un iPhone reciente. El pero estético: el marco va pulido a espejo. Sin funda se va a marcar, como cualquier canto brillante, aunque no se rompa.",
          "La interior es otra pieza. Polímero, nano-textura, pliegue. No está para convivir con llaves, con la mesa del café ni con la arena del bolso. Una caída en esa pose es el escenario sin datos del que habla la ficha de [[que-pasa-si-se-cae|qué pasa si se cae]].",
        ],
      },
      {
        heading: "Quién puede ir desnudo",
        paragraphs: [
          "Quien lo lleve cerrado en un bolsillo solo, lo abra en la mano y lo vuelva a cerrar antes de soltarlo. Ese uso existe —es el del teléfono pequeño— y una funda gruesa lo estropea: ya partes de 11,3 mm y 254 g.",
          "Quien lo deje abierto junto al portátil, en la cocina o en el reposabrazos del coche no está en ese grupo. Ahí el Folio es la respuesta más concreta que hay hoy, no una funda genérica. Precios y límites en [[mejores-fundas|la ficha de fundas]].",
        ],
      },
      {
        heading: "Lo que la funda no arregla",
        paragraphs: [
          "No publica los ciclos que Apple omitió. No convierte el polímero en cristal. No evita que un golpe en el canto se transmita a la bisagra si la funda es rígida en el sitio equivocado.",
          "Sirve para lo mundano: rayones, apoyo y algo de agarre. Si esperas que una funda de 79 dólares convierta un primer plegable en un teléfono de obra, te estás comprando una historia.",
        ],
      },
    ],
    unknowns: [
      "Cuánto se marca el titanio pulido en un mes sin funda.",
      "Si el Case estorba al cierre o al ángulo de tienda.",
    ],
    decision:
      "Sin funda solo si tu uso real es cerrado y en la mano. En cuanto la pantalla grande toque una mesa, tapa. No hace falta cubrirlo de accesorios: hace falta cubrir esa cara.",
    faq: [
      {
        q: "¿El Ceramic Shield 2 cubre la pantalla interior?",
        a: "No. Va en la exterior. La interior es el polímero.",
      },
      {
        q: "¿Puedo usar solo el Case?",
        a: "Sí, si aceptas que la interior queda a su suerte cuando el teléfono no está cerrado del todo.",
      },
    ],
    related: ["mejores-fundas", "se-raya-la-pantalla", "que-pasa-si-se-cae"],
  },
  {
    slug: "se-raya-la-pantalla",
    title: "¿Se raya la pantalla del iPhone Duo?",
    dek: "Hay dos pantallas y no comparten material. El vídeo que pase una llave por la cara interior no está hablando del Ceramic Shield.",
    directAnswer:
      "La exterior usa Ceramic Shield 2, que Apple cifra en tres veces más resistencia al rayado. La interior es un polímero: se marca antes y es la que tienes que cuidar. No hay un ensayo independiente todavía.",
    cluster: "viral",
    category: "duo",
    tags: ["rayado", "Ceramic Shield", "polímero"],
    minutes: 5,
    updated,
    confidence: "ficha",
    sections: [
      {
        heading: "Exterior e interior no son la misma prueba",
        paragraphs: [
          "Ceramic Shield 2 está en la pantalla de fuera. Apple dice que resiste el rayado tres veces mejor que la generación previa de ese material. La trasera lleva Ceramic Shield, a secas. Esas frases no se trasladan al panel que se dobla.",
          "La cubierta interior es un polímero que la marca describe un 40 % más rígido que el estándar de los plegables, sobre vidrio flexible, con la nano-textura encima. Más rígido que otros plegables sigue siendo más blando que el cristal de un iPhone plano. Una uña no debería asustarte; una llave, arena o la punta de un lápiz, sí.",
        ],
      },
      {
        heading: "Qué va a enseñar TikTok",
        paragraphs: [
          "El clip inevitable es un cutter o una moneda en la pantalla abierta. Eso no mide el Ceramic Shield 2. Mide el polímero, que ya se sabe más vulnerable, y a menudo mide una unidad que no es de serie. Sirve como espectáculo. No sirve como ficha.",
          "El otro ensayo —la cara exterior— se parece al de cualquier iPhone reciente con canto pulido: el cristal aguanta más que el marco brillante. La gente confunde marco marcado con pantalla rayada. En el Duo, con pulido de espejo, va a pasar el primer día.",
        ],
      },
      {
        heading: "Hábitos que sí cambian el resultado",
        paragraphs: [
          "No lo abras en la playa. No lo deslices abierto sobre una mesa con polvo. No le pongas un cristal genérico «por proteger» hasta saber si esa lámina respeta el pliegue. Y no cuentes con el Pencil como si la superficie fuera un iPad: cuando llegue, será una punta contra este polímero.",
          "La tapa que evita el apoyo está en [[necesita-funda|¿necesita funda?]]. El surco, que no es un rayón pero se va a discutir al lado, está en [[pliegue-en-la-pantalla|el pliegue]].",
        ],
      },
    ],
    unknowns: [
      "Dureza Mohs medida por un laboratorio ajeno, en las dos caras.",
      "Si la nano-textura se abrillanta en la zona del dedo.",
      "Desgaste con Pencil.",
    ],
    decision:
      "Trata la exterior como un iPhone. Trata la interior como la pantalla de un plegable, aunque el marketing diga que es más dura que las demás. Si eso te parece inaceptable, no es tu teléfono.",
    faq: [
      {
        q: "¿El mate esconde los micro-rayones?",
        a: "El mate disimula el pliegue y los reflejos. No está demostrado que esconda un arañazo profundo. A veces el mate hace que un brillo local —donde se ha pulido el recubrimiento— se note más.",
      },
      {
        q: "¿Se puede cambiar solo la lámina?",
        a: "Apple no ha dicho que la cubierta interior sea una pieza que tú reemplazas. Cuenta con una reparación de pantalla, de precio aún opaco.",
      },
    ],
    related: ["pliegue-en-la-pantalla", "necesita-funda", "apple-pencil"],
  },
  {
    slug: "como-funciona-la-bisagra",
    title: "¿Cómo funciona la bisagra del iPhone Duo?",
    dek: "Más de cien piezas, par variable y un cierre que quiere sonar a puerta, no a bisagra de maletín. El número de vidas útiles no viene en la caja.",
    directAnswer:
      "Es una bisagra de titanio con más de 100 componentes y par variable: se queda a medias, no solo abierta o cerrada. Apple no ha dicho cuántos ciclos aguanta.",
    cluster: "viral",
    category: "duo",
    tags: ["bisagra", "titanio", "par"],
    minutes: 5,
    updated,
    confidence: "ficha",
    sections: [
      {
        heading: "Las piezas que sí han nombrado",
        paragraphs: [
          "Marco de titanio de grado 5. Cubierta de la bisagra impresa en 3D con titanio 100 % reciclado. Más de cien componentes y adhesivos específicos para que la flexión no se concentre en un solo punto. Imanes en el marco para que al cerrar las dos mitades se encuentren y no queden entreabiertas por descuido.",
          "El par no es un muelle de un solo clic. Está perfilado para tres momentos: el cierre firme, el ángulo de trabajo y el abierto estable. Marieb habló de horas de ajuste para que no parezca que fuerzas una tapa ni que el teléfono se desploma a mitad de recorrido.",
        ],
      },
      {
        heading: "Para qué quieres ese par",
        paragraphs: [
          "Para dejar una videollamada en tienda de campaña, para escribir con el teclado partido y para que la mitad inferior haga de peana. Sin ese freno, el Duo sería un libro que solo sirve del todo abierto, y entonces compite peor con un iPad.",
          "Esa pose es también una carga. Mantener el ángulo es trabajo mecánico cada minuto que lo dejas así. Como no hay cifra de ciclos, no sabemos si el «no está flojo» del keynote sigue siendo verdad en el mes catorce. Esa es la pieza que falta y que desarrollamos en [[cuantas-veces-se-puede-doblar|cuántas veces se dobla]].",
        ],
      },
      {
        heading: "Qué mirar si lo tienes delante",
        paragraphs: [
          "Ciérralo despacio y escucha si hay un punto blando a mitad. Ábrelo y suéltalo a 100 grados: no debería caer. Apóyalo en tienda y toca la pantalla: la mitad de abajo no debería irse. Esos tres gestos dicen más que el render de las cien piezas.",
          "Si ya decides comprarlo, no bloquees esa bisagra con una pinza de coche ni con una funda que haga palanca. El mecanismo es el producto; también es el punto que nadie ha tarifado reparar.",
        ],
      },
    ],
    unknowns: [
      "Ciclos nominales.",
      "Si el par se reajusta en servicio o solo se sustituye la bisagra.",
      "Precio de esa reparación.",
    ],
    decision:
      "La bisagra es el motivo para quererlo y el motivo para esperar si necesitas una vida útil por escrito. Tócala antes de pagar. No compres el exploded view.",
    faq: [
      {
        q: "¿Se puede abrir con una mano?",
        a: "El par está pensado para sentirse sólido. En las 254 g, «con una mano» depende de tu mano. Pruébalo; no es un dato de ficha.",
      },
      {
        q: "¿El imán sustituye al cierre mecánico?",
        a: "No. Ayuda a que las mitades se junten al final. El recorrido lo hace la bisagra.",
      },
    ],
    related: ["cuantas-veces-se-puede-doblar", "pliegue-en-la-pantalla", "trucos"],
  },
  {
    slug: "antes-de-comprar",
    title: "20 cosas que debes saber antes de comprar el iPhone Duo",
    dek: "Una lista para la noche anterior a la preventa. Si fallas tres de las primeras, sobra el resto.",
    directAnswer:
      "Cuesta desde 1.999 dólares, pesa 254 g, no tiene SIM física ni teleobjetivo dedicado, el Pencil no está el día uno y Apple no ha dicho cuántas veces se dobla. Si eso te encaja, la preventa es el 16 de octubre.",
    cluster: "transaccional",
    category: "duo",
    tags: ["checklist", "compra"],
    minutes: 8,
    updated,
    confidence: "ficha",
    sections: [
      {
        heading: "Dinero y formato",
        paragraphs: [
          "Uno: 1.999 dólares es la entrada en EE. UU., no el precio con funda. Dos: el Pro Max de esta generación parte de 1.299; la diferencia son unos 700. Tres: 512 GB suma 200 dólares en esa lista; no subas de capacidad por inercia. Cuatro: tu país puede no tener precio todavía; no conviertas dólares a ojo. Cinco: cerrado mide 11,3 mm y pesa 254 g. Seis: abierto, 5,2 mm, sin contar el bloque de cámaras. Siete: la exterior es de 5,4 pulgadas. Si odias los teléfonos pequeños, vas a vivir en la cara grande y a pagar su batería.",
          "El desglose está en [[cuanto-cuesta|cuánto cuesta]] y en el careo con el [[vs-iphone-18-pro-max|Pro Max]].",
        ],
      },
      {
        heading: "Lo que no trae y lo que no está medido",
        paragraphs: [
          "Ocho: solo eSIM, en todo el mundo, con dos activas. Nueve: no hay teleobjetivo dedicado; el 2x sale del sensor principal de 48 MP. Diez: el Pencil llega más tarde en 2026. Once: no hay cifra de ciclos de bisagra. Doce: el pliegue se siente aunque se vea poco. Trece: la pantalla interior es polímero, no Ceramic Shield. Catorce: IP68 de laboratorio, y Apple dice que no es permanente. Quince: no hay drop test de unidades de venta. Dieciséis: la reparación de esa pantalla no tiene precio público.",
          "Esas nueve son la letra pequeña del tráiler. Cada una tiene ficha propia en el [[guia-completa|mapa de la guía]].",
        ],
      },
      {
        heading: "Uso, calendario y trampas",
        paragraphs: [
          "Diecisiete: la multitarea son dos apps, no un escritorio. Dieciocho: las 44 horas son vídeo en la cara pequeña, no tu día. Diecinueve: la preventa es el 16 de octubre y la calle el 23; un unboxing anterior es prestado. Veinte: cualquier enlace que hoy te prometa funda perfecta, Pencil compatible o «prueba de 500.000 dobleces» está vendiendo algo que la ficha no sostiene.",
          "Si después de las veinte sigues queriendo la pantalla partida de cada tarde, el Duo es coherente. Si has negociado contigo mismo en más de tres puntos, espera a las pruebas de finales de octubre. El teléfono no se agota como idea: se agota el stock, y el stock vuelve.",
        ],
      },
    ],
    unknowns: [
      "Precio en tu moneda el día 16.",
      "Stock real por capacidad.",
      "Pruebas ajenas la semana del 23.",
    ],
    decision:
      "Lee los puntos ocho, once y trece otra vez. eSIM, ciclos y polímero son los que más gente va a descubrir tarde. Si los aceptas, encarga con la funda adecuada, no con el accesorio de moda.",
    faq: [
      {
        q: "¿Esperar al segundo modelo?",
        a: "Tiene sentido si necesitas ciclos publicados, Pencil desde el día uno o una reparación con precio. No tiene sentido si la pantalla doble ya te resuelve un trabajo de este año.",
      },
      {
        q: "¿Puedo devolverlo si el pliegue me molesta?",
        a: "Depende de la ley de tu país y de la política de la tienda, no de esta página. Pregúntalo antes de abrir el precinto. En muchos sitios, abrir es quedártelo.",
      },
    ],
    related: ["guia-completa", "cuanto-cuesta", "sim-fisica"],
  },
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
