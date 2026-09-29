import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleMissing, ArticleView, articleMeta } from "@/components/article-view";
import { getArticle } from "@/content/articles";

export const Route = createFileRoute("/comparativas/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (
      !article ||
      (article.slug !== "iphone-duo-vs-iphone-18-pro-max" &&
        article.slug !== "iphone-duo-vs-galaxy-z-fold8")
    ) {
      throw notFound();
    }
    return article;
  },
  head: ({ loaderData }) => articleMeta(loaderData),
  component: function ComparativaArticle() {
    return <ArticleView article={Route.useLoaderData()} />;
  },
  notFoundComponent: ArticleMissing,
});
