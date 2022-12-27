import React from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "./ButtonPrimary";
import Image from "next/image";

export default function PorjectSection(prop) {
  return (
    <div className="relative mx-auto flex flex-col-reverse items-center relative justify-center gap-8 text-left text-zinc-50 bg-zinc-900 py-20 px-12 bg-clip-border bg-gradient-to-b from-zinc-900 to-zinc-800  max-w-screen-2xl md:flex md:flex-row md:py-48 md:px-48 ">
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
        <h1 className="font-bold text-3xl">{prop.title}</h1>
        <h1 className="font-regular text-lg text-zinc-500">
          {prop.description}
        </h1>

        <ButtonPrimary
          link={prop.link}
          label="See case study"
          className="z-50 justify-center flex w-48"
        />
      </motion.div>

      <motion.div
        className="max-w-xl"
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
        <Image src={prop.src} className="rounded-xl cover" />
      </motion.div>
    </div>
  );
}
