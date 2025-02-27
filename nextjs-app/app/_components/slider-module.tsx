'use client'

import { useState } from 'react';
import Image from "@/app/_components/Image";
import { type PortableTextBlock } from "next-sanity";
import PortableText from "@/app/_components/PortableText";
import { motion, AnimatePresence } from 'framer-motion';
import VimeoPlayer from '@u-wave/react-vimeo'

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-module.css";

type SliderModuleProps = {
  _type: string;
  items: {
    image?: any;
    video?: string;
    heading: string;
    body: PortableTextBlock[];
  }[];
};

export default function SliderModule({
  _type,
  items
}: SliderModuleProps) {
  const [slideData, setSlideData] = useState({
    current: 0,
    direction: null,
    loading: false
  });

  if (_type != 'sliderModule') return;
  
  var settings = {
    className: "max-w-full",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '25%',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
    beforeChange: (current, next) => {
      setSlideData(prev => ({
        ...prev,
        current: next,
      }));
    },
  };

  return (
    <section className="w-full max-w-full">
      <div className="slider-container">
        <Slider {...settings}>
          {items.map(({ video, image, heading, body }, index) => {
            const isCurrent = index == slideData.current
            return (
              <div className="border-black border flex items-center justify-center" key={index} >
                {image && <Image className="w=full" image={image} />}

                  <div className="relative">
                    <AnimatePresence initial={false}>
                      {isCurrent && (<motion.div
                        className='absolute left-0'
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: 'auto' },
                          collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        style={{ overflow: 'hidden' }}
                      >
                        {heading && <h2 className="header text-24 md:text-36 lg:text-48">{heading}</h2>}
                        {body && <PortableText
                          value={body as PortableTextBlock[]}
                        />}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            )

          })}
        </Slider>
      </div>
    </section>
  );
}