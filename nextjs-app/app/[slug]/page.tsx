import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { type PortableTextBlock } from "next-sanity";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";

import PortableText from "@/app/_components/PortableText";
import { sanityFetch } from "@/sanity/lib/live";
import { textPagesSlugs, getTextPageQuery } from "@/sanity/lib/queries";

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: textPagesSlugs,
    // Use the published perspective in generateStaticParams
    perspective: "published",
    stega: false,
  });
  return data;
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const { data: page } = await sanityFetch({
    query: getTextPageQuery,
    params,
    // Metadata should never contain stega
    stega: false,
  });

  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(page?.seo?.ogImage);

  return {
    title: page?.seo?.title || page?.title,
    description: page?.seo?.description,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function TextPage(props: Props) {
  const params = await props.params;
  const [{ data: page }] = await Promise.all([
    sanityFetch({ query: getTextPageQuery, params }),
  ]);

  if (!page?._id) {
    return notFound();
  }

  return (
    <>
      <div className="page-padding max-w-screen-lg mb-10 md:mb-30">
        <h1 className="header text-24 md:text-36 lg:text-64 my-5 md:my-10">
          {page.title}
        </h1>
        <article>
          {page.body?.length && (
            <PortableText
              value={page.body as PortableTextBlock[]}
            />
          )}
        </article>
      </div>

    </>
  );
}
