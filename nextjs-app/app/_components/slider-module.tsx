'use client'

import { useState, useRef, useEffect } from 'react';
import Image from '@/app/_components/Image';
import Vimeo from '@u-wave/react-vimeo';
import { type PortableTextBlock } from 'next-sanity';
import PortableText from '@/app/_components/PortableText';
import { motion, AnimatePresence } from 'framer-motion';
import { urlForImage } from "@/sanity/lib/utils";

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './slider-module.module.css';


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
  items,
}: SliderModuleProps) {
  const [slideData, setSlideData] = useState({
    current: 0,
    direction: null,
    loading: false
  });

  const [bottomPadding, setBottomPadding] = useState(0);

  const textRef=useRef<HTMLInputElement>(null)

  const updateBottomPadding = () => {
    setBottomPadding(textRef?.current?.clientHeight)
  }

  useEffect(() => {
    updateBottomPadding()
  }, [slideData])


  useEffect(() => {
    const handleResize = () => {
      updateBottomPadding()
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
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
    adaptiveHeight: true,
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


  const style = { '--slider-module-padding-bottom': bottomPadding + 'px' } as React.CSSProperties
  return (<section className={"w-full max-w-full " + styles.sliderModule } style={ style }>
    <div className="slider-container">
      <Slider {...settings}>
        {items.map(({ video, image, heading, body }, index) => {
          const isCurrent = index == slideData.current;
          return(
            <div key={index} className={styles.slideContent} >
              {video?.length &&
                <Vimeo
                  video={video}
                  responsive={true}
                  paused={() => {true}}
                  style={{backgroundImage: (image ? `url(${urlForImage(image)?.auto("format").url()})` : '')}}
                />
              }
              { !(video?.length) && image &&
                <Image className="w=full" image={image} />
              }

              <div className="relative w-full">
                <div className={ 'left-0 w-full right-0 top-0 transition-opacity duration-500 ' + (isCurrent ? 'opacity-100' : 'opacity-0') }>
                  <div ref={isCurrent ? textRef : null}>
                    {heading && <h2 className="header pt-2 text-24 md:text-36 lg:text-48">{heading}</h2>}
                    {body && <PortableText
                      value={body as PortableTextBlock[]}
                    />}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  </section>);
}
