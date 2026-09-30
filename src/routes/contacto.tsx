import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () =>
    pageMeta({
      title: "Contacto · CupertinoLab",
      description: "CupertinoLab todavía no tiene un buzón público.",
      path: "/contacto",
    }),
  component: Contacto,
});

function Contacto() {
  return (
    <Shell>
      <h1 className="pt-8 font-serif text-4xl text-ink">Contacto</h1>
      <p className="mt-6 font-sans text-base leading-relaxed text-ink">
        No hay buzón ni formulario. No pedimos datos. Cuando exista una dirección de redacción, se
        publicará aquí y no en un anuncio.
      </p>
    </Shell>
  );
}
