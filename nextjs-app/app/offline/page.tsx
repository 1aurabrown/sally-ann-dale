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
      <article className="mt-10 lg:mt-18">
      	<OfflineProjects projects={offline.projects} />
      </article>
    </>
  );
}
