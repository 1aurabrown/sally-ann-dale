import { stegaClean } from "@sanity/client/stega";
import { Image } from "next-sanity/image";

import { urlForImage } from "@/sanity/lib/utils";

interface CoverImageProps {
  image: any;
  priority?: boolean;
  className?: string;
}

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority, className } = props;

  const image = source?.asset?._ref ? (
    <Image
      className={`object-contain ${className || ''}`}
      fill={true}
      alt={stegaClean(source?.alt) || ""}
      src={
        urlForImage(source)
          ?.auto("format")
          .url() as string
      }
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: "100%" }} />
  );

  return (
    <div className="relative w-full h-full">
      {image}
    </div>
  );
}