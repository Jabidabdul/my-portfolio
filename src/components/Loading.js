import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

export const Loading = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      className="loading-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="loading-content" variants={itemVariants}>
        <motion.div
          className="loading-spinner"
          variants={spinnerVariants}
          animate="animate"
        >
          <FaCode size={40} />
        </motion.div>
        <motion.h2 className="loading-text" variants={itemVariants}>
          Loading Portfolio...
        </motion.h2>
        <motion.div className="loading-dots" variants={itemVariants}>
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          />
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
