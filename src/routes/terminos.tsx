import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/terminos")({
  head: () =>
    pageMeta({
      title: "Términos · CupertinoLab",
      description: "Condiciones de uso de las fichas de CupertinoLab: información, marcas y correcciones.",
      path: "/terminos",
    }),
  component: Terminos,
});

function Terminos() {
  return (
    <Shell>
      <h1 className="pt-8 font-serif text-4xl text-ink">Términos</h1>
      <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink">
        <h2 className="pt-2 font-serif text-2xl">Qué es esto</h2>
        <p>
          CupertinoLab publica fichas informativas. No es Apple, no es una tienda y no cierra una
          compra. Nada de lo escrito es una orden de comprar o de no comprar.
        </p>
        <h2 className="pt-4 font-serif text-2xl">Cifras</h2>
        <p>
          Los precios y las especificaciones cambian cuando cambia la ficha del fabricante. La fecha
          de cada pieza indica cuándo se consultó. Si la tienda dice otra cosa, manda la tienda.
        </p>
        <h2 className="pt-4 font-serif text-2xl">Uso del texto</h2>
        <p>Enlazar una ficha, sí. Copiarla entera, no.</p>
        <h2 className="pt-4 font-serif text-2xl">Marcas</h2>
        <p>
          Apple, iPhone, iOS, AirPods, Apple Watch y los nombres de Samsung son de sus dueños.
          CupertinoLab no está autorizado por ellos.
        </p>
        <h2 className="pt-4 font-serif text-2xl">Correcciones</h2>
        <p>
          Si una cifra no coincide con la fuente, escribe a{" "}
          <a className="underline underline-offset-4" href="mailto:contacto@cupertinolab.space">
            contacto@cupertinolab.space
          </a>
          . Quién publica el sitio está en{" "}
          <Link to="/sobre" className="underline underline-offset-4">
            Sobre CupertinoLab
          </Link>
          .
        </p>
      </div>
    </Shell>
  );
}
