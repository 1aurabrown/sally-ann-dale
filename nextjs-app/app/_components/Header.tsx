'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import LogoSvg from './LogoSvg';

export default function Header() {
  const [headerOffset, setHeaderOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPercent = window.scrollY / viewportHeight;
      
      if (scrollPercent < 0.20) {
        setHeaderOffset(0);
      } else if (scrollPercent > 0.28) {
        setHeaderOffset(-100);
      } else {
        // Calculate position between 0 and -100 based on scroll progress
        const progress = (scrollPercent - 0.20) / (0.28 - 0.20);
        setHeaderOffset(-100 * progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="w-full fixed left-0 z-50"
      style={{ transform: `translateY(${headerOffset}%)` }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-end items-center mb-4">
          <div className="flex gap-4">
            <nav className="">
              <ul
                role="list"
                className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
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
        <div>
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
