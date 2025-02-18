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
      <div className="container my-12 lg:my-24 grid gap-12">
        <div className="pb-6 mb-6 border-b border-gray-100">
          <h2 className="header text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
            {homepage.title}
          </h2>

        </div>
        <article className="max-w-full overflow-hidden grid gap-y-6">
          <Modules modules={homepage.modules} />
        </article>
      </div>
    </>
  );
}
