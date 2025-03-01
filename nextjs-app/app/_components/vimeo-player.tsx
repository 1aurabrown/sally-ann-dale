"use client";

import ReactVimeoPlayer from '@u-wave/react-vimeo'

import { useState, useEffect } from "react";

import PortableText from "@/app/_components/PortableText";
import { type PortableTextBlock } from "next-sanity";

type VimeoPlayerProps = {
  video: string;
  className?: string;
};

export default function VimeoPlayer({
  video,
  className
}: VimeoPlayerProps) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);


  let videosrc = "https://vimeo.com/" + video;

  return (
    (hasWindow && video) &&
      <ReactVimeoPlayer
      	className={className}
        video={video}
        responsive={true}
        showByline={false}
        showTitle={false}
        showPortrait={false}
      />

  )
}