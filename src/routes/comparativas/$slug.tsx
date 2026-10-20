import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleMissing, ArticleView, articleMeta } from "@/components/article-view";
import { getArticle } from "@/content/articles";
import { articlePath } from "@/content/taxonomy";

export const Route = createFileRoute("/comparativas/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article || articlePath(article) !== `/comparativas/${params.slug}`) throw notFound();
    return article;
  },
  head: ({ loaderData }) => articleMeta(loaderData),
  component: function ComparativaArticle() {
    return <ArticleView article={Route.useLoaderData()} />;
  },
  notFoundComponent: ArticleMissing,
});
