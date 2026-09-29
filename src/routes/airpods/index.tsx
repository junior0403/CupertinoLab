import { createFileRoute } from "@tanstack/react-router";
import { SectionView, sectionMeta } from "@/components/section-view";

export const Route = createFileRoute("/airpods/")({
  head: () => sectionMeta("airpods"),
  component: () => <SectionView slug="airpods" />,
});
