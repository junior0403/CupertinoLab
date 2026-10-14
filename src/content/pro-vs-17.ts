import type { Article } from "@/content/articles";

const apple18 = {
  label: "Apple, especificaciones del iPhone 18 Pro",
  href: "https://www.apple.com/es/iphone-18-pro/specs/",
};
const apple18us = {
  label: "Apple, ficha en inglés del iPhone 18 Pro",
  href: "https://www.apple.com/iphone-18-pro/specs/",
};
const appleNews = {
  label: "Apple Newsroom, presentación del iPhone 18 Pro",
  href: "https://www.apple.com/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/",
};
const apple17 = {
  label: "Apple, ficha publicada del iPhone 17 Pro",
  href: "https://www.apple.com/iphone-17-pro/specs/",
};
const appleStore = {
  label: "Apple Store España, compra del iPhone 18 Pro",
  href: "https://www.apple.com/es/shop/buy-iphone/iphone-18-pro",
};

export const proVs17: Article[] = [
  {
    slug: "iphone-18-pro-vs-iphone-17-pro",
    title: "iPhone 18 Pro vs iPhone 17 Pro: ¿qué cambia realmente y cuál merece la pena?",
    dek: "El 18 Pro no es «el mejor» por ser más nuevo. La pregunta es si la apertura, el calor y el chip justifican dejar un 17 Pro que ya tienes.",
    directAnswer:
      "Si el 17 Pro te dura el día y no echas de menos la apertura variable, quédate. El 18 Pro merece el cambio si grabas en serio, si el teléfono se ahoga en juegos o vídeo largo, o si vienes de un 16 Pro o anterior. Apple ya no vende el 17 Pro.",
    metaTitle: "iPhone 18 Pro vs iPhone 17 Pro: diferencias y cuál comprar",
    metaDescription:
      "Comparamos iPhone 18 Pro y iPhone 17 Pro: cámara, batería, rendimiento, pantalla, precio y funciones. Descubre si merece la pena actualizar.",
    cluster: "transaccional",
    category: "iphone",
    tags: ["iPhone 18 Pro", "iPhone 17 Pro", "comparativa"],
    minutes: 14,
    updated: "14 oct 2026",
    confidence: "ficha",
    coverAlt: "Dos iPhone de espaldas, imagen de la comparativa entre 18 Pro y 17 Pro.",
    table: {
      caption: "Lectura de CupertinoLab. No es una tabla de Apple",
      headers: ["Si tienes…", "Recomendación"],
      rows: [
        ["iPhone 17 Pro", "Mantenerlo, salvo que necesites la apertura, el calor o el vídeo nuevo"],
        ["iPhone 16 Pro", "El cambio empieza a tener sentido"],
        ["iPhone 15 Pro o anterior", "La actualización es mucho más clara"],
        ["Trabajo de foto o vídeo", "El 18 Pro se considera en serio"],
      ],
    },
    sections: [
      {
        heading: "Respuesta rápida",
        paragraphs: [
          "La cuestión no es cuál ficha gana un póster. Es si el 18 Pro te cambia el día cuando ya pagaste un 17 Pro. Este año hay tres sitios donde sí puede hacerlo: la apertura de la principal, la cámara de vapor y el salto del A19 Pro al A20 Pro.",
          "El 18 Pro está en tienda desde el 18 de septiembre de 2026. El 17 Pro no. En la Apple Store de España, el 14 de octubre de 2026, el configurador no ofrece el modelo anterior. Quien ya tiene el 17 Pro compara contra lo que pagó, no contra una rebaja que Apple no publica. Lo que sigue sale de la ficha vigente del 18 Pro, de la nota del 9 de septiembre y de la hoja del 17 Pro, que ahora redirige al catálogo. No relleno huecos con benchmarks de un vídeo ni con precios de segunda mano.",
        ],
      },
      {
        heading: "Diseño",
        paragraphs: [
          "El 18 Pro es un unibody de aluminio, con Ceramic Shield 2 delante y Ceramic Shield detrás. Pesa 211 gramos. Acabados: negro, plata, azul glacial y burdeos. La Dynamic Island es más pequeña; Apple no publica el milímetro. El cuerpo sigue siendo el Pro de 6,3 pulgadas, no el Max.",
          "El 17 Pro ya enfriaba el chip con vapor. Lo nuevo es el tamaño de esa cámara, no su existencia. Quien esperaba otra silueta no la va a encontrar. El diseño es un empate de uso. El burdeos no es una razón para cambiar.",
        ],
      },
      {
        heading: "Pantalla",
        paragraphs: [
          "La ficha del 18 Pro describe una OLED de 6,3 pulgadas, 2.622 por 1.206 píxeles a 460 por pulgada, ProMotion hasta 120 Hz y siempre activa. Brillo firmado: 1.000 nits típicos, 1.600 de pico en HDR y 3.000 en exterior. La del 17 Pro ya no está colgada, así que no le atribuyo unos nits que no puedo releer. Si el sol o el siempre activo es tu queja, míralos juntos en tienda. Si la queja es otra, la pantalla no es el argumento.",
        ],
      },
      {
        heading: "Rendimiento",
        paragraphs: [
          "El 18 Pro lleva el A20 Pro, en 2 nanómetros. CPU de 6 núcleos, GPU de 7 con trazado de rayos y Neural Engine doble de 16 núcleos cada uno: 32 en total, el doble de capacidad de IA que el A19 Pro, según Apple, con un 50 % más de ancho de banda de memoria. La GPU es hasta un 40 % más rápida que la del A19 Pro. «Hasta» es el techo de su prueba, no la media de tu juego.",
          "El 17 Pro, en la hoja publicada, llevaba un A19 Pro de CPU también de 6 núcleos, GPU de 6 y un solo Neural Engine de 16. El salto de ficha es un núcleo de GPU, el Neural Engine duplicado y el proceso de 2 nm, no más núcleos de CPU. En el día a día se nota poco si el 17 ya iba holgado. Se nota al editar vídeo, exportar ProRes o sostener un juego. Ahí manda el calor.",
        ],
      },
      {
        heading: "Refrigeración y rendimiento sostenido",
        paragraphs: [
          "Un pico de CPU dura un segundo. Un vídeo o una partida, no. El A20 Pro apoya el dado directo en una cámara de vapor con el triple de superficie que la del 17 Pro. Apple cifra el rendimiento sostenido en hasta un 40 % más que la generación anterior. El 17 Pro ya iba enfriado por vapor: la diferencia es de grado, no de invento. Si el tuyo baja frames o entrecorta el vídeo a los diez minutos, este es el cambio honesto del año. Si no lo has notado, la cámara nueva no te cambia la tarde.",
        ],
      },
      {
        heading: "Cámara",
        paragraphs: [
          "Las dos generaciones presumen de tres cámaras traseras Fusion de 48 megapíxeles. El corte está en la principal. En el 17 Pro, Apple la fijó en 24 mm y ƒ/1,78, con estabilización por desplazamiento de sensor, y un recorte de 12 megapíxeles a 48 mm que cuenta como 2x de calidad óptica. En el 18 Pro esa idea convive con una apertura que se mueve: ƒ/1,48, ƒ/1,8, ƒ/2,8 y ƒ/4. Se elige sola o a mano, y hay una API para otras apps. ƒ/1,48 entra más luz que ƒ/1,78. ƒ/4 cierra el diafragma. Apple habla de mejor foto con poca luz y de un sensor nuevo. No publico un tanto por ciento de luz que no he medido.",
          "El ultra gran angular del 18 Pro es de 13 mm, ƒ/2,2 y 120 grados. El tele es de 100 mm (4x) a ƒ/2,8, tetraprisma, y habilita un 8x de calidad óptica a 200 mm. El 17 Pro ya ofrecía ese 8x y el tetraprisma. No es un tele de este año. Lo nuevo es abrir o cerrar la principal. Para noche y retrato, eso justifica mirar el cambio. Para un concierto, los dos llegan al mismo 8x de ficha. Si dudas el tamaño, mira el [[iphone-18-pro-vs-max|Pro Max]]: misma cámara, más cuerpo. Si dudas el formato, el [[iphone-duo-vs-iphone-18-pro-max|Duo]] es otro aparato.",
        ],
      },
      {
        heading: "Vídeo",
        paragraphs: [
          "Los dos graban 4K Dolby Vision, también a 120 fotogramas en la principal, con modo Cine, Acción, Log y ProRes. Quien ya rueda con el 17 Pro no encuentra un formato que le cierre un encargo nuevo. Encuentra control: en el 18 Pro se tocan apertura, velocidad y balance de blancos, con histograma. El Cine se aplica después, hasta 60 fotogramas. El time-lapse pasa a 4K Dolby Vision. Hay ProRes RAW y Apple Reference Image, que firma los píxeles de la principal.",
          "Eso le importa a quien entrega vídeo o necesita probar el origen de una foto. No le importa a quien graba un cumpleaños en automático. El 17 Pro ya era cámara de trabajo. El 18 Pro añade diafragma y herramientas. Si cobras por el plano, el margen se paga. Si no, es equipo que no vas a abrir.",
        ],
      },
      {
        heading: "Batería",
        paragraphs: [
          "Apple no publica un día tuyo. Publica horas de vídeo. En la hoja del 17 Pro, el vídeo llegaba a 33 horas y el streaming a 30. En la nota del 18 Pro, los modelos solo eSIM llegan a 36 horas de vídeo. La ficha en español del 18 Pro, sin esa separación, lista hasta 23 horas de uso, 34 de vídeo y 31 de streaming. No se restan como si fueran el mismo ensayo. Apple dice que los eSIM usan el hueco de la SIM y suman dos horas de vídeo. Si tu país vende bandeja, no heredes el número de Estados Unidos.",
          "La carga por cable sí se compara. El 17 Pro llegaba al 50 % en unos 20 minutos con 40 W o más. El 18 Pro lo hace en unos 15 minutos con 60 W o más. Con MagSafe, el 17 Pro pedía 30 W para el 50 % en 30 minutos. El 18 Pro pide 35 W para ese mismo tramo, y limita MagSafe y Qi2 a 25 W. Si el 17 Pro te deja tirado a media tarde, hay ficha mejor y un cable más corto, siempre con el cargador que Apple no incluye. Si llegas a la noche con margen, esas horas no pagan el cambio. El salto grande de batería, en el relato de Apple, es el [[iphone-18-pro-vs-max|Pro Max]].",
        ],
      },
      {
        heading: "Inteligencia artificial",
        paragraphs: [
          "En el 18 Pro, Apple centra el relato en Siri AI, más conversacional, y dice que ese despliegue empieza en inglés. No es una promesa cerrada en español. El hardware nuevo es el Neural Engine doble: más margen para modelos en el dispositivo y para la foto computacional. Eso no demuestra que cada función exija un A20. Parte llega por software a teléfonos anteriores. La ficha de [[ios-26|iOS]] cuenta esa rama aparte. Si tu motivo es «la IA», prueba la función en tu idioma y en el 17 Pro antes de pagar. Si solo existe en la nota del 18 Pro —la firma de píxeles, la apertura—, entonces sí es del teléfono.",
        ],
      },
      {
        heading: "Conectividad",
        paragraphs: [
          "La ficha vigente del 18 Pro es concreta: 5G, Wi-Fi 7 con el chip N1, Bluetooth 6, Thread, ultra wideband de segunda generación, NFC y módem C2. El USB-C hace carga, DisplayPort y USB 3 hasta 10 Gb/s. MagSafe y Qi2, hasta 25 W. La hoja del 17 Pro ya redirige al catálogo, así que no invento su generación de Wi-Fi ni el nombre de su módem. Lo comparable, y ya está en la batería, es el cargador: 40 W y unos 20 minutos frente a 60 W y unos 15.",
          "Para copiar un ProRes, los 10 Gb/s importan más que el logo del Wi-Fi. Wi-Fi 7 solo acelera si el router también lo habla. Thread y ultra wideband sirven a los accesorios que ya los usan, no a una barra más alta de cobertura en la calle.",
        ],
      },
      {
        heading: "Precio",
        paragraphs: [
          "En Estados Unidos el 18 Pro entra en 1.199 dólares con 256 GB. En la Store de España, el 14 de octubre de 2026, son 1.469 euros. Después: 1.719 los 512 GB, 2.219 el tera y 2.969 los 2 TB. La cifra española lleva el impuesto; la estadounidense, no. No se convierten multiplicando.",
          "El 17 Pro no tiene precio oficial de hoy: no está en ese configurador. Lo que sí se vende está en [[precios-gama-iphone|cuánto cuesta cada iPhone]]. El 17, el 17e y el Air quedan por debajo. El [[precio-espana|Duo]] es otra compra, con otra fecha. Pagar 1.469 euros para retirar un 17 Pro de un año es el peor negocio de esta página, salvo que la cámara o el calor te cuesten trabajo. Desde un 15 Pro o anterior el cálculo cambia: ya no compites contra un Pro reciente.",
        ],
      },
      {
        heading: "¿Cuál comprar?",
        paragraphs: [
          "No hay un ganador único. El 18 Pro gana en chip, apertura y rendimiento sostenido. El 17 Pro gana en el dinero ya gastado.",
        ],
        subsections: [
          {
            heading: "Usuario normal",
            paragraphs: [
              "Si mensajes, fotos y mapas caben en el 17 Pro, quédate. Si vas a comprar un Pro ahora, compra el 18 Pro: Apple ya no vende el anterior.",
            ],
          },
          {
            heading: "Creador de contenido",
            paragraphs: [
              "Si corriges en el teléfono, la apertura y el histograma son herramientas. Si el archivo ya sale bien del 17 Pro y terminas en un ordenador, puedes esperar.",
            ],
          },
          {
            heading: "Fotógrafo o videógrafo",
            paragraphs: [
              "El diafragma es la diferencia de oficio. El 8x ya estaba. Cambia si te falla la luz o el control manual, no por el tetraprisma.",
            ],
          },
          {
            heading: "Quien juega",
            paragraphs: [
              "Más GPU y más vapor sirven si el 17 Pro se calienta de verdad. No sirven si media hora de juego no lo altera.",
            ],
          },
          {
            heading: "Quien quiere gastar menos",
            paragraphs: [
              "No compres un 18 Pro para ahorrar. Baja al [[precios-gama-iphone|17, al 17e o al Air]]. Conservar tu 17 Pro es la opción barata. La segunda mano no tiene precio oficial y esta ficha no la avala.",
            ],
          },
          {
            heading: "Quien viene de un iPhone antiguo",
            paragraphs: [
              "Desde un 15 Pro o anterior no compites contra el 17 Pro. Entra al 18 Pro si llegas a 1.469 euros en España, o baja un escalón. El [[otono-2026|mapa de la tienda]] separa esto del Duo.",
            ],
          },
        ],
      },
      {
        heading: "¿Merece la pena pasar del iPhone 17 Pro al 18 Pro?",
        paragraphs: [
          "En la mayoría de los bolsillos, no. Un 17 Pro de un año sigue siendo un teléfono de gama alta: tres cámaras de 48 megapíxeles, ProMotion, vapor y un A19 Pro que Apple no ha declarado viejo. El 18 Pro es mejor donde Apple ha puesto números: GPU, Neural Engine, superficie de la cámara de vapor, apertura, horas de vídeo de los eSIM y carga a 60 W. Mejor en la ficha no es lo mismo que necesario.",
          "Cambia si trabajas con la imagen y la apertura fija se te queda corta, si el 17 Pro pierde fuelle al grabar o jugar un rato, o si el dinero del teléfono nuevo ya estaba apartado. No cambies por el burdeos, por una Dynamic Island algo menor ni por una función de inteligencia artificial que aún no has visto en tu idioma. Si dudas, espera una medida ajena de esa apertura. Si la duda es el tamaño, es [[iphone-18-pro-vs-max|Pro contra Pro Max]]. Si es el plegable, son las [[funciones-trucos|funciones del Duo]].",
        ],
      },
      {
        heading: "Veredicto final",
        paragraphs: [
          "Gana el iPhone 18 Pro como aparato. Gana el iPhone 17 Pro como decisión de quien ya lo tiene y no choca con sus límites. El empate está en el diseño de uso y en el tele de 8x, que no es la novedad. La pantalla del 18 Pro está mejor documentada hoy, pero no hay una cifra vigente del 17 Pro para declararla perdedora.",
          "La calidad-precio no está en comprar el Pro más nuevo. Está en no reemplazar un 17 Pro sano. La longevidad, años de actualizaciones por delante, sí se inclina al 18 Pro: sale un año después y estrena el chip. Eso importa más en el año cinco que en el mes uno.",
        ],
        table: {
          caption: "Lectura de CupertinoLab a partir de las fichas. No es un ranking de Apple",
          headers: ["Apartado", "Ganador"],
          rows: [
            ["Diseño", "Empate de uso"],
            ["Pantalla", "18 Pro en la ficha vigente; el 17 ya no publica la suya"],
            ["Rendimiento", "iPhone 18 Pro"],
            ["Cámara", "iPhone 18 Pro"],
            ["Vídeo", "iPhone 18 Pro"],
            ["Inteligencia artificial", "iPhone 18 Pro en hardware; el software no está cerrado"],
            ["Batería", "18 Pro en la ficha de vídeo, con la salvedad eSIM"],
            ["Calidad/precio", "Quedarse con el 17 Pro si ya es tuyo"],
            ["Longevidad", "iPhone 18 Pro"],
            ["Ganador general", "iPhone 18 Pro, si vas a comprar; 17 Pro, si ya lo tienes y te basta"],
          ],
        },
      },
    ],
    unknowns: [
      "Autonomía medida fuera del banco de Apple, con tu brillo y tu cobertura.",
      "Cuánto mejora la apertura variable en una escena real, no en la nota de prensa.",
      "Qué funciones de Siri AI llegan al 17 Pro por actualización y en qué idioma.",
      "La ficha completa del 17 Pro: Apple ya redirige esa URL al catálogo.",
    ],
    decision:
      "Compra el 18 Pro si vas a comprar un Pro ahora, o si el 17 Pro se te queda corto en luz, en calor o en vídeo. Si el 17 Pro te cubre el día, no lo cambies.",
    faq: [
      {
        q: "¿Merece la pena cambiar de un iPhone 17 Pro a un 18 Pro?",
        a: "Solo si necesitas la apertura variable, más margen térmico o las herramientas de vídeo nuevas. Si el 17 Pro te dura y te enfoca, no.",
      },
      {
        q: "¿El iPhone 17 Pro sigue a la venta en Apple?",
        a: "En la Store de España, el 14 de octubre de 2026, no. El configurador del 18 Pro no lo ofrece.",
      },
      {
        q: "¿La apertura variable está solo en el 18 Pro?",
        a: "Está en la familia 18 Pro, Pro y Pro Max. El 17 Pro tenía la principal fija en ƒ/1,78.",
      },
      {
        q: "¿Cuánto cuesta el iPhone 18 Pro en España?",
        a: "1.469 euros con 256 GB, 1.719 con 512 GB, 2.219 con 1 TB y 2.969 con 2 TB, según la Store consultada el 14 de octubre de 2026.",
      },
      {
        q: "¿La batería del 18 Pro dura mucho más?",
        a: "Apple publica hasta 36 horas de vídeo en los 18 Pro solo eSIM, frente a 33 en la hoja del 17 Pro. No son tu día, ni sirven igual para la variante con bandeja.",
      },
      {
        q: "¿Qué iPhone compro si no quiero gastarme lo del 18 Pro?",
        a: "El 17, el 17e o el Air siguen en el catálogo. No hay un 17 Pro oficial más barato.",
      },
    ],
    related: ["iphone-18-pro-vs-max", "precios-gama-iphone", "iphone-duo-vs-iphone-18-pro-max"],
    sources: [apple18, apple18us, appleNews, apple17, appleStore],
  },
];
