import Image from "@/app/_components/Image"
import VimeoPlayer from '@/app/_components/vimeo-player'

import PortableText from "@/app/_components/PortableText";
import { type PortableTextBlock } from "next-sanity";

type VideoModuleProps = {
  _type: string;
  video: any;
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

  let videosrc = "https://vimeo.com/" + video;

  return (
    <section className="w-full first:mt-10 first:lg:mt-18">
      {video?.length &&
        <VimeoPlayer
          className='w-full'
          video={video}
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