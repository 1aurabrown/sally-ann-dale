import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { createDataAttribute, CreateDataAttributeProps } from "next-sanity";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

type Link = {
  url?: string;
  linkType: string;
  page?: {
    "type": string;
    "slug": string;
    "isHome": boolean;
  }
}

export const urlForImage = (source: any) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined;
  }
  return imageBuilder?.image(source).auto("format").fit("max");
};

export function resolveOpenGraphImage(image: any, width = 1200, height = 627) {
  if (!image) return;
  const url = urlForImage(image)?.width(1200).height(627).fit("crop").url();
  if (!url) return;
  return { url, alt: image?.alt as string, width, height };
}

// Depending on the type of link, we need to fetch the corresponding page, post, or URL.  Otherwise return null.
export function linkResolver(link: Link | undefined) {

  if (!link) return null;

  // If linkType is not set but url is, lets set linkType to "url".  This comes into play when pasting links into the portable text editor because a link type is not assumed.
  if (!link.linkType && link.url) {
    link.linkType = "url";
  }

  switch (link.linkType) {
    case "url":
      return link.url || null;
    case "page":
      if (link?.page && link.page?.isHome === true) {
        return `/`;
      } else {
        return link?.page?.slug
      }
    default:
      return null;
  }
}

type DataAttributeConfig = CreateDataAttributeProps &
  Required<Pick<CreateDataAttributeProps, "id" | "type" | "path">>;

export function dataAttr(config: DataAttributeConfig) {
  return createDataAttribute({
    projectId,
    dataset,
    baseUrl: studioUrl,
  }).combine(config);
}
