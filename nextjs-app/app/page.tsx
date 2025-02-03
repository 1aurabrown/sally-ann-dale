import { Suspense } from "react";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import Modules from './components/modules';
import { homeQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";


/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data: homepage } = await sanityFetch({
    query: homeQuery,
    // Metadata should never contain stega
    stega: false,
  });

  console.log(homepage)
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(homepage?.seo?.ogImage);

  return {
    title: homepage?.seo?.title,
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
      <div className="">
        <div className="container my-12 lg:my-24 grid gap-12">
          <div>
            <div className="pb-6 grid gap-6 mb-6 border-b border-gray-100">
              <div className="max-w-3xl flex flex-col gap-6">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
                  {homepage.title}
                </h2>
              </div>

            </div>
            <article className="gap-6 grid max-w-4xl">
              <Modules modules={homepage.modules} />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
