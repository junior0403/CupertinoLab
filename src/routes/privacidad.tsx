import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacidad")({
  head: () =>
    pageMeta({
      title: "Privacidad · CupertinoLab",
      description: "Qué datos trata CupertinoLab, quién los ve y qué no hacemos todavía con publicidad.",
      path: "/privacidad",
    }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <Shell>
      <h1 className="pt-8 font-serif text-4xl text-ink">Privacidad</h1>
      <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink">
        <p>
          CupertinoLab es una publicación independiente. No pertenece a Apple y no vende sus
          productos. Esta página dice qué datos toca el sitio hoy, 1 de octubre de 2026.
        </p>
        <h2 className="pt-4 font-serif text-2xl">Qué no recogemos</h2>
        <p>No hay cuentas, ni boletín, ni formulario, ni píxel de publicidad, ni Google Analytics.</p>
        <h2 className="pt-4 font-serif text-2xl">Qué puede ver el alojamiento</h2>
        <p>
          El sitio está en Netlify. Para servir y proteger la página, el servidor puede registrar la
          petición técnica: dirección IP, hora, dirección solicitada y el navegador. No usamos ese
          registro para perfiles ni lo vendemos.
        </p>
        <h2 className="pt-4 font-serif text-2xl">Tipografía</h2>
        <p>
          Las letras, Newsreader y Outfit, se piden a Google Fonts (fonts.googleapis.com y
          fonts.gstatic.com) solo para dibujar la página. No es un anuncio ni un medidor. Google
          puede ver la dirección IP en esa petición. No la usamos para hacer perfiles.
        </p>
        <h2 className="pt-4 font-serif text-2xl">Salir del sitio</h2>
        <p>
          Las fichas enlazan a Apple, Samsung y Wikimedia. Al pulsar esos enlaces sales de
          CupertinoLab y rige la política de ese sitio. Nosotros no controlamos sus cookies.
        </p>
        <h2 className="pt-4 font-serif text-2xl">Publicidad</h2>
        <p>
          Hoy no hay anuncios. Si más adelante se pide AdSense, no se cargará ningún anuncio hasta
          actualizar esta página y la de{" "}
          <Link to="/cookies" className="underline underline-offset-4">
            cookies
          </Link>{" "}
          con el nombre del servicio, para qué usa la cookie y cómo rechazarla. El criterio editorial
          está en{" "}
          <Link to="/aviso" className="underline underline-offset-4">
            publicidad
          </Link>
          .
        </p>
        <h2 className="pt-4 font-serif text-2xl">Contacto</h2>
        <p>
          Para una pregunta sobre estos datos, escribe a{" "}
          <a className="underline underline-offset-4" href="mailto:contacto@cupertinolab.space">
            contacto@cupertinolab.space
          </a>
          . Esa dirección reenvía a la redacción. No publicamos el buzón personal.
        </p>
      </div>
    </Shell>
  );
}
