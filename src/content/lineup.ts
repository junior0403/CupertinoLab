import type { Article } from "@/content/articles";

const updated = "29 sep 2026";

export const lineup: Article[] = [
  {
    slug: "otono-2026",
    title: "Septiembre 2026: qué está en tienda y qué no",
    dek: "El 18 Pro, los AirPods 5 y el Watch ya se venden. El Duo no. Esta es la mesa, no una ficha de un solo producto.",
    directAnswer:
      "Desde el 18 de septiembre están en tienda el iPhone 18 Pro (desde 1.199 dólares), el 18 Pro Max (desde 1.299), los AirPods 5 (129 o 149) y el Apple Watch Series 12 (desde 399) y Ultra 4 (desde 799). El iPhone Duo espera al 23 de octubre.",
    cluster: "pilar",
    category: "iphone",
    tags: ["evento", "gama", "septiembre"],
    minutes: 6,
    updated,
    confidence: "ficha",
    table: {
      caption: "Precios de entrada en EE. UU., sin impuestos",
      headers: ["Producto", "Desde", "En tienda"],
      rows: [
        ["iPhone 18 Pro", "1.199 USD", "18 sep"],
        ["iPhone 18 Pro Max", "1.299 USD", "18 sep"],
        ["AirPods 5", "129 USD", "18 sep"],
        ["AirPods 5 con estuche de carga", "149 USD", "18 sep"],
        ["Watch Series 12", "399 USD", "18 sep"],
        ["Watch Ultra 4", "799 USD", "18 sep"],
        ["iPhone Duo", "1.999 USD", "23 oct"],
      ],
    },
    sections: [
      {
        heading: "Tres familias, no un lanzamiento",
        paragraphs: [
          "El 9 de septiembre Apple presentó el otoño entero: iPhone 18 Pro y Pro Max, AirPods 5, Watch Series 12, Watch Ultra 4 y el iPhone Duo. El 14 de septiembre llegó iOS 27. El 18, casi todo eso estaba en la tienda. El Duo no: preventa el 16 de octubre, venta el 23.",
          "CupertinoLab separa esas fechas a propósito. Un vídeo que mezcla «el iPhone nuevo» con el plegable está hablando de dos calendarios. Si ya puedes entrar en una Apple Store y tocarlo, está en la sección de [[precios-gama-iphone|iPhone]], de [[airpods-5|AirPods]] o de [[watch-2026|Watch]]. Si todavía no, está en el [[guia-completa|Duo]].",
        ],
      },
      {
        heading: "Qué quedó de la gama anterior",
        paragraphs: [
          "La lista de precios de EE. UU. que publicó la prensa mantiene iPhone 17e (desde 699 dólares en 256 GB), iPhone 17 (desde 899, con asterisco de activación con operador), iPhone Air (desde 1.099) e incluso un iPhone 16 de 128 GB a 799 con ese mismo asterisco. Los 17 Pro y 17 Pro Max salieron del catálogo.",
          "El Watch SE 3 sigue a la venta desde 249 dólares. No es un modelo de este evento. Si el presupuesto es ese, no hace falta esperar a la Series 12.",
        ],
      },
      {
        heading: "Cómo usar el sitio",
        paragraphs: [
          "Cada ficha responde una pregunta en el primer bloque. Debajo está la cifra con su condición —vídeo de laboratorio no es un día tuyo— y lo que nadie ha medido todavía. El Duo concentra casi todas las incógnitas de durabilidad porque no hay unidades de venta. El 18 Pro no tiene esa excusa: lleva días en la calle.",
          "No somos Apple ni una tienda. No hay enlaces de compra. Cuando los haya, irán marcados, y no van a adelantar una recomendación que la ficha no sostiene.",
        ],
      },
    ],
    unknowns: [
      "Precios fuera de EE. UU. que la Store local todavía no haya publicado.",
      "Pruebas independientes de autonomía del 18 Pro frente a la cifra de vídeo.",
    ],
    decision:
      "Si buscas un iPhone esta semana, elige entre el 18 Pro, el Pro Max y lo que sigue en gama. El Duo es otra compra, con otra fecha.",
    faq: [
      {
        q: "¿iOS 27 ya se puede instalar?",
        a: "Sí. Apple lo publicó el 14 de septiembre de 2026, gratis, también para modelos anteriores compatibles.",
      },
      {
        q: "¿El Duo sustituye al 18 Pro?",
        a: "No. Conviven. Uno está en tienda y el otro no sale hasta el 23 de octubre.",
      },
    ],
    related: ["precios-gama-iphone", "airpods-5", "watch-2026"],
  },
  {
    slug: "precios-gama-iphone",
    title: "Cuánto cuesta cada iPhone que Apple vende ahora",
    dek: "La tabla de septiembre en dólares. El asterisco es un descuento con operador, no el precio libre.",
    directAnswer:
      "El iPhone 18 Pro parte de 1.199 dólares y el Pro Max de 1.299, ambos ya en tienda. Por debajo siguen el Air (1.099), el 17 (899 con operador) y el 17e (699). El Duo, 1.999, no sale hasta el 23 de octubre.",
    cluster: "transaccional",
    category: "iphone",
    tags: ["precio", "gama", "iPhone 18"],
    minutes: 5,
    updated,
    confidence: "ficha",
    table: {
      caption: "EE. UU., septiembre 2026. El asterisco exige activación con operador",
      headers: ["Modelo", "Entrada", "Notas"],
      rows: [
        ["iPhone 17e", "699 USD", "256 GB. 512 GB: 899"],
        ["iPhone 16", "799 USD*", "128 GB"],
        ["iPhone 17", "899 USD*", "256 GB. 512 GB: 1.099*"],
        ["iPhone Air", "1.099 USD", "256 GB. Hasta 1 TB"],
        ["iPhone 18 Pro", "1.199 USD", "256 GB. Hasta 2 TB: 2.399"],
        ["iPhone 18 Pro Max", "1.299 USD", "256 GB. Hasta 2 TB: 2.499"],
        ["iPhone Duo", "1.999 USD", "Preventa 16 oct"],
      ],
    },
    sections: [
      {
        heading: "Los que ya puedes pagar",
        paragraphs: [
          "18 Pro y Pro Max abrieron preventa el 12 de septiembre y llegaron a tienda el 18. El salto de almacenamiento del Pro es 1.399 (512 GB), 1.799 (1 TB) y 2.399 (2 TB). En el Max: 1.499, 1.899 y 2.499. Son listas de EE. UU. sin impuesto. Tu país no se calcula multiplicando.",
          "El 17 Pro y el 17 Pro Max ya no están. Quien compare con el precio del año pasado tiene que usar el 17 normal o el Air, no un Pro descatalogado.",
        ],
      },
      {
        heading: "El asterisco",
        paragraphs: [
          "En la tabla de MacRumors, iPhone 16 e iPhone 17 marcan precios con asterisco: el descuento pide activar el teléfono con un operador. No es el precio si lo compras libre. El 18 Pro, el Air y el Duo no salen con esa marca en esa lista.",
          "Financiar a 24 meses —unos 49,95 dólares el Pro y 54,12 el Max, según el desglose del evento— no baja el total. Lo parte. Suma impuestos y, si aplica, la permanencia del operador.",
        ],
      },
      {
        heading: "Dónde mirar después del precio",
        paragraphs: [
          "Si dudas entre los dos nuevos, la diferencia útil no son 100 dólares: es tamaño y batería de ficha. Está en [[iphone-18-pro-vs-max|Pro contra Pro Max]]. Si dudas con el plegable, son 700 dólares más y tres semanas de espera: [[vs-iphone-18-pro-max|Duo contra Pro Max]].",
          "AirPods y Watch no van en el presupuesto del teléfono salvo que los estés cambiando a la vez. Sus precios están en [[airpods-5|AirPods 5]] y [[watch-2026|la gama Watch]].",
        ],
      },
    ],
    unknowns: [
      "Precio en euros y en América Latina el día que leas esto.",
      "Si el asterisco de operador sigue vigente en tu tienda.",
    ],
    decision:
      "Presupuesta el modelo libre, no la cuota. Si 1.199 dólares ya te aprietan, el Air o el 17 existen y están en tienda. No hace falta saltar al Duo para «comprar el nuevo».",
    faq: [
      {
        q: "¿El 18 Pro bajó de precio al salir el Duo?",
        a: "No. El Duo ni siquiera está a la venta. El Pro lleva su precio de lanzamiento desde el 18 de septiembre.",
      },
      {
        q: "¿Hay iPhone 18 a secas, sin Pro?",
        a: "En este evento, no. La gama nueva de teléfono plano son Pro y Pro Max. El no-Pro que sigue es el 17.",
      },
    ],
    related: ["iphone-18-pro-vs-max", "otono-2026", "vs-iphone-18-pro-max"],
  },
  {
    slug: "iphone-18-pro-vs-max",
    title: "iPhone 18 Pro o Pro Max",
    dek: "Mismo chip, misma cámara con apertura variable, cien dólares de diferencia. Lo que cambia es el tamaño y las horas de vídeo que Apple firma.",
    directAnswer:
      "Elige el Pro (desde 1.199 dólares) si quieres el cuerpo menor. Elige el Max (desde 1.299) si la batería de ficha te importa más que el bolsillo: Apple declara hasta 36 horas de vídeo en el Pro y 45 en el Max, en los modelos solo eSIM.",
    cluster: "transaccional",
    category: "iphone",
    tags: ["iPhone 18", "Pro", "Pro Max"],
    minutes: 5,
    updated,
    confidence: "ficha",
    table: {
      caption: "Lo que Apple separa. El resto del chip es el mismo",
      headers: ["", "18 Pro", "18 Pro Max"],
      rows: [
        ["Entrada 256 GB", "1.199 USD", "1.299 USD"],
        ["Tope 2 TB", "2.399 USD", "2.499 USD"],
        ["Vídeo, modelo eSIM", "Hasta 36 h", "Hasta 45 h"],
        ["Uso real publicado", "No en la misma frase", "Hasta 30 h"],
        ["Chip y cámara", "A20 Pro, 48 MP variable", "Igual"],
      ],
    },
    sections: [
      {
        heading: "Lo que comparten",
        paragraphs: [
          "Los dos llevan el A20 Pro, el primer chip de teléfono de Apple en 2 nm, con cámara de vapor más grande que la del 17 Pro. La principal es una Fusion de 48 MP con apertura variable: cuatro posiciones y una API para que otras apps la usen. Almacenamiento de 256 GB a 2 TB. Colores citados: negro, plata, glaciar y borgoña.",
          "Eso ya está en tienda desde el 18 de septiembre. No es una preventa. Las muestras de cámara de terceros empiezan a existir; una ficha de lanzamiento no las sustituye, pero tampoco hace falta tratarlo como un rumor.",
        ],
      },
      {
        heading: "Lo que no",
        paragraphs: [
          "Cien dólares en la entrada. La batería de vídeo que Apple publica —36 horas el Pro, 45 el Max— está medida en los modelos solo eSIM de EE. UU. y de otros once mercados. No la traslades a una variante con bandeja si tu país la tiene, ni a un día de datos y brillo alto.",
          "Del Max, además, se ha citado hasta 30 horas de uso real. Del Pro, las crónicas del evento no ponen un equivalente igual de claro. Si tu criterio es «que me llegue al noche», el Max es la apuesta de ficha. Si tu criterio es la mano, el Pro. Ninguno de los dos es el [[guia-completa|Duo]].",
        ],
      },
      {
        heading: "Cuándo no comprar ninguno",
        paragraphs: [
          "Si vienes de un 17 Pro y solo quieres el chip nuevo, espera a ver pruebas de la apertura variable en tus escenas, no en el escenario. Si el presupuesto se queda en cuatro cifras justas, el [[precios-gama-iphone|iPhone Air y el 17]] siguen a la venta y no arrastran un plegable.",
          "Los AirPods no vienen en la caja. Si los vas a cambiar, míralos aparte: el salto de este año está en los [[airpods-5|AirPods 5]], no en el teléfono.",
        ],
      },
    ],
    unknowns: [
      "Autonomía medida por terceros con el brillo y la cobertura de tu ciudad.",
      "Si tu mercado del 18 Pro conserva SIM física. La cifra de batería citada es la de los modelos solo eSIM.",
    ],
    decision:
      "Misma generación. Paga el Max solo por tamaño de pantalla y por la batería de ficha. Si eso no te cambia el día, quédate en el Pro y ahórrate cien dólares, o baja a un Air.",
    faq: [
      {
        q: "¿La apertura variable está en los dos?",
        a: "Sí. Es la cámara principal de la familia 18 Pro, no un exclusivo del Max.",
      },
      {
        q: "¿Hace falta iOS 27?",
        a: "Salen con él. iOS 27 está disponible desde el 14 de septiembre.",
      },
    ],
    related: ["precios-gama-iphone", "otono-2026", "vs-iphone-18-pro-max"],
  },
  {
    slug: "airpods-5",
    title: "AirPods 5: 129 dólares y cancelación de ruido",
    dek: "El cambio de este año no es un Pro nuevo. Es que la cancelación baja al modelo barato. Los Pro 3 siguen en 249.",
    directAnswer:
      "Los AirPods 5 cuestan 129 dólares y traen cancelación activa de ruido. El estuche con carga inalámbrica sube a 149. Los AirPods Pro 3 siguen a 249. Los dos modelos 5 están en tienda desde el 18 de septiembre.",
    cluster: "informativo",
    category: "airpods",
    tags: ["AirPods", "ANC", "precio"],
    minutes: 5,
    updated,
    confidence: "ficha",
    table: {
      caption: "Gama de auriculares que Apple vende ahora",
      headers: ["Modelo", "Precio", "ANC"],
      rows: [
        ["AirPods 4", "129 USD", "No"],
        ["AirPods 4 con ANC", "179 USD", "Sí"],
        ["AirPods 5", "129 USD", "Sí"],
        ["AirPods 5, estuche inalámbrico", "149 USD", "Sí"],
        ["AirPods Pro 3", "249 USD", "Sí, intrauditivos"],
      ],
    },
    sections: [
      {
        heading: "Qué ha cambiado de verdad",
        paragraphs: [
          "Hasta este septiembre, la cancelación en diseño abierto empezaba en los AirPods 4 con ANC, a 179 dólares. Los 5 la ponen en el precio de entrada, 129, el mismo con el que salieron los 4 sin ANC. Apple dice que quitan hasta un 50 % más de ruido exterior que esos 4 con ANC.",
          "Siguen siendo abiertos, sin almohadilla de silicona. Llevan chip H2. Se ha publicado resistencia IP57 al polvo, al sudor y al agua. El de 149 añade sensor de fuerza con gesto de volumen y un estuche que carga por Qi, por cargador de Apple Watch y por USB-C.",
        ],
      },
      {
        heading: "Batería: no cites un solo número",
        paragraphs: [
          "Las crónicas no dejan la autonomía clavada igual. Una tabla da 5 horas con ANC y 22 con estuche para los dos 5. Otra separa unas 4 horas y 20 con estuche en el de 129, y 5 horas y 22 en el de 149. Los 4 con ANC estaban en unas 4 horas con cancelación.",
          "Lo estable es el precio y que ambos 5 cancelan ruido. Antes de repetir «22 horas», mira la ficha del modelo exacto en la Store. Un estuche no es un día de llamadas.",
        ],
      },
      {
        heading: "Cuándo no bastan y hace falta el Pro 3",
        paragraphs: [
          "Los Pro 3, de septiembre de 2025, siguen a 249 dólares: almohadillas, hasta unas 8 horas con ANC, prueba de audición, función de audífono y IP57. Si quieres aislamiento de verdad —avión, obra, oficina ruidosa— el abierto, aunque cancele más que el año pasado, no tapa igual.",
          "Si vienes de unos 4 sin ANC y solo quieres menos ruido en la calle, los 5 a 129 son el salto. No hace falta el Pro, ni esperar al Duo, ni cambiar de iPhone para estrenarlos: llevan en tienda desde el 18 de septiembre.",
        ],
      },
    ],
    unknowns: [
      "La hora exacta del modelo de 129 dólares, mientras las tablas no coincidan.",
      "Cuánto se nota ese 50 % más de cancelación fuera del laboratorio de Apple.",
    ],
    decision:
      "Calle y oficina normal: AirPods 5 a 129, o 149 si quieres el estuche que carga sin cable. Avión y aislamiento: Pro 3. No compres los 4 con ANC a 179 si los 5 hacen ese trabajo por menos.",
    faq: [
      {
        q: "¿Sirven con Android?",
        a: "Suena el audio. Lo que es de Apple —cambio de dispositivo, audio adaptativo fino— se queda corto fuera de su ecosistema. Esta ficha asume un iPhone.",
      },
      {
        q: "¿Hace falta un iPhone 18?",
        a: "No. Salieron el mismo día que el 18 Pro, no son un accesorio exclusivo de ese teléfono.",
      },
    ],
    related: ["otono-2026", "watch-2026", "precios-gama-iphone"],
  },
  {
    slug: "watch-2026",
    title: "Apple Watch Series 12 y Ultra 4",
    dek: "Los dos ya están en tienda. Comparten sensor de salud y chip. No comparten batería ni precio.",
    directAnswer:
      "La Series 12 parte de 399 dólares y el Ultra 4 de 799. Los dos miden el pulso cada cinco segundos y llevan chip S11. El SE 3 sigue a la venta desde 249 y no es un modelo de este evento.",
    cluster: "informativo",
    category: "watch",
    tags: ["Watch", "Series 12", "Ultra"],
    minutes: 5,
    updated,
    confidence: "ficha",
    table: {
      caption: "Relojes a la venta, precios de entrada en EE. UU.",
      headers: ["Modelo", "Desde", "Batería que Apple publica"],
      rows: [
        ["SE 3", "249 USD", "Gama anterior, sigue en catálogo"],
        ["Series 12", "399 USD", "24 h de uso, 10 h de entreno"],
        ["Ultra 4", "799 USD", "50 h de uso, 84 h en bajo consumo"],
      ],
    },
    sections: [
      {
        heading: "El sensor, que es lo nuevo de verdad",
        paragraphs: [
          "Series 12 y Ultra 4 estrenan el mismo sistema de salud: pulso cada cinco segundos, variabilidad cardíaca mucho más seguida —del orden de cada cinco minutos— y una puntuación de preparación del día, de 0 a 10. Apple apoya la lectura del pulso en un estudio interno de más de mil personas en julio y agosto de 2026. No es un ensayo de un hospital ajeno.",
          "El chip es el S11 en los dos. Están en tienda desde el 18 de septiembre. watchOS 27 acompaña a iOS 27, publicado el 14.",
        ],
      },
      {
        heading: "Series 12, si no vas a dormir en el monte",
        paragraphs: [
          "Desde 399 dólares. Cajas de 42 y 46 mm. Aluminio con Ceramic Shield 2 —Apple dice un 60 % más resistente que el Ion-X— y titanio en algunos acabados. Batería de ficha: unas 24 horas de uso y 10 de entreno al aire, un 25 % más que la generación anterior. Quince minutos de carga dan, según Apple, hasta 12 horas.",
          "Eso es un reloj de un día, no de un fin de semana. Si ya cargas el Series cada noche, el argumento es el sensor y el cristal, no la libertad de olvidar el cable.",
        ],
      },
      {
        heading: "Ultra 4, y el SE que no hay que olvidar",
        paragraphs: [
          "799 dólares. Caja impresa en 3D con titanio reciclado. Apple publica unas 50 horas de uso normal, 84 en bajo consumo, 25 en entreno extendido y 45 en el modo máximo de entreno. Quince minutos de carga suman hasta 18 horas. Hay correa Ocean y, aparte, el brazalete Hermès, que no entra en esos 799.",
          "El SE 3 sigue desde 249 dólares. No tiene este sensor. Si quieres la hora, el deporte básico y no vas a mirar una puntuación de 0 a 10, el SE existe y no obliga a esperar nada: el Watch nuevo ya se vende, igual que los [[airpods-5|AirPods 5]] y a diferencia del [[guia-completa|iPhone Duo]].",
        ],
      },
    ],
    unknowns: [
      "Si la puntuación de preparación cambia una decisión clínica. No está presentada como eso.",
      "Autonomía real de la Series 12 con siempre-activo y LTE, fuera del banco de Apple.",
    ],
    decision:
      "Un día y el sensor nuevo: Series 12. Fin de semana sin cargar: Ultra 4, si de verdad vas a usar esas horas. Presupuesto corto: SE 3, a sabiendas de que el sensor se queda fuera.",
    faq: [
      {
        q: "¿Hace falta un iPhone 18 para el Series 12?",
        a: "No. Necesita un iPhone compatible con watchOS 27, no el modelo de este septiembre.",
      },
      {
        q: "¿El Ultra sustituye a un reloj de buceo?",
        a: "La ficha de batería y de titanio no es una certificación que esta página vaya a inventar. Si buceas, contrasta la profundidad publicada en la Store con la que tú usas.",
      },
    ],
    related: ["otono-2026", "airpods-5", "precios-gama-iphone"],
  },
];
