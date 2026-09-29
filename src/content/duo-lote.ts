import type { Article } from "@/content/articles";

const updated = "30 sep 2026";
const consulted = "Consulta de precios y fichas: 30 de septiembre de 2026.";

const appleDuo = { label: "Apple, iPhone Duo", href: "https://www.apple.com/es/iphone-duo/" };
const appleSpecs = {
  label: "Apple, especificaciones del iPhone Duo",
  href: "https://www.apple.com/es/iphone-duo/specs/",
};
const appleNews = {
  label: "Apple Newsroom, presentación del iPhone Duo",
  href: "https://www.apple.com/es/newsroom/2026/09/apple-unveils-iphone-duo/",
};
const appleBuy = {
  label: "Apple Store España, compra del iPhone Duo",
  href: "https://www.apple.com/es/shop/buy-iphone/iphone-duo",
};
const applePro = {
  label: "Apple, especificaciones del iPhone 18 Pro",
  href: "https://www.apple.com/es/iphone-18-pro/specs/",
};
const appleProNews = {
  label: "Apple Newsroom, iPhone 18 Pro y Pro Max",
  href: "https://www.apple.com/es/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/",
};
const samsungSpecs = {
  label: "Samsung UK, especificaciones del Galaxy Z Fold8",
  href: "https://www.samsung.com/uk/smartphones/galaxy-z-fold8/specs/",
};
const samsungNews = {
  label: "Samsung Newsroom Alemania, presentación del Fold8",
  href: "https://news.samsung.com/de/samsung-galaxy-z-fold8-ultra-fold8-und-flip8-fur-jeden-lifestyle-ein-faltbares-gerat",
};

export const duoLote: Article[] = [
  {
    slug: "cuantas-veces-se-puede-doblar-iphone-duo",
    title: "¿Cuántas veces se puede doblar el iPhone Duo?",
    dek: "Apple describe la bisagra y no publica un número de ciclos. Resistir el día a día no es lo mismo que garantizar un millón de pliegues.",
    directAnswer:
      "No. A 30 de septiembre de 2026 Apple no publica cuántas veces se puede doblar el iPhone Duo. Describe una bisagra de más de 100 piezas, titanio de grado 5 y una sensación equilibrada al abrir y cerrar. Eso no es una cifra de ciclos.",
    cluster: "informativo",
    category: "duo",
    tags: ["bisagra", "ciclos", "durabilidad"],
    minutes: 6,
    updated,
    confidence: "pendiente",
    coverAlt:
      "Plegables Samsung vistos de canto, con la bisagra a la vista. Foto de Ka Kit Pang, CC BY-SA. No es un ensayo de ciclos del iPhone Duo.",
    metaTitle: "¿Cuántas veces se dobla el iPhone Duo?",
    metaDescription:
      "Apple no da una cifra de ciclos del iPhone Duo. Qué dice de la bisagra, qué significa resistencia y qué prueba independiente falta.",
    sources: [appleNews, appleSpecs, appleDuo],
    table: {
      caption: "Bisagra: dato oficial y lo que no está publicado",
      headers: ["Pregunta", "Qué hay publicado", "Tipo"],
      rows: [
        ["¿Hay una cifra de ciclos?", "No", "Hueco oficial"],
        ["¿Cuántas piezas tiene la bisagra?", "Más de 100", "Dato oficial"],
        ["¿De qué es la cubierta?", "Titanio de grado 5, impresa en 3D", "Dato oficial"],
        ["¿Sujeta el centro de la pantalla?", "Sí, para mantenerla plana al abrir", "Dato oficial"],
        ["¿Prueba independiente de ciclos?", "No, el teléfono sale el 23 de octubre", "Sin prueba"],
      ],
    },
    sections: [
      {
        heading: "¿Existe una cifra oficial?",
        paragraphs: [
          "No en las páginas que Apple mantiene en español para este teléfono: la ficha técnica, la página de producto y la nota de prensa del 9 de septiembre de 2026. Ninguna escribe un número de aperturas, de ciclos de laboratorio ni de años de uso de la bisagra.",
          "Quien publique «aguanta 200.000 dobleces» o «un millón» está rellenando ese silencio. CupertinoLab no va a hacerlo. Una frase de marketing y un contador de ciclos son cosas distintas.",
        ],
      },
      {
        heading: "Qué ha dicho Apple de la bisagra",
        paragraphs: [
          "El mecanismo lleva más de cien componentes. Controlan la apertura, el cierre y el apoyo del centro de la pantalla, para que abierta se quede plana. Un conjunto de imanes ayuda a que el cierre encaje. Apple lo describe como fluido y con una resistencia sutil, equilibrada, pensada para el uso diario.",
          "La cubierta de la bisagra es titanio de grado 5, impresa en 3D, con acabado microgranallado, distinto del pulido del marco. En la ficha de materiales, ese recubrimiento usa titanio reciclado. Debajo del panel hay una placa de titanio que Apple presenta como refuerzo, y adhesivos que dejan deslizar las capas al plegar, para no estirarlas.",
        ],
        subsections: [
          {
            heading: "Resistencia declarada no es un ciclo garantizado",
            paragraphs: [
              "«Hecho para durar» y «aguanta el trote del día a día» son valoraciones de Apple sobre el conjunto: titanio, bisagra, Ceramic Shield en la trasera, Ceramic Shield 2 en la pantalla exterior e IP68. No dicen cuántas veces puedes doblarlo antes de que el par cambie, el pliegue se marque más o la pantalla falle.",
              "Un ciclo sería abrir y cerrar una vez en un banco de pruebas, con un ángulo, una velocidad y una temperatura definidos. Sin ese método publicado, no hay forma honesta de traducir la bisagra a «X años si lo abres Y veces al día».",
            ],
          },
        ],
      },
      {
        heading: "Qué todavía no se puede saber",
        paragraphs: [
          "No hay unidades de venta hasta el 23 de octubre de 2026. Hasta entonces no existe una prueba independiente sobre el producto que paga la gente: ni de ciclos, ni de cómo evoluciona el [[pliegue-pantalla|pliegue]], ni de qué ocurre si [[que-pasa-si-se-cae|se cae]] cerrado o abierto.",
          "La prueba útil, cuando exista, tiene que decir el método: ángulo, velocidad, temperatura, si cuenta solo la bisagra o también el panel, y qué se considera fallo. Un vídeo de alguien abriendo el teléfono en una mesa no sustituye eso.",
        ],
      },
    ],
    unknowns: [
      "Número de ciclos de la bisagra o del panel.",
      "Ángulos intermedios que mantiene y si Apple los garantiza.",
      "Cómo cambia el pliegue después de meses de uso real.",
    ],
    decision:
      "Si necesitas un número de dobleces para decidir la compra, hoy no lo tienes. Puedes valorar materiales y diseño. No puedes valorar una duración que Apple no ha cifrado.",
    faq: [
      {
        q: "¿Apple ha dicho que la bisagra es permanente?",
        a: "No con esa palabra. Dice que está pensada para el uso diario y que el mecanismo es fiable. No adjunta un contador.",
      },
      {
        q: "¿El IP68 mide los pliegues?",
        a: "No. El IP68 de la ficha es polvo y agua: hasta 6 metros durante un máximo de 30 minutos, según IEC 60529. No habla de la bisagra.",
      },
    ],
    related: ["pliegue-pantalla", "que-pasa-si-se-cae", "funciones-trucos"],
  },
  {
    slug: "pliegue-pantalla",
    title: "¿El iPhone Duo tiene pliegue en la pantalla?",
    dek: "Apple dice que el acabado nanotexturizado minimiza la marca. Minimizar no es hacerla desaparecer.",
    directAnswer:
      "Apple no dice que el pliegue sea invisible. Dice que el acabado nanotexturizado de la pantalla interior, de 7,6 pulgadas, reduce brillos y reflejos y minimiza la marca del pliegue. Si se ve o se nota al dedo, todavía no hay una medición independiente: el teléfono llega el 23 de octubre.",
    cluster: "informativo",
    category: "duo",
    tags: ["pliegue", "pantalla", "OLED"],
    minutes: 6,
    updated,
    confidence: "pendiente",
    coverAlt:
      "Detalle de la pantalla abierta de un Galaxy Fold7 en una tienda. Foto de Matabalt, CC0. No mide el pliegue del iPhone Duo.",
    metaTitle: "¿El iPhone Duo tiene pliegue en la pantalla?",
    metaDescription:
      "Qué dice Apple del pliegue del iPhone Duo, qué hace el acabado nanotexturizado y por qué «menos visible» no significa invisible.",
    sources: [appleNews, appleSpecs, appleDuo],
    sections: [
      {
        heading: "La pantalla que se dobla",
        paragraphs: [
          "La interior es una Super Retina XDR plegable. En el lenguaje de producto, Apple habla de 7,6 pulgadas. En la ficha, medida como rectángulo, la diagonal es 7,58 pulgadas y la superficie útil es menor, porque las esquinas son redondas. Lleva ProMotion hasta 120 Hz, siempre activa, HDR, True Tone, contraste típico de 2.000.000:1 y picos de 1.000, 1.600 y 3.000 nits según el modo.",
          "El acabado es nanotexturizado: una superficie mate para bajar reflejos. Encima hay un revestimiento contra arañazos. Apple no pone Ceramic Shield en esta cara. El Ceramic Shield 2 está en la pantalla exterior y el Ceramic Shield, en la trasera.",
        ],
        subsections: [
          {
            heading: "Qué hay debajo del tacto",
            paragraphs: [
              "Apple describe un polímero propio, hasta un 40 % más rígido que otros materiales del sector, sobre capas de vidrio de alta resistencia, con adhesivos que dejan deslizar esas capas al cerrar y una placa de titanio que sujeta el centro. Es la explicación oficial de cómo intentan que el pliegue se note menos. No es una medida de profundidad de la marca en milímetros.",
            ],
          },
        ],
      },
      {
        heading: "«Menos visible» no es «invisible»",
        paragraphs: [
          "La nota de prensa dice que la superficie mate minimiza cualquier marca de pliegue. Minimizar admite que la marca existe y que el objetivo es que cueste más verla, sobre todo con reflejos. No es lo mismo que afirmar que no hay pliegue o que nadie puede notarlo con el dedo.",
          "Tampoco hay un número de [[cuantas-veces-se-puede-doblar-iphone-duo|ciclos]] que diga si esa marca empeora. Y una caída, abierta o cerrada, es otra pregunta: está en [[que-pasa-si-se-cae|qué pasa si se cae]].",
        ],
      },
      {
        heading: "Qué falta para cerrar el debate",
        paragraphs: [
          "Hace falta ver unidades de venta con luz de oficina, luz de calle y el dedo, y repetirlo a los meses. Una foto de estudio de Apple no mide el pliegue. Un vídeo de una unidad de demostración tampoco es una prueba de laboratorio. Hasta el 23 de octubre, la frase correcta es la de Apple, no una conclusión de uso.",
        ],
      },
    ],
    unknowns: [
      "Profundidad del pliegue en milímetros.",
      "Si se nota más al tacto que a la vista.",
      "Cómo evoluciona después de miles de aperturas.",
    ],
    decision:
      "Cuenta con que hay un pliegue y con que Apple ha trabajado para que se vea menos. No compres creyendo que es una lámina de cristal sin junta.",
    faq: [
      {
        q: "¿La pantalla exterior también se pliega?",
        a: "No. La exterior, de 5,4 pulgadas en el lenguaje de producto y 5,36 en la medida rectangular, es la cara que usas cerrado. El pliegue del que habla Apple es el de la interior.",
      },
      {
        q: "¿El nanotexturizado quita el pliegue?",
        a: "Apple lo relaciona con menos reflejos y con una marca menos visible. No dice que lo elimine.",
      },
    ],
    related: ["cuantas-veces-se-puede-doblar-iphone-duo", "funciones-trucos", "que-pasa-si-se-cae"],
  },
  {
    slug: "resistente-agua-ip68",
    title: "¿Es resistente al agua el iPhone Duo?",
    dek: "Tiene IP68 de laboratorio: 6 metros, 30 minutos. Eso no lo convierte en un teléfono impermeable.",
    directAnswer:
      "Sí es resistente al agua y al polvo, con IP68 según IEC 60529: hasta 6 metros durante un máximo de 30 minutos, en las condiciones del ensayo. No es impermeable, la resistencia no está garantizada de por vida y Apple no publica qué pasa si lo abres y lo cierras dentro del agua.",
    cluster: "informativo",
    category: "duo",
    tags: ["IP68", "agua", "polvo"],
    minutes: 6,
    updated,
    confidence: "ficha",
    coverAlt:
      "Gotas de agua sobre un teléfono. Foto de Erlan Shatmanov en Pexels. No es una prueba IP68 del iPhone Duo.",
    metaTitle: "¿El iPhone Duo es resistente al agua? IP68",
    metaDescription:
      "El iPhone Duo tiene IP68: hasta 6 metros y 30 minutos en laboratorio. Qué significa, qué no cubre y qué precauciones deja Apple.",
    sources: [appleSpecs, appleNews, appleDuo],
    table: {
      caption: "Agua y polvo, según la ficha de Apple",
      headers: ["Dato", "Publicado"],
      rows: [
        ["Clasificación", "IP68, norma IEC 60529"],
        ["Profundidad del ensayo", "Hasta 6 metros"],
        ["Tiempo del ensayo", "Máximo 30 minutos"],
        ["Impermeable", "Apple no usa esa palabra"],
        ["Daño por líquidos fuera del ensayo", "No cubierto como uso normal"],
      ],
    },
    sections: [
      {
        heading: "Qué significa el IP68 en este teléfono",
        paragraphs: [
          "En la ficha española, la línea es concreta: IP68 según IEC 60529, hasta 6 metros de profundidad durante un máximo de 30 minutos. El primer dígito, 6, es el más alto frente al polvo en esa norma. El segundo, 8, es inmersión más allá de 1 metro, en las condiciones que el fabricante declara. Aquí, esas condiciones son las de la frase anterior.",
          "Resistente no es impermeable. Impermeable sugeriría que el agua no es un problema en cualquier sitio, tiempo o profundidad. Apple no dice eso. El ensayo es agua dulce, quieta, en laboratorio, con el teléfono en el estado en que se prueba. No es una piscina, ni el mar, ni un grifo a presión, ni un lavado con jabón.",
        ],
        subsections: [
          {
            heading: "Uso de un día y límites",
            paragraphs: [
              "Un chaparrón o un susto junto al lavabo entran en la idea de «salpicaduras» que Apple usa junto al IP68. Nadar con él, sumergirlo abierto, cerrarlo mojado o secarlo con aire caliente no están descritos como uso previsto. Si entra líquido y el teléfono falla, la garantía habitual de Apple no trata el daño por líquidos como un defecto de fabricación.",
              "La bisagra es una junta más. Apple no publica un ensayo de pliegues bajo el agua. El [[cuantas-veces-se-puede-doblar-iphone-duo|número de ciclos]] y el comportamiento mojado son dos huecos distintos.",
            ],
          },
        ],
      },
      {
        heading: "Precauciones que sí se pueden afirmar",
        paragraphs: [
          "Si se moja, lo razonable es secarlo por fuera, no abrirlo y cerrarlo para «escurrirlo», y no cargarlo hasta que no haya humedad en el puerto. Eso es prudencia, no un protocolo que Apple detalle cifra a cifra en la ficha del Duo. Una caída al agua sigue siendo una caída: las piezas que pueden sufrir están en [[que-pasa-si-se-cae|qué pasa si se cae]].",
          "El precio de reparar un daño por líquido no está en esta página. El de compra, sí: [[precio-espana|desde 2.339 €]] en la Apple Store española, consultada el 30 de septiembre de 2026.",
        ],
      },
    ],
    unknowns: [
      "Si el ensayo IP68 se hizo abierto, cerrado o en las dos posiciones.",
      "Comportamiento con agua salada, clorada o jabón.",
      "Si la resistencia baja después de meses de pliegues o de una reparación.",
    ],
    decision:
      "Puedes tratarlo como un iPhone con IP68 de 6 metros y 30 minutos, no como un reloj de buceo. Si el agua es parte de tu trabajo, no uses la ficha como permiso.",
    faq: [
      {
        q: "¿Puedo meterlo en la piscina?",
        a: "Apple no lo presenta como uso previsto. El IP68 es un ensayo de laboratorio, no una invitación a nadar con el teléfono.",
      },
      {
        q: "¿El iPhone 18 Pro Max tiene el mismo IP68?",
        a: "La ficha del 18 Pro también dice IP68, hasta 6 metros y 30 minutos. La comparación de formato está en [[iphone-duo-vs-iphone-18-pro-max|Duo contra Pro Max]].",
      },
    ],
    related: ["que-pasa-si-se-cae", "precio-espana", "iphone-duo-vs-iphone-18-pro-max"],
  },
  {
    slug: "que-pasa-si-se-cae",
    title: "¿Qué pasa si se cae un iPhone Duo?",
    dek: "Hay titanio, Ceramic Shield e IP68. Ninguno de esos datos predice una caída concreta.",
    directAnswer:
      "No se puede decir qué ocurre. Apple no ha publicado una prueba de caída del iPhone Duo, ni una altura, ni un resultado. Lo que sí describe es la construcción: titanio de grado 5, Ceramic Shield 2 delante, Ceramic Shield detrás, revestimiento en la pantalla interior, bisagra de más de 100 piezas e IP68.",
    cluster: "informativo",
    category: "duo",
    tags: ["caída", "titanio", "Ceramic Shield"],
    minutes: 7,
    updated,
    confidence: "pendiente",
    coverAlt:
      "Pantallas de móvil agrietadas. Foto de Towfiqu barbhuiya en Pexels. No es una prueba de caída del iPhone Duo.",
    metaTitle: "¿Qué pasa si se cae un iPhone Duo?",
    metaDescription:
      "Apple no publica un drop test del iPhone Duo. Qué materiales declara y qué piezas pueden sufrir en una caída, sin inventar alturas.",
    sources: [appleNews, appleSpecs, appleDuo],
    sections: [
      {
        heading: "Lo que la ficha protege, y lo que no promete",
        paragraphs: [
          "El marco y la cubierta de la bisagra son titanio de grado 5. La pantalla exterior lleva Ceramic Shield 2, que Apple cifra como el triple de resistencia a los arañazos frente a la generación anterior de ese cristal. La trasera lleva Ceramic Shield. La interior no: lleva polímero, vidrio de alta resistencia, un revestimiento contra arañazos y el acabado que también busca un [[pliegue-pantalla|pliegue menos visible]].",
          "El IP68, detallado en [[resistente-agua-ip68|la ficha de agua]], mide polvo y una inmersión de laboratorio. No mide el golpe contra el suelo. Una especificación de material no es un ensayo de caída, y un ensayo de caída, si algún día se publica, tampoco vale para todas las alturas, suelos y ángulos.",
        ],
      },
      {
        heading: "Las partes que podrían verse afectadas",
        paragraphs: [
          "Sin una prueba sobre unidades de venta, esta lista no es un ranking de lo que se rompe. Es el mapa de piezas que una caída puede alcanzar, porque son las que Apple ha descrito como distintas.",
        ],
        subsections: [
          {
            heading: "Pantalla exterior",
            paragraphs: [
              "Es la cara de fuera, con Ceramic Shield 2. Está expuesta cuando el teléfono va cerrado en la mano o en la mesa. Arañazo y rotura no son el mismo fallo: Apple cuantifica arañazos respecto a su cristal anterior, no una altura de supervivencia.",
            ],
          },
          {
            heading: "Pantalla interior",
            paragraphs: [
              "Solo recibe el golpe directo si cae abierta, o si el golpe deforma el cuerpo y la alcanza igual. Es la única pantalla del teléfono que no va bajo Ceramic Shield. El polímero y el revestimiento son la protección que Apple declara. No hay un índice de dureza publicado para esa cara.",
            ],
          },
          {
            heading: "Bisagra",
            paragraphs: [
              "Más de cien piezas, imanes de cierre y apoyo central. Un golpe en el canto puede ir a ese mecanismo. Apple no dice qué holgura o qué marca de pliegue considera aceptable después de un impacto, ni [[cuantas-veces-se-puede-doblar-iphone-duo|cuántos ciclos]] aguanta en buen estado.",
            ],
          },
          {
            heading: "Cámaras, estructura y el resto",
            paragraphs: [
              "El sistema trasero es el bloque que más sobresale. Apple no publica cuánto sobresale ni un ensayo de lente rajada. La estructura es titanio de grado 5 con divisores de antena que, según la nota de prensa, llevan inserciones de fibra cerámica para dar firmeza al chasis. Eso describe rigidez de diseño. No describe el resultado de soltarlo desde un metro sobre baldosa.",
            ],
          },
        ],
      },
      {
        heading: "Qué no vamos a afirmar",
        paragraphs: [
          "No hay una altura segura. No hay un «sobrevive a X centímetros». No hay una funda oficial evaluada en esta ficha: Apple no acompaña el anuncio con una prueba de caída con o sin funda, y CupertinoLab no va a recomendar una marca sin ese dato. Una funda puede ser prudente. No es una prueba.",
          "Cuando existan ensayos de laboratorio ajenos a Apple, tendrán que decir unidad de venta o de demostración, altura, superficie y si el teléfono iba abierto. Hasta entonces, la respuesta honesta es que no se sabe.",
        ],
      },
    ],
    unknowns: [
      "Cualquier resultado de caída.",
      "Precio de reparar la pantalla interior, la exterior o la bisagra.",
      "Cuánto sobresale el módulo de cámaras.",
    ],
    decision:
      "No compres el Duo contando con que el titanio anula una caída. Compra sabiendo qué cara lleva cristal y cuál no, y trata la pantalla abierta como la pieza menos documentada frente a un golpe.",
    faq: [
      {
        q: "¿Ceramic Shield 2 está en las dos pantallas?",
        a: "No. Apple lo sitúa en la parte delantera, la exterior. La interior lleva otro revestimiento. La trasera lleva Ceramic Shield, sin el «2».",
      },
      {
        q: "¿Hay drop test de Apple?",
        a: "No en la ficha ni en la nota de prensa consultadas el 30 de septiembre de 2026.",
      },
    ],
    related: ["pliegue-pantalla", "resistente-agua-ip68", "funciones-trucos"],
  },
  {
    slug: "precio-espana",
    title: "¿Cuánto cuesta el iPhone Duo?",
    dek: "Precios de la Apple Store española el 30 de septiembre de 2026. Sin descuentos inventados.",
    directAnswer:
      "En apple.com/es, el 30 de septiembre de 2026, el iPhone Duo parte de 2.339 € con 256 GB. 512 GB cuesta 2.589 €, 1 TB cuesta 3.089 € y 2 TB cuesta 3.839 €. Blanco estelar y cielo nocturno salen al mismo precio. La reserva abre el 16 de octubre a las 14:00 CEST y la venta, el 23.",
    cluster: "transaccional",
    category: "duo",
    tags: ["precio", "España", "Apple Store"],
    minutes: 6,
    updated,
    confidence: "ficha",
    coverAlt:
      "Interior de una Apple Store. Foto de midnightbreakfastcafe, CC BY 2.0. No muestra el precio del iPhone Duo.",
    metaTitle: "Precio del iPhone Duo en España",
    metaDescription:
      "Precios del iPhone Duo en la Apple Store española a 30 de septiembre de 2026: 256 GB, 512 GB, 1 TB y 2 TB, colores y fechas.",
    sources: [appleBuy, appleNews, appleDuo],
    table: {
      caption: "Apple Store España, 30 de septiembre de 2026",
      headers: ["Capacidad", "Precio", "Colores a ese precio"],
      rows: [
        ["256 GB", "2.339 €", "Blanco estelar y cielo nocturno"],
        ["512 GB", "2.589 €", "Blanco estelar y cielo nocturno"],
        ["1 TB", "3.089 €", "Blanco estelar y cielo nocturno"],
        ["2 TB", "3.839 €", "Blanco estelar y cielo nocturno"],
      ],
    },
    sections: [
      {
        heading: "El precio de entrada y lo que sube",
        paragraphs: [
          consulted,
          "Los cuatro precios son los que muestra la página de compra de Apple en España. El color no cambia la cifra. De 256 GB a 512 GB hay 250 €. De 512 GB a 1 TB hay 500 €. De 1 TB a 2 TB hay 750 €. Decir que una capacidad «compensa» exigiría saber cuánto ocupan tus fotos y apps. Eso no está en la ficha, así que aquí no hay una capacidad ganadora.",
          "La nota de prensa también ofrece 97,46 € al mes durante 24 meses para el modelo de entrada. Es una fórmula de pago publicada por Apple, no un descuento sobre los 2.339 €. No hay en esta consulta una rebaja oficial por operador.",
        ],
      },
      {
        heading: "Cuándo se puede comprar",
        paragraphs: [
          "La reserva en España empieza el viernes 16 de octubre de 2026 a las 14:00, hora peninsular. La disponibilidad anunciada es el viernes 23 de octubre, en el grupo de más de 70 países que incluye España. Otro grupo de 28 países espera al 30 de octubre. Hasta el 23 no hay un teléfono vendido al público que se pueda devolver porque «no era lo que parecía».",
          "El sistema anunciado para el estreno es iOS 27.1. Las funciones de pantalla partida están resumidas en [[funciones-trucos|15 funciones]]. La autonomía de laboratorio, en [[cuanto-dura-bateria|cuánto dura la batería]].",
        ],
        subsections: [
          {
            heading: "Qué no entra en ese precio",
            paragraphs: [
              "El adaptador de corriente no va en la caja de los iPhone recientes y Apple vende aparte el de 60 W que usa para la cifra de carga rápida. Una funda, el Apple Pencil (USB-C), que la compañía sitúa a finales de año, y el seguro tampoco están dentro de los 2.339 €. No sumo aquí precios de accesorios que no he vuelto a consultar en la misma página.",
            ],
          },
        ],
      },
    ],
    unknowns: [
      "Precio el día de la reserva, si Apple lo cambia.",
      "Valor de entrega de un iPhone usado: depende del modelo y del estado, y Apple lo calcula en su página de recompra.",
      "Precio de reparación de la pantalla plegable.",
    ],
    decision:
      "Si el presupuesto parte de lo que ya cuesta un [[iphone-duo-vs-iphone-18-pro-max|iPhone 18 Pro Max]], la diferencia de entrada publicada es grande: el Max sale desde 1.619 € y el Duo desde 2.339 €. El resto es formato, no una ganga escondida en los 2 TB.",
    faq: [
      {
        q: "¿El color cielo nocturno es más caro?",
        a: "No en la Apple Store española consultada el 30 de septiembre de 2026. Los dos colores comparten precio en cada capacidad.",
      },
      {
        q: "¿Hay un modelo de 128 GB?",
        a: "No. La capacidad más baja publicada es 256 GB.",
      },
    ],
    related: ["iphone-duo-vs-iphone-18-pro-max", "cuanto-dura-bateria", "funciones-trucos"],
  },
  {
    slug: "iphone-duo-vs-iphone-18-pro-max",
    title: "iPhone Duo vs iPhone 18 Pro Max",
    dek: "Misma generación de chip, otro formato. La tabla usa solo lo que Apple ha publicado.",
    directAnswer:
      "Los dos llevan chip A20 Pro, IP68 e iOS 27. El Duo abre una pantalla de 7,6 pulgadas y parte de 2.339 €; el 18 Pro Max es un teléfono plano de 6,9 pulgadas y parte de 1.619 €. No hay un ganador: cambia lo que puedes hacer con el formato y lo que Apple ha medido en batería de laboratorio.",
    cluster: "informativo",
    category: "duo",
    tags: ["comparativa", "Pro Max", "precio"],
    minutes: 8,
    updated,
    confidence: "ficha",
    coverAlt:
      "iPhone de frente. No es una foto oficial de la comparativa: el iPhone 18 Pro Max se describe en la ficha, no en la imagen.",
    metaTitle: "iPhone Duo vs iPhone 18 Pro Max",
    metaDescription:
      "Comparativa con fichas de Apple: pantallas, batería de laboratorio, cámaras, resistencia, SIM y precio de entrada en España.",
    sources: [appleSpecs, applePro, appleProNews, appleBuy, appleNews],
    table: {
      caption: "Fichas de Apple, consulta del 30 de septiembre de 2026",
      headers: ["", "iPhone Duo", "iPhone 18 Pro Max"],
      rows: [
        ["Pantalla de producto", "7,6 pulgadas interior y 5,4 exterior", "6,9 pulgadas"],
        ["Diagonal rectangular", "7,58 y 5,36 pulgadas", "6,86 pulgadas"],
        ["Resolución publicada", "No figura en la ficha consultada", "2.868 × 1.320 a 460 p/p"],
        ["ProMotion", "Hasta 120 Hz en las dos", "Hasta 120 Hz"],
        ["Chip", "A20 Pro", "A20 Pro"],
        ["Vídeo de laboratorio", "44 h exterior, 31 h interior", "43 h"],
        ["Uso normal de laboratorio", "Hasta 24 h", "Hasta 29 h"],
        ["Agua y polvo", "IP68, 6 m, 30 min", "IP68, 6 m, 30 min"],
        ["Material del marco", "Titanio de grado 5", "Aluminio, unibody"],
        ["SIM", "Solo eSIM", "Nano-SIM y eSIM"],
        ["Precio de entrada en España", "2.339 €, 256 GB", "Desde 1.619 €"],
        ["A la venta", "23 de octubre de 2026", "18 de septiembre de 2026"],
      ],
    },
    sections: [
      {
        heading: "Formato, no un podio",
        paragraphs: [
          "El Duo es un teléfono que se abre. Cerrado, Apple lo compara con un pasaporte y dice que la pantalla exterior conserva el 90 % de la superficie de visión del iPhone 18 Pro, no del Max. Abierto, lo llama el iPhone más fino que ha hecho y dice que la interior es un 50 % mayor que la del 18 Pro Max. No publica en la ficha consultada los milímetros ni el peso del Duo, así que esa casilla se queda vacía a propósito.",
          "El Max es un bloque. Su pantalla de producto es de 6,9 pulgadas, 6,86 si se mide el rectángulo, con 2.868 por 1.320 píxeles. No se dobla, no tiene cara exterior distinta y no ofrece Split View. Quien quiera dos apps a la vez tiene que irse a las [[funciones-trucos|funciones del Duo]].",
        ],
      },
      {
        heading: "Cámaras, batería y resistencia",
        paragraphs: [
          "El Duo lleva un sistema dual: principal Fusion de 48 Mpx con un 2x de calidad óptica a 52 mm, y ultra gran angular Fusion de 48 Mpx. Apple dice que ese ultra gran angular es el mismo del iPhone 18 Pro. El Max, en su ficha, añade un teleobjetivo Fusion de 48 Mpx y un 8x de 12 Mpx dentro del sistema Pro. No es el mismo alcance. No hay todavía una comparativa de fotos de unidades de venta del Duo.",
          "En batería, las horas son de laboratorio y no se pueden mezclar como si fueran el mismo día. El Max declara hasta 29 horas de uso normal, 43 de vídeo y 38 de streaming. El Duo declara 24 de uso normal, 44 de vídeo en la cara exterior y 31 en la interior. El detalle y las condiciones están en [[cuanto-dura-bateria|cuánto dura la batería]].",
          "Los dos presumen de IP68 a 6 metros y 30 minutos. El Max protege su única pantalla con Ceramic Shield 2 y la trasera con Ceramic Shield, en un cuerpo de aluminio. El Duo reparte Ceramic Shield 2, Ceramic Shield y un panel interior que no va bajo ese cristal. Ninguna ficha incluye una prueba de caída.",
        ],
        subsections: [
          {
            heading: "Precio y SIM",
            paragraphs: [
              "En España, el Duo de 256 GB está a [[precio-espana|2.339 €]]. Apple anunció el 18 Pro Max desde 1.619 €. La diferencia de entrada son 720 € a estos precios publicados, antes de capacidad, entrega o seguro. El Duo es solo eSIM en todo el mundo. La ficha del 18 Pro habla de nano-SIM y eSIM, y de doble eSIM. Si tu operador solo te da una tarjeta de plástico, el Max encaja y el Duo no, salvo que activen una eSIM.",
            ],
          },
        ],
      },
      {
        heading: "Para qué uso pesa cada uno",
        paragraphs: [
          "El Duo pesa si de verdad vas a leer, ver o poner dos ventanas en la pantalla grande, y aceptas el precio, la espera hasta el 23 de octubre y la ausencia de un teleobjetivo largo. El Max pesa si quieres el teléfono plano que ya está en tienda, más horas de uso normal en la ficha y el zoom que el sistema Pro publica.",
          "No hay ganador general. Hay dos productos y una diferencia de formato que la tabla no puede convertir en una nota.",
        ],
      },
    ],
    unknowns: [
      "Peso y grosor en milímetros del Duo.",
      "Fotos comparadas de unidades de venta.",
      "Precio de cada capacidad del Max en la misma consulta que la tabla del Duo.",
    ],
    decision:
      "Elige el Duo por la pantalla que se abre y las dos apps. Elige el Max si el zoom largo, la nano-SIM o los 720 € de diferencia de entrada te importan más que plegarlo.",
    faq: [
      {
        q: "¿Llevan el mismo chip?",
        a: "Apple pone el A20 Pro en los dos, con CPU de 6 núcleos y GPU de 7 núcleos en la ficha del Duo. El Max también figura con A20 Pro. El formato y las cámaras no son iguales por eso.",
      },
      {
        q: "¿Y contra el Galaxy Z Fold8?",
        a: "Esa tabla está aparte: [[iphone-duo-vs-galaxy-z-fold8|Duo contra Fold8]].",
      },
    ],
    related: ["precio-espana", "cuanto-dura-bateria", "iphone-duo-vs-galaxy-z-fold8"],
  },
  {
    slug: "iphone-duo-vs-galaxy-z-fold8",
    title: "iPhone Duo vs Samsung Galaxy Z Fold8",
    dek: "Dos plegables de 7,6 pulgadas. Solo entran cifras que Apple o Samsung han publicado.",
    directAnswer:
      "Los dos abren una pantalla de unas 7,6 pulgadas y llevan la exterior cerca de las 5,4 o 5,5. A partir de ahí las fichas no se pueden fusionar: el Duo es iOS, solo eSIM e IP68; el Fold8 es Android, pesa 201 g, mide 4,5 mm abierto y Samsung lo anuncia con IP48. No hay ganador.",
    cluster: "informativo",
    category: "duo",
    tags: ["Fold8", "comparativa", "plegable"],
    minutes: 8,
    updated,
    confidence: "ficha",
    coverAlt:
      "Galaxy Fold7 abierto en una tienda. Foto de Matabalt, CC0. No es el Fold8 ni el iPhone Duo.",
    metaTitle: "iPhone Duo vs Galaxy Z Fold8",
    metaDescription:
      "Comparativa solo con fichas de Apple y Samsung: pantallas, peso publicado, agua, batería, sistema y precio cuando existe.",
    sources: [appleSpecs, appleNews, appleBuy, samsungSpecs, samsungNews],
    table: {
      caption: "Solo especificaciones publicadas por Apple o Samsung",
      headers: ["", "iPhone Duo", "Galaxy Z Fold8"],
      rows: [
        ["Pantalla interior", "7,6 pulgadas (7,58 en rectángulo)", "7,6 pulgadas"],
        ["Resolución interior", "No figura en la ficha de Apple", "1.848 × 2.448"],
        ["Pantalla exterior", "5,4 pulgadas (5,36 en rectángulo)", "5,5 en rectángulo, 5,4 con esquinas"],
        ["Resolución exterior", "No figura en la ficha de Apple", "1.972 × 1.248"],
        ["Abierto", "Apple no publica los milímetros", "4,5 mm de grosor"],
        ["Cerrado", "Apple no publica los milímetros", "9,7 mm de grosor"],
        ["Peso", "No figura en la ficha consultada", "201 g"],
        ["Agua y polvo", "IP68, 6 m, 30 min", "IP48 en la nota de Samsung Alemania"],
        ["Batería publicada", "Horas de laboratorio, sin mAh", "4.800 mAh típicos, 26 h de vídeo"],
        ["Sistema", "iOS 27.1 al estreno", "Android"],
        ["Precio de entrada citado", "2.339 € en España", "1.999 € PVP en Alemania; no es el precio español"],
      ],
    },
    sections: [
      {
        heading: "Hardware que sí se puede poner al lado",
        paragraphs: [
          "Las diagonales de producto se parecen: interior de 7,6 pulgadas en los dos, exterior de 5,4 en el lenguaje de Apple y de 5,5 o 5,4 en el de Samsung, según se midan las esquinas. Samsung publica resolución. Apple, en la ficha española del Duo consultada hoy, no. Inventarla para rellenar la tabla sería un error.",
          "En cuerpo, Samsung sí da cifras: 201 gramos, 4,5 mm abierto y 9,7 mm cerrado, en la ficha del Reino Unido. Apple dice que el Duo abierto es el iPhone más fino que ha fabricado y que cerrado se parece a un pasaporte. No da el peso ni el grosor en esa ficha. Quien escriba 254 g o 5,2 mm sin una página de Apple delante está usando otra fuente. Aquí no entra.",
        ],
        subsections: [
          {
            heading: "Agua, batería y ciclos",
            paragraphs: [
              "IP68 e IP48 no son el mismo ensayo. El 6 del Duo es el nivel alto de polvo; el 4 del Fold8, en la nota alemana de Samsung, no lo es. El 8 del Duo llega a 6 metros; el 8 del Fold8, en esa misma nota, se concreta en 1,5 metros y 30 minutos de agua dulce. No son intercambiables.",
              "Apple no publica los miliamperios del Duo. Publica horas de laboratorio, separadas por pantalla, en [[cuanto-dura-bateria|la ficha de batería]]. Samsung publica 4.800 mAh típicos, 4.660 de capacidad nominal y hasta 26 horas de reproducción de vídeo, además de un mínimo de 1.200 ciclos de batería en la ficha británica. Esos 1.200 son ciclos de carga, no de pliegue. Los ciclos de la bisagra del Duo [[cuantas-veces-se-puede-doblar-iphone-duo|no están publicados]]. La ficha de Samsung consultada tampoco se usa aquí para atribuirle un número de pliegues.",
            ],
          },
        ],
      },
      {
        heading: "El software no se compara con una fila",
        paragraphs: [
          "El Duo abre en iOS 27.1, con Split View, dos ventanas de la misma app y pares de apps guardados. Es el sistema del iPhone, no un escritorio. El detalle está en [[funciones-trucos|las 15 funciones]]. El Fold8 abre en Android, con el multitarea que Samsung construye desde hace generaciones sobre ese sistema. Decir que uno «es mejor para trabajar» sin usar los dos a diario sería una preferencia, no un dato.",
          "El Duo es solo eSIM, con dos líneas activas. No meto aquí el tipo de SIM del Fold8 porque no quedó explícito en las páginas de Samsung usadas para el resto de la tabla, y prefiero dejar el hueco.",
        ],
      },
      {
        heading: "Precio, con el país escrito",
        paragraphs: [
          "El Duo, en la Apple Store de España el 30 de septiembre de 2026, empieza en [[precio-espana|2.339 €]]. Samsung, al presentar la serie el 22 de julio de 2026, puso el Fold8 en 1.999 € de PVP en Alemania. En Italia, la cifra anunciada fue otra. No son el precio español. Hasta no leerlo en samsung.com/es, esta página no lo inventa.",
          "Contra el teléfono plano de Apple, la tabla está en [[iphone-duo-vs-iphone-18-pro-max|Duo contra 18 Pro Max]].",
        ],
      },
    ],
    unknowns: [
      "Peso y milímetros oficiales del Duo.",
      "Precio actual del Fold8 en España.",
      "Resolución de las pantallas del Duo.",
      "Una prueba independiente de los dos, hecha con unidades de venta.",
    ],
    decision:
      "Si ya vives en iPhone y quieres la pantalla partida de Apple, el Duo es el que encaja en ese sistema. Si quieres los milímetros, el peso y el precio de lanzamiento alemán publicados, el Fold8 es el que hoy los tiene escritos. Ninguna de las dos frases corona a un teléfono.",
    faq: [
      {
        q: "¿Los dos tienen IP68?",
        a: "No. El Duo, sí, a 6 metros y 30 minutos. El Fold8, en la nota de Samsung en Alemania, figura como IP48.",
      },
      {
        q: "¿Samsung ha publicado los ciclos de la bisagra en la ficha usada aquí?",
        a: "No en las especificaciones del Reino Unido ni en la nota alemana usadas para esta tabla. No copio un número de un medio.",
      },
    ],
    related: ["iphone-duo-vs-iphone-18-pro-max", "cuantas-veces-se-puede-doblar-iphone-duo", "funciones-trucos"],
  },
  {
    slug: "cuanto-dura-bateria",
    title: "¿Cuánto dura la batería del iPhone Duo?",
    dek: "Apple separa uso normal, vídeo y streaming, y además separa la pantalla exterior de la interior. Son ensayos, no tu martes.",
    directAnswer:
      "En la ficha, el uso normal llega hasta 24 horas. El vídeo local, hasta 44 horas en la pantalla exterior y 31 en la interior. El streaming, hasta 37 y 26 horas en esas mismas caras. La carga por cable llega al 50 % en unos 20 minutos con un adaptador de 60 W o más. Nada de eso es una promesa para todos los días.",
    cluster: "informativo",
    category: "duo",
    tags: ["batería", "carga", "MagSafe"],
    minutes: 7,
    updated,
    confidence: "ficha",
    coverAlt:
      "Cable USB-C junto a un puerto de carga. Foto de Wikideas1, CC0. No mide la batería del iPhone Duo.",
    metaTitle: "Batería del iPhone Duo: cifras de Apple",
    metaDescription:
      "Horas oficiales del iPhone Duo en uso, vídeo y streaming, en cada pantalla, más la carga por cable y MagSafe. No es autonomía real.",
    sources: [appleSpecs, appleNews, appleDuo],
    table: {
      caption: "Horas de laboratorio publicadas por Apple",
      headers: ["Prueba", "Pantalla exterior", "Pantalla interior"],
      rows: [
        ["Uso normal", "Hasta 24 h, las dos en conjunto", "Hasta 24 h, las dos en conjunto"],
        ["Vídeo en local", "Hasta 44 h", "Hasta 31 h"],
        ["Vídeo en streaming", "Hasta 37 h", "Hasta 26 h"],
      ],
    },
    sections: [
      {
        heading: "Autonomía oficial, con el método al lado",
        paragraphs: [
          "Apple no publica los miliamperios. Publica horas y una arquitectura: dos baterías de iones de litio, una a cada lado, que el sistema reequilibra para que se comporten como una sola. La nota de prensa llama a las 24 horas un uso equitativo de las dos pantallas.",
          "La nota de la ficha española dice que las pruebas se hicieron en septiembre de 2025 con unidades de preproducción y software previo al lanzamiento. El vídeo y el streaming iban en bucle, al 50 % de brillo, por wifi o datos, hasta que el teléfono se apagó. El uso normal fue navegación web en las mismas condiciones. La batería tiene ciclos limitados y el resultado cambia con la configuración. Esa frase es de Apple, y es la diferencia entre una tabla y un día concreto.",
        ],
        subsections: [
          {
            heading: "Por qué la pantalla grande dura menos en la tabla",
            paragraphs: [
              "31 horas de vídeo dentro y 44 fuera no significan que la batería cambie. Cambia la superficie encendida. Lo mismo con el streaming: 26 dentro y 37 fuera. Si vas a ver la serie abierto, la cifra que te corresponde en la ficha es la menor. Si la ves cerrado, la mayor. Mezclarlas en «unas 40 horas» borra justo el dato útil.",
            ],
          },
        ],
      },
      {
        heading: "Carga: cable, MagSafe y lo que no es autonomía real",
        paragraphs: [
          "Por cable, hasta el 50 % en unos 20 minutos con un adaptador de 60 W o superior y un cable USB-C. El adaptador se vende aparte. Con MagSafe o Qi2 de hasta 25 W, y un adaptador de 35 W o más, Apple estima el 50 % en unos 30 minutos. También vende aparte ese cargador. La propia nota dice que la carga real depende del entorno y del uso.",
          "Autonomía real sería el mismo teléfono, ya a la venta, en manos que no son el laboratorio de Apple: cobertura, brillo automático, juegos, calor. A 30 de septiembre de 2026 esas pruebas no pueden existir sobre unidades de venta, porque la venta empieza el 23 de octubre. Una impresión de una demo no llena ese hueco.",
        ],
      },
      {
        heading: "Cómo leerlo al lado del precio",
        paragraphs: [
          "Pagas [[precio-espana|desde 2.339 €]] por un teléfono cuya ficha de uso normal dice 24 horas y cuya ficha de vídeo depende de qué pantalla enciendas. El [[iphone-duo-vs-iphone-18-pro-max|18 Pro Max]] declara 29 horas de uso normal y 43 de vídeo en su única pantalla, con otro método de la misma casa, no con una semana tuya. Las [[funciones-trucos|dos apps a la vez]] gastan pantalla interior: si ese es tu uso, no cites las 44 horas.",
        ],
      },
    ],
    unknowns: [
      "Capacidad en mAh.",
      "Horas con brillo automático, 5G débil o las dos apps abiertas.",
      "Cuántos ciclos de carga conserva el 80 % de capacidad.",
    ],
    decision:
      "Usa la tabla para comparar pantallas, no para prometerte un día. Si tu jornada es la pantalla grande, parte de 31 horas de vídeo de laboratorio y espera a las pruebas de octubre antes de fiarte de más.",
    faq: [
      {
        q: "¿Las 24 horas incluyen las dos pantallas?",
        a: "Apple llama a esa prueba uso equitativo de las dos. No es 24 horas solo en la grande, ni 24 solo en la pequeña.",
      },
      {
        q: "¿La carga rápida llega al 100 % en 20 minutos?",
        a: "No. La cifra publicada es un 50 % en unos 20 minutos por cable, en la estimación de Apple.",
      },
    ],
    related: ["precio-espana", "funciones-trucos", "iphone-duo-vs-iphone-18-pro-max"],
  },
  {
    slug: "sim-fisica-esim",
    title: "¿El iPhone Duo tiene SIM física?",
    dek: "No. En todo el mundo es solo eSIM: dos activas y sitio para ocho o más.",
    directAnswer:
      "No tiene bandeja de SIM. Apple dice que el iPhone Duo funciona solo con eSIM en todo el mundo, con dos eSIM activas a la vez y capacidad para ocho o más guardadas. En España nombra, entre otros, a Movistar, MasOrange y Vodafone. Que tu tarifa concreta se pueda pasar es algo que tienes que confirmar con tu operador.",
    cluster: "informativo",
    category: "duo",
    tags: ["eSIM", "SIM", "operador"],
    minutes: 6,
    updated,
    confidence: "ficha",
    coverAlt:
      "Nano-SIM de cerca. Foto de Subhrajyoti07, CC BY-SA 4.0. El iPhone Duo no usa esta tarjeta.",
    metaTitle: "¿El iPhone Duo tiene SIM física o solo eSIM?",
    metaDescription:
      "El iPhone Duo no admite SIM física. Dos eSIM activas, ocho o más guardadas, y qué debe mirar quien viene de una tarjeta.",
    sources: [appleSpecs, appleNews, appleDuo],
    sections: [
      {
        heading: "Qué es, en este modelo",
        paragraphs: [
          "La eSIM es un plan de móvil descargado en el teléfono, sin tarjeta que insertar. En la ficha, el Duo admite dos activas al mismo tiempo y puede guardar ocho o más. Apple lo presenta como forma de ahorrar sitio interno para la batería y de cambiar de plan sin abrir el teléfono.",
          "La nota de prensa añade que el estándar, según Apple, llega a más de 500 operadores, y cita en España a Movistar, MasOrange y Vodafone, entre otros. Citar al operador no es lo mismo que garantizar cada tarifa, cada prepago o cada empresa. Si el tuyo no está en esa frase, no des por hecho que falte: compruébalo. Si está, comprueba igual tu línea, no solo la marca.",
        ],
        subsections: [
          {
            heading: "Dos líneas no son ocho conversaciones",
            paragraphs: [
              "Ocho o más es archivo. Dos es lo que puede estar conectado a la vez, según la ficha. Para un número personal y otro de trabajo basta con esas dos, si los dos operadores entregan eSIM. Un tercer número seguiría guardado, no activo, hasta que cambies.",
            ],
          },
        ],
      },
      {
        heading: "Qué significa si vienes de una SIM física",
        paragraphs: [
          "No vas a pasar la tarjeta de plástico al Duo. Hay que convertir el plan a eSIM o pedir una eSIM nueva. Entre iPhone, Apple describe la transferencia como parte del sistema, y con iOS 27 habla de iPhone Handoff para pasar de un iPhone a otro con el mismo número, en operadores compatibles. «Compatible» vuelve a ser la palabra que te toca verificar. Esta página no incluye una guía de configuración paso a paso: no hemos activado una línea de venta, porque el teléfono no se entrega hasta el 23 de octubre.",
          "Si viajas y tu destino solo vende tarjetas físicas en el aeropuerto, el Duo no tiene dónde meterlas. Ese límite es estructural, no un ajuste. El [[precio-espana|precio]] no cambia por llevar eSIM. Las [[funciones-trucos|funciones de pantalla]] tampoco dependen de la bandeja.",
        ],
      },
    ],
    unknowns: [
      "Si tu tarifa concreta, no solo tu operador, entrega eSIM hoy.",
      "El proceso exacto de cada compañía el día de la reserva.",
      "Cobertura de Handoff en cada operador español más allá de los nombres que Apple cita.",
    ],
    decision:
      "Antes de reservar, pide a tu operador una eSIM de prueba o una confirmación por escrito de tu línea. Si la respuesta es una tarjeta de plástico, el Duo no te sirve hasta que eso cambie.",
    faq: [
      {
        q: "¿Hay una versión con SIM física en algún país?",
        a: "Apple dice que solo eSIM, en todo el mundo. La ficha no describe una bandeja.",
      },
      {
        q: "¿Puedo tener el número del trabajo y el personal?",
        a: "Sí, si los dos planes caben en eSIM: la ficha permite dos activas a la vez.",
      },
    ],
    related: ["precio-espana", "funciones-trucos", "iphone-duo-vs-iphone-18-pro-max"],
  },
  {
    slug: "funciones-trucos",
    title: "15 funciones del iPhone Duo que debes conocer",
    dek: "Quince cosas que Apple ya ha descrito. Ninguna es un truco de un vídeo ni una función supuesta.",
    directAnswer:
      "Lo propio del Duo, según Apple, es la pantalla que se abre: Split View, dos ventanas de la misma app, pares de apps guardados y una vista previa de la cámara en la cara exterior. El resto de esta lista son datos de ficha —ProMotion, eSIM, Pencil anunciado— no atajos escondidos.",
    cluster: "informativo",
    category: "duo",
    tags: ["Split View", "funciones", "iOS"],
    minutes: 8,
    updated,
    confidence: "ficha",
    coverAlt:
      "Iconos en la pantalla abierta de un Galaxy Fold7. Foto de Matabalt, CC0. Ilustra la ficha de funciones, no es el iPhone Duo.",
    metaTitle: "15 funciones del iPhone Duo",
    metaDescription:
      "Split View, pares de apps, Duo Preview, Pencil anunciado y el resto de funciones que Apple ya ha documentado en el iPhone Duo.",
    sources: [appleNews, appleSpecs, appleDuo],
    sections: [
      {
        heading: "Las que solo tienen sentido abierto o cerrado",
        paragraphs: [
          "Salen de la nota de prensa y de la ficha. Si Apple no las ha escrito, no están.",
        ],
        subsections: [
          {
            heading: "1. Split View",
            paragraphs: [
              "En la pantalla interior puedes tener dos apps a la vez. Es la diferencia práctica con un iPhone de una sola cara. No es un escritorio con ventanas libres: son dos.",
            ],
          },
          {
            heading: "2. Dos ventanas de la misma app",
            paragraphs: [
              "Apple pone Safari como ejemplo: dos ventanas del navegador, no solo dos apps distintas. Sirve para comparar una ficha y un mapa, o un correo y un documento, sin salir de la app.",
            ],
          },
          {
            heading: "3. Pares de apps",
            paragraphs: [
              "Puedes guardar una combinación y volver a ella. Útil si cada mañana abres lo mismo: el calendario al lado del correo, por ejemplo. Apple no publica un límite de pares guardados.",
            ],
          },
          {
            heading: "4. Cambiar de app sin cerrar el formato",
            paragraphs: [
              "La nota describe pasar de una app a otra en esa pantalla grande. El uso es el obvio: no tratar la cara interior como un iPhone estirado, sino como un sitio donde dos tareas caben juntas.",
            ],
          },
          {
            heading: "5. La misma proporción en las dos caras",
            paragraphs: [
              "Apple dice que la relación de aspecto coincide, así el contenido ocupa las dos pantallas de forma parecida al abrir o cerrar. No promete que cada app de terceros recoloque sola sus botones.",
            ],
          },
          {
            heading: "6. Duo Preview",
            paragraphs: [
              "Al hacer una foto, la pantalla exterior puede mostrar una vista en directo para que otra persona se coloque, mire el encuadre o gire el teléfono. Es una función de cámara anunciada, no un modo de vídeo que hayamos medido.",
            ],
          },
          {
            heading: "7. Usar el teléfono cerrado",
            paragraphs: [
              "La exterior mide 5,4 pulgadas en el lenguaje de producto. Sirve para lo que harías con un iPhone pequeño sin abrir: mirar un aviso, contestar, disparar. Apple dice que mantiene el 90 % de la superficie de visión del iPhone 18 Pro.",
            ],
          },
          {
            heading: "8. La interior de 7,6 pulgadas",
            paragraphs: [
              "Es la cara de leer, ver y partir en dos. En rectángulo, la ficha habla de 7,58 pulgadas. Apple la compara como un 50 % mayor que la del 18 Pro Max. El [[pliegue-pantalla|pliegue]] de esa cara se trata aparte.",
            ],
          },
        ],
      },
      {
        heading: "Las que están en la ficha, no en un vídeo",
        paragraphs: ["También son oficiales. No por estar aquí se vuelven exclusivas de un truco."],
        subsections: [
          {
            heading: "9. ProMotion hasta 120 Hz",
            paragraphs: [
              "En las dos pantallas, con frecuencia adaptativa. El uso práctico es el desplazamiento y la reproducción más fluidos cuando el sistema sube la frecuencia, y menos gasto cuando la baja. Apple no publica el mínimo de hercios.",
            ],
          },
          {
            heading: "10. Pantalla siempre activa",
            paragraphs: [
              "Las dos pueden quedarse encendidas a bajo brillo. Conviene no sumar eso a las horas de vídeo como si no contara: la ficha de [[cuanto-dura-bateria|batería]] no aísla este modo.",
            ],
          },
          {
            heading: "11. Apple Pencil (USB-C), anunciado",
            paragraphs: [
              "Apple dice que a finales de 2026 el Pencil con USB-C servirá para notas, bocetos y revisar documentos en cualquiera de las dos pantallas. No dice que vaya en la caja el 23 de octubre. Hasta esa compatibilidad, no es una función que puedas usar el día de la entrega.",
            ],
          },
          {
            heading: "12. Acabado nanotexturizado",
            paragraphs: [
              "En la interior, para bajar reflejos y hacer menos visible la marca del pliegue. Leer a la luz de una ventana es el uso que Apple está describiendo. No elimina la marca.",
            ],
          },
          {
            heading: "13. Dos baterías leídas como una",
            paragraphs: [
              "Una a cada lado, reequilibradas por software. No tienes que elegir cuál gastas. Las horas distintas de la tabla dependen de qué pantalla enciendes, no de elegir una celda.",
            ],
          },
          {
            heading: "14. Cámara dual de 48 Mpx y un 2x",
            paragraphs: [
              "Principal de 26 mm y ƒ/1,6, con un 2x de calidad óptica a 52 mm salido de ese sensor, más ultra gran angular de 13 mm. No es el teleobjetivo largo del 18 Pro Max. Duo Preview, en el punto 6, es la función de encuadre propia del formato.",
            ],
          },
          {
            heading: "15. Solo eSIM, con dos líneas activas",
            paragraphs: [
              "Sin bandeja, en todo el mundo, y con sitio para ocho o más planes guardados. El detalle y la advertencia del operador están en [[sim-fisica-esim|SIM física]].",
            ],
          },
        ],
      },
      {
        heading: "Qué cambia realmente frente a un iPhone tradicional",
        paragraphs: [
          "Lo que no existe en un 18 Pro Max es abrir el teléfono, poner dos apps o dos ventanas, guardar ese par y enseñar el encuadre por la cara de fuera. El chip A20 Pro, el IP68 y ProMotion no son la novedad: están en la otra ficha. El precio de entrar en ese formato, en España, está en [[precio-espana|2.339 €]]. Si ninguna de las cuatro primeras funciones te hace falta cada semana, el formato no te está resolviendo un problema.",
          "Para cruzarlo con el plano y con el otro plegable: [[iphone-duo-vs-iphone-18-pro-max|Duo contra Pro Max]] y [[iphone-duo-vs-galaxy-z-fold8|Duo contra Fold8]]. Para lo que Apple no ha cifrado, la bisagra sigue en [[cuantas-veces-se-puede-doblar-iphone-duo|cuántas veces se dobla]].",
        ],
      },
    ],
    unknowns: [
      "Cuántos pares de apps se pueden guardar.",
      "Si el Pencil estará a la venta el mismo 23 de octubre o más tarde, dentro de «finales de año».",
      "Cómo recoloca cada app de terceros el Split View.",
    ],
    decision:
      "Aprende las cuatro primeras. El resto es ficha de iPhone aplicada a dos pantallas. Si esas cuatro no cambian tu día, el Duo es un iPhone más caro que se dobla, no una herramienta nueva.",
    faq: [
      {
        q: "¿Hay un modo escritorio?",
        a: "Apple no lo describe. Describe dos apps, dos ventanas y pares guardados.",
      },
      {
        q: "¿El Pencil viene en la caja?",
        a: "No está anunciado como incluido. La compatibilidad con el modelo USB-C se sitúa a finales de 2026.",
      },
    ],
    related: ["cuantas-veces-se-puede-doblar-iphone-duo", "precio-espana", "pliegue-pantalla"],
  },
];
