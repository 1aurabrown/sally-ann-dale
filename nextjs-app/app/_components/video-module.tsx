"use client";

import Image from "@/app/_components/Image"
import VimeoPlayer from '@/app/_components/vimeo-player'

import { useState, useEffect } from "react";

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
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  if (_type != 'videoModule') return;

  let videosrc = "https://vimeo.com/" + video;

  return (
    <section className="w-full">
      {(hasWindow && video) &&
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