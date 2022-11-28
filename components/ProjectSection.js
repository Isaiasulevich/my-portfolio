import React from "react";
import { ButtonPrimary } from "./ButtonPrimary";
import { motion } from "framer-motion";
import Cards from "./ContributionCard";

export default function ProjectSection() {
  return (
    <div className="flex flex-col items-center relative justify-center gap-8 text-center text-zinc-50 bg-zinc-800 py-48 px-48">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      ></motion.div>

      <Cards/>
    </div>
  );
}
