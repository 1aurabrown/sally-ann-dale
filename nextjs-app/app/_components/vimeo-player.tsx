"use client";

import ReactVimeoPlayer from '@u-wave/react-vimeo'

import { useState, useEffect } from "react";

import PortableText from "@/app/_components/PortableText";
import { type PortableTextBlock } from "next-sanity";

type VimeoPlayerProps = {
  video: string;
  className?: string;
  paused?: boolean;
  style?: React.CSSProperties;
};

export default function VimeoPlayer({
  video,
  className,
  paused,
  style
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
      	className={className + ' bg-green/25'}
      	style={style}
        video={video}
        responsive={true}
        showByline={false}
        showTitle={false}
        showPortrait={false}
        paused={paused}
      />

  )
}