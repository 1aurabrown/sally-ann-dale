'use client'

import ResolvedLink from './ResolvedLink'
import { useState, useEffect } from "react";
import Link from "next/link";
import LogoSvg from './LogoSvg';


export type HeaderProps = {
  nav?: Array<any>;
};

export function Header({
  nav,
}: HeaderProps) {
  const [headerOffset, setHeaderOffset] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [topPosition, setTopPosition] = useState(0);
  const [transitionProgress, setTransitionProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPercent = window.scrollY / viewportHeight;
      
      if (scrollPercent < 0.001) {  // No scroll
        setIsScrolled(false);
        setTransitionProgress(0);
      } else if (scrollPercent > 0.15) {  // Full transition
        setIsScrolled(true);
        setTransitionProgress(1);
      } else {
        // Smooth transition from start
        const progress = scrollPercent / 0.15;
        setTransitionProgress(progress);
        setIsScrolled(progress > 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed left-0 z-50 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm py-4 h-15' : 'pt-5'
      }`}
      
    >
      <div className={`container mx-auto px-4 ${isScrolled ? 'h-full' : ''}`}>
        {nav?.length && <nav className={`flex justify-end items-center ${isScrolled ? 'mb-0' : 'mb-2'}`}>
          <div className="flex gap-4">
            <nav className="">
              <ul
                role="list"
                className="flex items-center gap-4 md:gap-6 leading-5 text-xl tracking-tight font-normal"
              >
                {nav.map(navItem => {
                  return(
                    <li key={navItem._key}>
                      <ResolvedLink link={navItem}>{navItem.title}</ResolvedLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </nav>}
        <div 
          className="transform translate-y-[-25px] sm:translate-y-[-20px] md:translate-y-[-23px] xl:translate-y-[-18px]"
          style={{ 
            '--scroll-progress': transitionProgress,
            '--translate-y': 'var(--tw-translate-y)',
            transform: `translateY(calc(var(--scroll-progress) * var(--translate-y)))`
          } as React.CSSProperties}
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
