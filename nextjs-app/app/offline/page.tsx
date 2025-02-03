import { Suspense } from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { notFound } from "next/navigation";
import OfflineProjects from "./components/offline-projects"

import { offlineQuery } from "@/sanity/lib/queries";


/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data: offline } = await sanityFetch({
    query: offlineQuery,
    // Metadata should never contain stega
    stega: false,
  });

  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(offline?.seo?.ogImage);

  return {
    title: offline?.seo?.title,
    description: offline?.seo?.description,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}


export default async function OfflinePage(props: Props) {
  const { data: offline } = await sanityFetch({ query: offlineQuery });

  if (!offline?._id) {
    return notFound();
  }


  return (
    <>
      <div className="relative">
        <div className="container relative">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
            {offline.title}
          </h2>
        	<OfflineProjects projects={offline.projects} />
        </div>
      </div>
    </>
  );
}
