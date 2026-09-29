import { createFileRoute } from "@tanstack/react-router";
import { SectionView, sectionMeta } from "@/components/section-view";

export const Route = createFileRoute("/iphone/iphone-duo/")({
  head: () => sectionMeta("iphone-duo"),
  component: () => <SectionView slug="iphone-duo" />,
});
