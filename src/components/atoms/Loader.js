import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="grid px-4 py-24 place-content-center">
      <BarLoader />
    </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="w-2 h-12 bg-[#317773]" />
      <motion.div variants={variants} className="w-2 h-12 bg-[#317773]" />
      <motion.div variants={variants} className="w-2 h-12 bg-[#317773]" />
      <motion.div variants={variants} className="w-2 h-12 bg-[#317773]" />
      <motion.div variants={variants} className="w-2 h-12 bg-[#317773]" />
    </motion.div>
  );
};

export default Loader;
