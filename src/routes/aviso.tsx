import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";

export const Route = createFileRoute("/aviso")({
  head: () => ({
    meta: [
      { title: "Publicidad y afiliación · CupertinoLab" },
      {
        name: "description",
        content:
          "Cómo se marcan los anuncios y los futuros enlaces de afiliado en CupertinoLab.",
      },
    ],
  }),
  component: Aviso,
});

function Aviso() {
  return (
    <Shell>
      <h1 className="pt-8 font-serif text-4xl text-ink">Publicidad y afiliación</h1>
      <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink">
        <p>
          Los espacios marcados «Publicidad» son huecos reservados. Van en el
          cuerpo del texto, nunca pegados a un botón, y no dicen «pulsa aquí».
          No hay anuncio fijo en la parte baja de la pantalla: en el móvil, el
          pulgar lo confunde con la navegación.
        </p>
        <p>
          Hoy no hay enlaces de compra. Cuando existan —funda, o el teléfono el
          día en que la tienda lo venda— irán identificados como afiliados.
          Un enlace de afiliado no cambia una ficha: si el accesorio no se puede
          probar, no se recomienda.
        </p>
        <p>
          CupertinoLab no pide que se haga clic en anuncios, ni en los vídeos ni en
          la página. El tráfico que llega de TikTok se queda a leer la
          respuesta. El clic en un anuncio no es parte del trato.
        </p>
        <p>
          Apple, iPhone y el resto de nombres son de sus dueños. Esta redacción
          no está autorizada por ellos.
        </p>
      </div>
    </Shell>
  );
}
