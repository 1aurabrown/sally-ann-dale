import { stegaClean } from "@sanity/client/stega";
import { Image } from "next-sanity/image";

import { urlForImage } from "@/sanity/lib/utils";

interface ImageProps {
  image: any;
  width?: number;
  height?: number;
  aspectRatio?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  objectFit?: 'cover' | 'contain';
}

export default function CoverImage(props: ImageProps) {
  const { image, width, height, aspectRatio, sizes, priority, className, objectFit = 'contain' } = props;

  const img = image ? (
    <Image
      className={className}
      width={width || image.width || 500}
      height={height || width * aspectRatio || image.height || 500}
      alt={stegaClean(image?.alt) || ""}
      src={ urlForImage(image)?.auto("format").url() as string }
      sizes={sizes || '100vw'}
      priority={priority}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: "100%" }} />
  );

  return img;
}