import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/editorial")({
  head: () =>
    pageMeta({
      title: "Método editorial · CupertinoLab",
      description:
        "Cómo separa CupertinoLab la ficha de Apple, las manos de prensa y lo que todavía no se puede afirmar.",
      path: "/editorial",
    }),
  component: Editorial,
});

function Editorial() {
  return (
    <Shell>
      <h1 className="pt-8 font-serif text-4xl text-ink">Método</h1>
      <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink">
        <p>
          CupertinoLab cubre la gama que Apple tiene ahora mismo: iPhone 18 Pro
          y Pro Max, lo que sigue a la venta por debajo, AirPods, Apple Watch
          y el iPhone Duo. El Duo se anunció el 9 de septiembre de 2026 y no
          llega a la calle hasta el 23 de octubre. Escribir «lo hemos doblado
          mil veces» sería una reseña falsa. El 18 Pro no tiene esa coartada:
          está en tienda desde el 18 de septiembre, y aun así no inventamos
          pruebas que no hemos hecho.
        </p>
        <p>
          Cada ficha usa tres capas. Ficha de Apple: cifras con unidad y
          condición. Manos de prensa: lo que se vio, atribuido. Pendiente:
          caídas, ciclos de bisagra, autonomía de un día real, precio de
          reparación. Si dos crónicas no coinciden —pasa con las horas de los
          AirPods 5— se dice, no se elige la cifra más redonda.
        </p>
        <p>
          El título pregunta lo que la gente busca. El primer bloque responde.
          Después se explica qué no significa esa respuesta. Las comparaciones
          con el Galaxy Z Fold 8 usan cifras publicadas por terceros en
          septiembre de 2026, no un laboratorio propio.
        </p>
        <p>
          Actualizaremos las piezas de durabilidad cuando existan ensayos
          repetidos sobre unidades de serie. Hasta entonces, la etiqueta «sin
          prueba independiente» se queda puesta.
        </p>
        <p>
          No pertenecemos a Apple, Samsung ni a ninguna tienda. La política de
          anuncios y de futuros enlaces de afiliado está en el{" "}
          <Link to="/aviso" className="underline underline-offset-4">
            aviso
          </Link>
          .
        </p>
      </div>
    </Shell>
  );
}
