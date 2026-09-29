import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ClusterMark, Shell } from "@/components/chrome";
import { articlesInCategory } from "@/content/articles";
import { categoryBySlug } from "@/content/taxonomy";

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const category = categoryBySlug(params.slug);
    if (!category) throw notFound();
    return {
      category,
      articles: articlesInCategory(category.slug),
    };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.category.name} · CupertinoLab` },
          { name: "description", content: loaderData.category.dek },
        ]
      : [],
  }),
  component: CategoryPage,
  notFoundComponent: MissingCategory,
});

function CategoryPage() {
  const { category, articles } = Route.useLoaderData();
  return (
    <Shell>
      <p className="pt-8 font-sans text-sm text-muted">
        <Link to="/" className="underline underline-offset-4">
          Inicio
        </Link>
        {" · Sección"}
      </p>
      <h1 className="mt-3 font-serif text-4xl text-ink">{category.name}</h1>
      <p className="mt-3 font-sans text-base leading-relaxed text-muted">{category.dek}</p>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link to="/articulo/$slug" params={{ slug: article.slug }} className="block py-4">
              <ClusterMark cluster={article.cluster} />
              <span className="mt-1 block font-serif text-xl text-ink">{article.title}</span>
              <span className="mt-1 block font-sans text-sm leading-relaxed text-muted">
                {article.directAnswer}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Shell>
  );
}

function MissingCategory() {
  return (
    <Shell>
      <h1 className="pt-10 font-serif text-4xl">Sección inexistente</h1>
      <Link to="/mapa" className="mt-4 inline-block underline underline-offset-4">
        Ver el mapa
      </Link>
    </Shell>
  );
}
