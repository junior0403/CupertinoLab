import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () =>
    pageMeta({
      title: "Sobre CupertinoLab",
      description:
        "Redacción independiente sobre iPhone, iOS, AirPods, Apple Watch y el iPhone Duo. No es Apple ni una tienda.",
      path: "/sobre",
    }),
  component: Sobre,
});

function Sobre() {
  return (
    <Shell>
      <h1 className="pt-8 font-serif text-4xl text-ink">Sobre CupertinoLab</h1>
      <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink">
        <p>
          CupertinoLab es una redacción independiente. Cubre iPhone, iOS, AirPods, Apple Watch y el
          iPhone Duo. No pertenece a Apple, no vende sus productos y no publica una prueba que no
          haya hecho.
        </p>
        <p>
          Cada ficha separa la cifra de la página del fabricante de lo que todavía nadie ha medido.
          El criterio está escrito en{" "}
          <Link to="/editorial" className="underline underline-offset-4">
            Método
          </Link>
          .
        </p>
        <p>
          Quien firma es la redacción, no una tienda ni un perfil inventado. Para una corrección o
          una pregunta, escribe a{" "}
          <a className="underline underline-offset-4" href="mailto:contacto@cupertinolab.space">
            contacto@cupertinolab.space
          </a>
          . Esa dirección reenvía a quien edita el sitio. El buzón personal no se publica.
        </p>
        <p>
          El tratamiento de datos está en{" "}
          <Link to="/privacidad" className="underline underline-offset-4">
            privacidad
          </Link>
          . Hoy no hay anuncios: el criterio, cuando los haya, está en{" "}
          <Link to="/aviso" className="underline underline-offset-4">
            publicidad
          </Link>
          .
        </p>
      </div>
    </Shell>
  );
}
