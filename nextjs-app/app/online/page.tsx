import { Suspense } from "react";
import { sanityFetch } from "@/sanity/lib/live";
import Modules from '../components/modules';
import { notFound } from "next/navigation";

import { onlineQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";


/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data: online } = await sanityFetch({
    query: onlineQuery,
    // Metadata should never contain stega
    stega: false,
  });

  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(online?.seo?.ogImage);

  return {
    title: online?.seo?.title,
    description: online?.seo?.description,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function OnlinePage(props: Props) {
  const { data: online } = await sanityFetch({ query: onlineQuery });

  if (!online?._id) {
    return notFound();
  }

  return (
    <>
      <div className="">
        <div className="container relative">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
            {online.title}
          </h2>


	        <Modules modules={online.modules} />
        </div>
      </div>
    </>
  );
}
