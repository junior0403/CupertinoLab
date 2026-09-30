import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookies · CupertinoLab" },
      {
        name: "description",
        content: "Qué cookies usa CupertinoLab hoy y cuáles no se cargan.",
      },
    ],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <Shell>
      <h1 className="pt-8 font-serif text-4xl text-ink">Cookies</h1>
      <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink">
        <p>Una cookie es un archivo pequeño que el navegador guarda. Aquí se separan por tipo.</p>
        <h2 className="pt-4 font-serif text-2xl">Técnicas</h2>
        <p>
          El alojamiento (Netlify) puede usar una cookie estrictamente necesaria para entregar la
          página o frenar abuso. No sirve para reconocerte entre visitas ni para anuncios.
        </p>
        <h2 className="pt-4 font-serif text-2xl">De medición</h2>
        <p>No hay. No está instalado Google Analytics ni ningún medidor equivalente.</p>
        <h2 className="pt-4 font-serif text-2xl">De publicidad</h2>
        <p>
          No hay. No se carga AdSense ni ninguna cookie de terceros para anuncios. Si eso cambia, esta
          página lo dirá antes, con el nombre del proveedor y la forma de rechazarlo, y no se
          activará a escondidas. El detalle de cómo se marcaría un anuncio está en{" "}
          <Link to="/aviso" className="underline underline-offset-4">
            publicidad
          </Link>
          . El tratamiento de datos, en{" "}
          <Link to="/privacidad" className="underline underline-offset-4">
            privacidad
          </Link>
          .
        </p>
        <h2 className="pt-4 font-serif text-2xl">Al salir</h2>
        <p>
          Un enlace a Apple, Samsung o Wikimedia puede instalar cookies de ese sitio. Eso ya no es
          CupertinoLab.
        </p>
      </div>
    </Shell>
  );
}
