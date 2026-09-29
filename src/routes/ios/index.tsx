import { createFileRoute } from "@tanstack/react-router";
import { SectionView, sectionMeta } from "@/components/section-view";

export const Route = createFileRoute("/ios/")({
  head: () => sectionMeta("ios"),
  component: () => <SectionView slug="ios" />,
});
