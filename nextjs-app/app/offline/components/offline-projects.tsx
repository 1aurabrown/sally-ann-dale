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
  // Change from boolean to number | null
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

// Update the type in the OfflineProject props
function OfflineProject({ i, project, openIndex, setOpenIndex }: {
  i: number;
  project: ProjectProps;
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}) {
  const isOpen = i === openIndex;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
	      className="border-t border-black py-2 w-full header text-4xl flex justify-between items-center cursor-pointer hover:text-green"
        initial={false}
        onClick={() => setOpenIndex(isOpen ? null : i)}
      >
        <span>{project.title}</span>
        <span className="header text-4xl">
          {isOpen ? '−' : '+'}
        </span>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            style={{ overflow: 'hidden' }}
            className="cursor-pointer"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            onClick={() => setOpenIndex(null)}
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
};



function ProjectRow({images, text}: ProjectRowProps) {
  return (
    <div className="space-y-8">
      {images?.length && (
        <ul className="space-y-4">
          {images.map((image) => {
            return (
              <li key={image._key} className="relative w-full h-[50vh]">
                <Image 
                  image={image} 
                  className="w-full h-full"
                  objectFit="cover"
                />
              </li>
            )
          })}
        </ul>
      )}
      {text?.length && (
        <div className="prose max-w-none">
          <PortableText value={text as PortableTextBlock[]} />
        </div>
      )}
    </div>
  )
}


export default OfflineProjects;