import { Suspense } from "react";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import Modules from '@/app/_components/modules';
import { homeQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";



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
  const { data: homepage } = await sanityFetch({
    query: homeQuery,
    // Metadata should never contain stega
    stega: false,
  });

const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(homepage?.seo?.ogImage);

  return {
    title: homepage?.seo?.title || homepage?.title,
    description: homepage?.seo?.description,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function homepagePage(props: Props) {
  const { data: homepage } = await sanityFetch({ query: homeQuery });

  if (!homepage?._id) {
    return notFound();
  }

  return (
    <>
      <article className="max-w-full flex flex-col justify-stretch space-y-15 md:space-30 xl:space-y-55 pb-10 md:pb-30 ">
        <Modules modules={homepage.modules} />
      </article>
    </>
  );
}
