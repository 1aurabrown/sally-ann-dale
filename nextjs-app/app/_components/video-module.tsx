import Image from "@/app/_components/Image"

import PortableText from "@/app/_components/PortableText";
import { type PortableTextBlock } from "next-sanity";

type VideoModuleProps = {
  _type: string;
  video: string;
  image: any;
  text: PortableTextBlock[];
};

export default function VideoModule({
  _type,
  video,
  image,
  text
}: VideoModuleProps) {

  if (_type != 'videoModule') return;

  const content = { __html: video }
  return (
    <section>
      {video &&
        <div dangerouslySetInnerHTML={content}></div>
      }

      {text?.length && (
        <PortableText
          className="px-10 mt-3"
          value={text as PortableTextBlock[]}
        />
      )}
    </section>
  )
}