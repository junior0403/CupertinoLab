import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { articles } from "@/content/articles";
import { categories, clusters } from "@/content/taxonomy";

export const Route = createFileRoute("/mapa")({
  head: () => ({
    meta: [
      { title: "Mapa del sitio · CupertinoLab" },
      {
        name: "description",
        content: "Índice de iPhone, AirPods, Watch y Duo.",
      },
    ],
  }),
  component: Mapa,
});

function Mapa() {
  return (
    <Shell>
      <h1 className="pt-8 font-serif text-4xl text-ink">Mapa</h1>
      <p className="mt-3 font-sans text-base leading-relaxed text-muted">
        iPhone, AirPods, Watch y Duo. Dentro de cada sección, la intención
        sigue marcada: señal corta, ficha o decisión de compra.
      </p>
      <ul className="mt-6 space-y-2 font-sans text-base">
        <li>
          <Link to="/" className="underline underline-offset-4">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/editorial" className="underline underline-offset-4">
            Método editorial
          </Link>
        </li>
        <li>
          <Link to="/aviso" className="underline underline-offset-4">
            Publicidad y afiliación
          </Link>
        </li>
      </ul>
      {categories.map((category) => (
        <section key={category.slug} className="mt-8">
          <h2 className="font-serif text-2xl">
            <Link
              to="/categoria/$slug"
              params={{ slug: category.slug }}
              className="underline underline-offset-4"
            >
              {category.name}
            </Link>
          </h2>
          <ul className="mt-3 space-y-2">
            {articles
              .filter((article) => article.category === category.slug)
              .map((article) => (
                <li key={article.slug} className="font-sans text-base">
                  <Link
                    to="/articulo/$slug"
                    params={{ slug: article.slug }}
                    className="underline underline-offset-4"
                  >
                    {article.title}
                  </Link>
                  <span className="ml-2 text-sm text-muted">{clusters[article.cluster]}</span>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </Shell>
  );
}
