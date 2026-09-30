import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () =>
    pageMeta({
      title: "Contacto · CupertinoLab",
      description: "Escribe a la redacción de CupertinoLab en contacto@cupertinolab.space.",
      path: "/contacto",
    }),
  component: Contacto,
});

function Contacto() {
  return (
    <Shell>
      <h1 className="pt-8 font-serif text-4xl text-ink">Contacto</h1>
      <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink">
        <p>
          La redacción lee{" "}
          <a className="underline underline-offset-4" href="mailto:contacto@cupertinolab.space">
            contacto@cupertinolab.space
          </a>
          .
        </p>
        <p>
          Sirve para una corrección, un error en una ficha o una pregunta sobre el tratamiento de
          datos. No hay formulario y no pedimos datos para escribir.
        </p>
        <p>
          Quién publica el sitio está en{" "}
          <Link to="/sobre" className="underline underline-offset-4">
            Sobre CupertinoLab
          </Link>
          . Los datos, en{" "}
          <Link to="/privacidad" className="underline underline-offset-4">
            privacidad
          </Link>
          .
        </p>
      </div>
    </Shell>
  );
}
