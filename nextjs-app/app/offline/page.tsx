import { Suspense } from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { notFound } from "next/navigation";
import OfflineProjects from "./components/offline-projects"
import type { Metadata, ResolvingMetadata } from "next";

import { offlineQuery } from "@/sanity/lib/queries";


/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */

type Props = {
  params: Promise<{ slug: string }>;
};

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
    title: offline?.seo?.title || offline?.title,
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
      <div className="container my-12 lg:my-24 grid gap-12">
        <div className="pb-6 mb-6 border-b border-gray-100">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
            {offline.title}
          </h2>

        </div>
        <article className="max-w-full overflow-hidden grid gap-y-6">
        	<OfflineProjects projects={offline.projects} />
        </article>
      </div>
    </>
  );
}
