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
  const [openIndex, setOpenIndex] = useState<number | false>(false);

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
  openIndex: number | false;
  setOpenIndex: (index: number | false) => void;
}) {
  const isOpen = i === openIndex;

  return (
    <>
      <motion.header
        className='page-padding md:px-10 lg:px-18 w-full border-t border-black py-4 w-full header text-24 lg:text-36 hover:text-green flex justify-between items-center cursor-pointer hover:text-green'
        initial={false}
        onClick={()=>setOpenIndex(isOpen ? false : i)}
      >
        <span>
          {project.title}
        </span>
        <span>
          {isOpen ? '−' : '+'}
        </span>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            style={{ overflow: 'hidden' }}
            key="content"
            className="page-padding md:px-10 lg:px-18"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="pb-4">
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
    <div className="mb-9 md:mb-7 flex-col md:grid md:grid-cols-2">
        <div className={`flex space-x-4 md:space-x-7 justify-stretch ${images.length === 1 ? 'md:justify-center' : 'md:w-full'}`}>
          {images.map((image, index) => {
            const ref = image.asset._ref;
            const dimensions = ref ? ref.split('-')[2].split('x').map(Number) : [1200, 800];
            const [width, height] = dimensions;
            
            return <div key={index} className="flex-1 relative"><Image

                  className="w-full h-full object-cover"
                  image={image}
                /></div>

          })}
        </div>
      
      {text?.length && (
        <div className='mt-4 md:mt-0 md:pl-16'>
          <PortableText value={text as PortableTextBlock[]} />
        </div>
      )}
    </div>
  )
}


export default OfflineProjects;