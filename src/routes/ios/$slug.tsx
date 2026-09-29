import { createFileRoute } from "@tanstack/react-router";
import { ArticleMissing, ArticleView, articleMeta, loadDeskArticle } from "@/components/article-view";

export const Route = createFileRoute("/ios/$slug")({
  loader: ({ params }) => loadDeskArticle(params.slug, "ios"),
  head: ({ loaderData }) => articleMeta(loaderData),
  component: function IosArticle() {
    return <ArticleView article={Route.useLoaderData()} />;
  },
  notFoundComponent: ArticleMissing,
});
