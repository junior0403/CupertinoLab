import { createFileRoute } from "@tanstack/react-router";
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
      <p className="mt-6 font-sans text-base leading-relaxed text-ink">
        La redacción lee{" "}
        <a className="underline underline-offset-4" href="mailto:contacto@cupertinolab.space">
          contacto@cupertinolab.space
        </a>
        . No hay formulario y no pedimos datos para escribir.
      </p>
    </Shell>
  );
}
