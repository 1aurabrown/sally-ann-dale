'use client';

import { type PortableTextBlock } from "next-sanity";
import PortableText from "@/app/_components/PortableText";
import Image from "@/app/_components/Image";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function OfflineProjects({ projects }) {

	const [openIndex, setOpenIndex] = useState(false);

	return (
		<section>
		  { projects?.length && projects.map((project, i) => {

		    return (
		      <OfflineProject i={i} project={project} key={project._id} openIndex={openIndex} setOpenIndex={setOpenIndex} />
		    )}
		  )}
		</section>
	)
}

function OfflineProject({ i, project, openIndex, setOpenIndex }) {
  const isOpen = i === openIndex;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
	      className="border-t border-black py-2 w-full"
        initial={false}
        onClick={() => setOpenIndex(isOpen ? false : i)}
      >
        {project.title}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
	          style={{ overflow: 'hidden' }}
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
            {project.rows?.length && project.rows.map((row) => {
              return(<ProjectRow key={row._key} {...row} />)
            })}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};



function ProjectRow({images, text}){
  return (
    <div>
      { images?.length && (
        <ul>
          {images.map((image) => {
            return (
              <li key={image._key} >
                <Image image={image} />
              </li>
            )
          })}
        </ul>
      )}
      {text?.length && <PortableText
        value={text as PortableTextBlock[]}
      />}
    </div>
  )
}


export default OfflineProjects;