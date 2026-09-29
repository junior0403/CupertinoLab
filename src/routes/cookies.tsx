import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookies · CupertinoLab" },
      { name: "description", content: "CupertinoLab no carga cookies de publicidad." },
    ],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <Shell>
      <h1 className="pt-8 font-serif text-4xl text-ink">Cookies</h1>
      <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink">
        <p>Esta versión no instala cookies de anuncios ni de medición propia.</p>
        <p>
          El alojamiento puede usar una cookie técnica estrictamente necesaria para entregar la página.
          Si más adelante entra publicidad, esta nota dirá cuáles y para qué, antes de cargarlas.
        </p>
      </div>
    </Shell>
  );
}
