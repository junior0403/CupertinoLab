import { createFileRoute } from "@tanstack/react-router";
import { SectionView, sectionMeta } from "@/components/section-view";

export const Route = createFileRoute("/watch/")({
  head: () => sectionMeta("watch"),
  component: () => <SectionView slug="watch" />,
});
