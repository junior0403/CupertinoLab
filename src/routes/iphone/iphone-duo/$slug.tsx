import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { ArticleMissing, ArticleView, articleMeta } from "@/components/article-view";
import { getArticle } from "@/content/articles";
import { articlePath, legacyArticleHrefs } from "@/content/taxonomy";

export const Route = createFileRoute("/iphone/iphone-duo/$slug")({
  loader: ({ params }) => {
    const legacy = legacyArticleHrefs[params.slug];
    if (legacy) throw redirect({ href: legacy, statusCode: 301 });
    const article = getArticle(params.slug);
    if (!article || article.category !== "duo") throw notFound();
    const canonical = articlePath(article);
    if (canonical !== `/iphone/iphone-duo/${params.slug}`) {
      throw redirect({ href: canonical, statusCode: 301 });
    }
    return article;
  },
  head: ({ loaderData }) => articleMeta(loaderData),
  component: function DuoArticle() {
    return <ArticleView article={Route.useLoaderData()} />;
  },
  notFoundComponent: ArticleMissing,
});

