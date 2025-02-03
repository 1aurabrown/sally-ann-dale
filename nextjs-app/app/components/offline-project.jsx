import { motion, AnimatePresence } from "framer-motion";

const OfflineProject = ({ i, project, openIndex, setOpenIndex }) => {
  const isOpen = i === openIndex;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        initial={false}
        onClick={() => setOpenIndex(isOpen ? false : i)}
      >
        {project.title}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
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
            <div>{JSON.stringify(project)}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default OfflineProject;