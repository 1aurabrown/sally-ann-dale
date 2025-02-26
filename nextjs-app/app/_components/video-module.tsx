"use client";

import Image from "@/app/_components/Image"
import VimeoPlayer from '@u-wave/react-vimeo'

import { useState, useEffect } from "react";

import PortableText from "@/app/_components/PortableText";
import { type PortableTextBlock } from "next-sanity";

type TextModuleProps = {
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
}: TextModuleProps) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  if (_type != 'videoModule') return;

  let videosrc = "https://vimeo.com/" + video;

  return (
    <section>
      {(hasWindow && video) &&
        <VimeoPlayer
          video={video}
          responsive={true}
          showByline={false}
          showTitle={false}
          showPortrait={false}
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