'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import LogoSvg from './LogoSvg';

export default function Header() {
  const [headerOffset, setHeaderOffset] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [topPosition, setTopPosition] = useState(0);
  const [transitionProgress, setTransitionProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPercent = window.scrollY / viewportHeight;
      
      if (scrollPercent < 0.001) {  // No scroll
        setHeaderOffset(0);
        setIsScrolled(false);
        setTopPosition(0);
        setTransitionProgress(0);
      } else if (scrollPercent > 0.15) {  // Full transition
        setHeaderOffset(0);
        setIsScrolled(true);
        setTopPosition(-20);  // Fixed final position
        setTransitionProgress(1);
      } else {
        // Smooth transition from start
        const progress = scrollPercent / 0.15;
        setTransitionProgress(progress);
        setIsScrolled(progress > 0.5);
        setTopPosition(-20 * progress);  // Smoothly move to -20px
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm py-4 h-15' : 'pt-5'
      }`}
      style={{ 
        transform: `translateY(${headerOffset}%)`,
        top: isScrolled ? '0' : `${topPosition}px`
      }}
    >
      <div className={`container mx-auto px-4 ${isScrolled ? 'h-full' : ''}`}>
        <nav className={`flex justify-end items-center ${isScrolled ? 'mb-0' : 'mb-2'}`}>
          <div className="flex gap-4">
            <nav className="">
              <ul
                role="list"
                className="flex items-center gap-4 md:gap-6 leading-5 text-xl tracking-tight font-normal"
              >
                <li>
                  <Link className="" href="/online">
                    Online
                  </Link>
                </li>
                <li>
                  <Link className="" href="/offline">
                    Offline
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
        <div 
          className="transition-all duration-300"
          style={{ 
            marginTop: `${transitionProgress * -18}px`  // -16px = -4rem, smoothly transitioning
          }}
        >
          <LogoSvg 
            width="100%" 
            minWidth={118.5} 
            color="#000000"
            viewBoxWidth="100%"
            viewBoxHeight={126} 
          />
        </div>
      </div>
    </header>
  );
}
