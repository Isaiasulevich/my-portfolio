import React from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "./ButtonPrimary";
import Image from "next/image";

export default function PorjectSection(prop) {
  return (
    <div className="relative flex flex-row items-center relative justify-left gap-8 text-left text-zinc-50 bg-zinc-900 py-48 px-48 bg-clip-border bg-gradient-to-b from-zinc-900 to-zinc-800  max-w-8xl">
      {/* MAIN TEXT */}

      <motion.div
        className="z-10 flex flex-col gap-8 max-w-xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <h1 className="font-bold text-3xl">
          {prop.title}
        </h1>
        <h1 className="font-regular text-lg text-zinc-500">
          {prop.description}
        </h1>

        <ButtonPrimary label="Contact me" className="z-50 block w-40" />
      </motion.div>

      <motion.div
      className="max-w-xl">
        <Image
          src={prop.src}
          className="rounded-xl cover"
        />
      </motion.div>
    </div>
  );
}
