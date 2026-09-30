import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleLink } from "@/components/article-card";
import { Shell } from "@/components/chrome";
import { articlesInSection } from "@/components/section-view";
import { sections } from "@/content/taxonomy";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mapa")({
  head: () =>
    pageMeta({
      title: "Mapa · CupertinoLab",
      description:
        "Índice de las fichas publicadas: iPhone, iPhone Duo, iOS, AirPods, Watch, comparativas y guías.",
      path: "/mapa",
    }),
  component: Mapa,
});

function Mapa() {
  return (
    <Shell width="wide">
      <h1 className="pt-8 font-serif text-4xl text-ink md:text-5xl">Mapa</h1>
      <p className="mt-3 max-w-prose font-sans text-base leading-relaxed text-muted">
        Todas las fichas publicadas, agrupadas por sección. Una pieza nueva entra sola en su grupo.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        {sections
          .filter((section) => articlesInSection(section.slug).length > 0)
          .map((section) => {
          const items = articlesInSection(section.slug);
          return (
            <section key={section.slug} className="border-t border-line pt-4">
              <h2 className="font-sans text-xs font-medium tracking-widest text-oxide uppercase">
                <a href={section.path} className="underline underline-offset-4">
                  {section.name}
                </a>
              </h2>
              {items.length === 0 ? null : (
                <ul className="mt-3 space-y-2">
                  {items.map((article) => (
                    <li key={article.slug}>
                      <ArticleLink
                        article={article}
                        className="font-serif text-xl leading-snug text-ink underline decoration-line underline-offset-4"
                      >
                        {article.title}
                      </ArticleLink>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
      <p className="mt-10 font-sans text-sm text-muted">
        <Link to="/editorial" className="underline underline-offset-4">
          Método
        </Link>
        {" · "}
        <Link to="/aviso" className="underline underline-offset-4">
          Publicidad
        </Link>
      </p>
    </Shell>
  );
}
