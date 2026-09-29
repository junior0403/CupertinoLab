import { createFileRoute } from "@tanstack/react-router";
import { ArticleMissing, ArticleView, articleMeta, loadDeskArticle } from "@/components/article-view";

export const Route = createFileRoute("/watch/$slug")({
  loader: ({ params }) => loadDeskArticle(params.slug, "watch"),
  head: ({ loaderData }) => articleMeta(loaderData),
  component: function WatchArticle() {
    return <ArticleView article={Route.useLoaderData()} />;
  },
  notFoundComponent: ArticleMissing,
});
