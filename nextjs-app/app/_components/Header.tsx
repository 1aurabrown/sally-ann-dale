'use client'

import { motion, AnimatePresence } from "framer-motion";

import ResolvedLink from './ResolvedLink'
import { useState, useEffect } from "react";
import Link from "next/link";
import LogoSvg from './LogoSvg';

import { usePathname } from "next/navigation";

export type HeaderProps = {
  nav?: Array<any>;
};

export function Header({
  nav,
}: HeaderProps) {

  // Turn these into useState and adjust (especially scale) based on current viewport size.
  const startPercent = .15;
  const endPercent = .5;

  const endScale = 1;
  const endY = 0;

  const [headerOffset, setHeaderOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [whiteBackground, setWhiteBackground] = useState(false);
  const [translateY, setTranslateY] = useState(endY);
  const [scale, setScale] = useState(endScale);
  const [logoVisible, setLogoVisible] = useState(false);

  const pageType = usePathname();

  useEffect(() => {
    setMobileNavVisible(false)
    const isHomepage = (pageType === '/')

    if (!isHomepage) {
      setScale(endScale)
      setTranslateY(endY)
      setWhiteBackground(true)
      setLogoVisible(true)
    }

    const handleScroll = () => {
      var startScale, startY;
      const viewWidth = window.innerWidth;
      if (viewWidth < 640 ) {
        startScale = (viewWidth - 100)/ 118
      } else if (viewWidth < 1280 ) {
        startScale = (viewWidth - 40)/ 118
      } else {
        startScale = 10.15
      }

      if (viewWidth < 640 ) {
        setIsMobile(true)
        startY = -8
      } else {
        setIsMobile(false)
        setMobileNavVisible(false)
        startY = startScale * 8
      }


      const scrollPercent = window.scrollY / window.innerHeight;

      // Before Start
      if (scrollPercent <= startPercent) {
        setTranslateY(startY)
        setScale(startScale)
        setWhiteBackground(false)

      // After End
      } else if (scrollPercent >= endPercent) {
        setTranslateY(endY)
        setScale(endScale)
        setWhiteBackground(true)

        // During Transition
      } else {

        var progress = Math.max(0, Math.min(1, (scrollPercent - startPercent) / (endPercent - startPercent) ));

        setWhiteBackground(progress >= 1);
        setTranslateY((endY - startY) * progress + startY)
        setScale((endScale - startScale) * progress + startScale)
      }
      setLogoVisible(true)
    };

    if (isHomepage) {
      window.addEventListener('resize', handleScroll);
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    }
  }, [pageType]);

  useEffect(() => {
    const scrollingElement = document.scrollingElement as HTMLElement;
    if(mobileNavVisible) {
      scrollingElement.style.overflow = 'hidden'
    } else {
      scrollingElement.style.overflow = ''
    }
  }, [mobileNavVisible])

  return (
      <header
        className={'w-full h-header sticky px-6 top-0 z-20 grid grid-tempate grid-cols-[1fr_auto_1fr] items-center transition-all duration-200' + (whiteBackground ? ' bg-white/95' : '')}
      >

      {isMobile && <div className="z-50">
        <button
          className={`relative z-10${mobileNavVisible ? ' text-white' : ''}`}
          onClick={()=>setMobileNavVisible(!mobileNavVisible)}
        >{mobileNavVisible ? '\u2715' : '\u2261'}</button>

        <AnimatePresence>
         {(isMobile && mobileNavVisible) &&
          <motion.div
            key="mobileNav"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { opacity: 1 },
              closed: { opacity: 0 }
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-green">
            <nav className="">
              <ul
                role="list"
                className="font-serif text-white text-48 py-10 px-4"
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
          </motion.div>
        }
        </AnimatePresence>
      </div>}

      <div
        className="col-start-2"
        style={{transform: `translateY(${translateY}px)` }}
      >
        <Link
          className={`origin-top text-black block ${logoVisible ? '' : 'hidden'}`}
          style={{transform: `scale(${scale})`}}
          href="/">
          <LogoSvg />
        </Link>
      </div>



      {!isMobile && nav?.length && <nav className='flex col-start-3 justify-end items-center gap-4'>
        <ul
          role="list"
          className="flex items-center gap-4 md:gap-6 leading-5 text-12 tracking-tight font-normal"
        >
          {nav.map(navItem => {
            return(
              <li key={navItem._key}>
                <ResolvedLink link={navItem}>{navItem.title}</ResolvedLink>
              </li>
            )
          })}
        </ul>
      </nav>}
    </header>
  );
}
