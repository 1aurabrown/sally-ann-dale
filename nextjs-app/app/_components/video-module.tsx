import Image from '@/app/_components/Image';
import Vimeo from '@u-wave/react-vimeo';

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

  return (
    <section>
      {video?.length &&
        <Vimeo
          video={video}
          responsive={true}
          style={{backgroundImage: (image ? `url(${urlForImage(image)?.auto("format").url()})` : '')}}
        />
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