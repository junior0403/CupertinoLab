import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { getArticle } from "@/content/articles";
import { articlePath, legacyArticleHrefs } from "@/content/taxonomy";

export const Route = createFileRoute("/articulo/$slug")({
  loader: ({ params }) => {
    const legacy = legacyArticleHrefs[params.slug];
    if (legacy) throw redirect({ href: legacy, statusCode: 301 });
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    throw redirect({ href: articlePath(article), statusCode: 301 });
  },
});

