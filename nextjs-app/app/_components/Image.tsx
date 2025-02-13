import { stegaClean } from "@sanity/client/stega";
import { Image } from "next-sanity/image";

import { urlForImage } from "@/sanity/lib/utils";

interface CoverImageProps {
  image: any;
  priority?: boolean;
}

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority } = props;

  const image = source?.asset?._ref ? (
    <Image
      className="object-contain"
      fill={true}
      alt={stegaClean(source?.alt) || ""}
      src={
        urlForImage(source)
          ?.height(845)
          .width(954)
          .auto("format")
          .url() as string
      }
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: "100%" }} />
  );

  return (
    <div 
      className="relative w-full h-[100vh] mx-auto"
      style={{ 
        aspectRatio: '954/845', 
        maxHeight: '845px',
        maxWidth: '954px',
        margin: '0 auto',
        lineHeight: 0,
        fontSize: 0,
        verticalAlign: 'top'
      }}
    >
      {image}
    </div>
  );
}