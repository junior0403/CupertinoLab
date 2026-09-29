import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos · CupertinoLab" },
      { name: "description", content: "Condiciones de uso de CupertinoLab." },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <Shell>
      <h1 className="pt-8 font-serif text-4xl text-ink">Términos</h1>
      <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink">
        <p>
          CupertinoLab publica fichas editoriales. No es Apple, no es una tienda y no cierra una compra
          por ti. Las cifras cambian cuando cambia la ficha del fabricante.
        </p>
        <p>
          Lo que no está medido se dice. No copies una pieza entera. Enlazar una ficha, sí.
        </p>
      </div>
    </Shell>
  );
}
