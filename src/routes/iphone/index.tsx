import { createFileRoute } from "@tanstack/react-router";
import { SectionView, sectionMeta } from "@/components/section-view";

export const Route = createFileRoute("/iphone/")({
  head: () => sectionMeta("iphone"),
  component: () => <SectionView slug="iphone" />,
});
