import { resolveOpenGraphImage } from "@/sanity/lib/utils";

export async function formatMetadata(page, parent) {
	const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(page?.seo?.ogImage);
  return {
    title: page?.title,
    description: page?.seo?.description,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  }
}