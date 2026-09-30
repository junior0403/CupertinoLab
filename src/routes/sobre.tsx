import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () =>
    pageMeta({
      title: "Sobre CupertinoLab",
      description: "Publicación independiente sobre iPhone, iOS y el ecosistema Apple.",
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
          iPhone Duo. No pertenece a Apple ni vende sus productos.
        </p>
        <p>
          Cada ficha separa la cifra publicada de lo que todavía nadie ha medido. El método está
          escrito en{" "}
          <Link to="/editorial" className="underline underline-offset-4">
            Método
          </Link>
          .
        </p>
      </div>
    </Shell>
  );
}
