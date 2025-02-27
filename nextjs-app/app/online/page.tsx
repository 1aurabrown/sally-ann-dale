import { Suspense } from "react";
import { sanityFetch } from "@/sanity/lib/live";
import Modules from '@/app/_components/modules';
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

import { onlineQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";


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
  const { data: online } = await sanityFetch({
    query: onlineQuery,
    // Metadata should never contain stega
    stega: false,
  });

  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(online?.seo?.ogImage);

  return {
    title: online?.seo?.title || online?.title,
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
      <article className="max-w-full overflow-hidden flex flex-col justify-stretch space-y-15 md:space-30 xl:space-y-55 mb-10 md:mb-30 ">
        <Modules modules={online.modules} />
      </article>
    </>
  );
}
