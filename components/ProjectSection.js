import React from "react";
import { ButtonPrimary } from "./ButtonPrimary";
import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <div>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      ></motion.div>
    </div>
  );
}
