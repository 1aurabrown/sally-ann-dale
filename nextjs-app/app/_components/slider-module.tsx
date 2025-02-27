'use client'

import { useState } from 'react';
import Image from "@/app/_components/Image";
import { type PortableTextBlock } from "next-sanity";
import PortableText from "@/app/_components/PortableText";
import { motion, AnimatePresence } from 'framer-motion';

type SliderModuleProps = {
  _type: string;
  items: {
    image: any;
    heading: string;
    body: PortableTextBlock[];
  }[];
};

export default function SliderModule({
  _type,
  items
}: SliderModuleProps) {
  if (_type != 'sliderModule') return;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Calculate the previous and next indices with wrap-around
  const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;

  return (
    <section className="page-padding relative">
      {/* Image slider */}
      <div className="flex h-[300px] md:h-[400px]">
        {/* Previous slide thumbnail */}
        <div 
          className="w-1/5 cursor-pointer pr-2 h-full" 
          onClick={prevSlide}
        >
          {items[prevIndex]?.image && (
            <div className="relative h-full">
              <div className="absolute inset-0 bg-black/40"></div>
              <Image 
                className="w-full h-full object-cover" 
                image={items[prevIndex].image} 
              />
            </div>
          )}
        </div>
        
        {/* Main slide */}
        <div className="w-3/5 h-full relative overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: direction * 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction * -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              {items[currentIndex]?.image && (
                <div className="relative h-full">
                  <Image 
                    className="w-full h-full object-cover" 
                    image={items[currentIndex].image} 
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Next slide thumbnail */}
        <div 
          className="w-1/5 cursor-pointer pl-2 h-full" 
          onClick={nextSlide}
        >
          {items[nextIndex]?.image && (
            <div className="relative h-full">
              <div className="absolute inset-0 bg-black/40"></div>
              <Image 
                className="w-full h-full object-cover" 
                image={items[nextIndex].image} 
              />
            </div>
          )}
        </div>
      </div>

      {/* Text content below the slider */}
      <div className="mt-6 w-3/5 mx-auto">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {items[currentIndex]?.heading && (
              <h2 className="header text-24 md:text-36 lg:text-48 mb-2">
                {items[currentIndex].heading}
              </h2>
            )}
            {items[currentIndex]?.body?.length && (
              <div className="text-16">
                <PortableText value={items[currentIndex].body as PortableTextBlock[]} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`h-2 w-2 rounded-full ${
              i === currentIndex ? 'bg-green' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}