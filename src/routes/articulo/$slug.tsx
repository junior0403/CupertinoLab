import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { getArticle } from "@/content/articles";
import { articlePath } from "@/content/taxonomy";

export const Route = createFileRoute("/articulo/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    throw redirect({ href: articlePath(article), statusCode: 301 });
  },
});
