import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Privacidad · CupertinoLab" },
      { name: "description", content: "Qué datos trata CupertinoLab. Hoy, casi ninguno." },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <Shell>
      <h1 className="pt-8 font-serif text-4xl text-ink">Privacidad</h1>
      <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink">
        <p>No hay cuentas, ni boletín, ni formulario. No vendemos datos porque no los recogemos.</p>
        <p>
          El sitio está alojado en Netlify. El servidor puede registrar la petición técnica (dirección
          IP, hora, página) para servir y proteger el sitio. No usamos esa información para perfiles.
        </p>
        <p>No hay anuncios ni píxeles de publicidad en esta versión.</p>
      </div>
    </Shell>
  );
}
