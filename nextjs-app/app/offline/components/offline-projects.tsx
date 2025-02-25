'use client';

import { type PortableTextBlock } from "next-sanity";
import PortableText from "@/app/_components/PortableText";
import Image from "@/app/_components/Image";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


type ProjectRowProps = {
  _key: string;
  images: any[];
  text: PortableTextBlock[];
}

type ProjectProps = {
  _id: string;
  title: string;
  year: string;
  rows: Array<ProjectRowProps>
};

export type OfflineProjectsProps = {
  projects: any[]
};

// ... existing code ...
export function OfflineProjects({
  projects
}: OfflineProjectsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="">
      { projects?.length && projects.map((project, i) => {
        return (
          <OfflineProject 
            i={i} 
            project={project} 
            key={project._id} 
            openIndex={openIndex} 
            setOpenIndex={setOpenIndex} 
          />
        )}
      )}
    </section>
  )
}

function OfflineProject({ i, project, openIndex, setOpenIndex }: {
  i: number;
  project: ProjectProps;
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}) {
  const isOpen = i === openIndex;

  return (
    <>
      <motion.header
        className={`border-t border-black py-4 w-full header text-4xl flex justify-between items-center ${!isOpen ? 'cursor-pointer hover:text-green' : ''}`}
        initial={false}
        onClick={() => !isOpen && setOpenIndex(i)}
      >
        <span>
          {project.title}
        </span>
        <span 
          className="header text-4xl cursor-pointer hover:text-green"
          onClick={(e) => {
            e.stopPropagation();
            setOpenIndex(isOpen ? null : i);
          }}
        >
          {isOpen ? '−' : '+'}
        </span>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            style={{ overflow: 'hidden' }}
            className=""
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="py-8">
              {project.rows?.length && project.rows.map((row) => {
                return(<ProjectRow key={row._key} {...row} />)
              })}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}



function ProjectRow({images, text}: ProjectRowProps) {
  return (
    <div className="flex mb-8 flex-col md:flex-row md:gap-8">
      <div className={`${images.length > 1 ? 'md:w-2/3' : 'md:w-1/3'}`}>
        <ul className={`space-y-4 md:space-y-0 md:flex md:gap-8 ${images.length === 1 ? 'md:justify-center' : 'md:w-full'}`}>
          {images.map((image, index) => {
            const ref = image.asset._ref;
            const dimensions = ref ? ref.split('-')[2].split('x').map(Number) : [1200, 800];
            const [width, height] = dimensions;
            
            return (
              <li key={image._key} 
                className="relative"
                style={{ 
                  width: width / 2, 
                  height: height / 2,
                  flex: images.length > 1 ? '1 1 auto' : '0 0 auto'
                }}
              >
                <Image 
                  image={image} 
                  className="h-full"
                  objectFit="cover"
                />
              </li>
            )
          })}
        </ul>
      </div>
      
      {text?.length && (
        <div className={`mt-4 md:mt-0 ${images.length > 1 ? 'md:w-1/3' : 'md:w-2/3'}`}>
          <PortableText value={text as PortableTextBlock[]} />
        </div>
      )}
    </div>
  )
}


export default OfflineProjects;