import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeadingText = () => {
  const [text, setText] = useState("");
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    const sentence = "Hey 👋! I'm a Product Designer, passionate about design and tech.";
    let counter = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + sentence[counter]);
      counter++;
      if (counter === sentence.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="z-10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        type: "spring",
        damping: 10,
        stiffness: 100,
        restDelta: 0.01,
      }}
    >
      <h1 className="font-bold text-6xl max-w-3xl">
        {text && (
          <motion.span
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hey 👋! I&apos;m a Product Designer, passionate about{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              design and tech.
            </span>
          </motion.span>
        )}
      </h1>
    </motion.div>
  );
};

export default HeadingText;
