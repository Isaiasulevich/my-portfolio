import React from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "./ButtonPrimary";
import Image from "next/image";

export default function ProjectSection(props) {
  const isReverse = props.isReverse || false;
  const imageClass = `max-w-xl ${
    isReverse ? "order-1" : "order-2"
  } md:order-1`;

  const contentClass = `z-10 flex flex-col gap-8 max-w-xl ${
    isReverse ? "order-2" : "order-1"
  } md:order-2`;

  return (
    <div
      id={props.id}
      className="relative mx-auto flex flex-col-reverse items-center relative justify-center gap-8 text-left text-zinc-50 py-20 px-12 bg-clip-border  max-w-screen-2xl md:flex md:flex-row md:py-24 md:px-48 "
    >
      {/* MAIN TEXT */}

      <motion.div
        className={contentClass}
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
        <h1 className="font-bold text-3xl">{props.title}</h1>
        <h1 className="font-regular text-lg text-zinc-500">
          {props.description}
        </h1>

        <ButtonPrimary
          link={props.link}
          label={props.cta}
          className="z-50 justify-center flex w-48"
        />
      </motion.div>

      <motion.div
        className={imageClass}
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
        <Image src={props.src} className="rounded-xl cover" />
      </motion.div>
    </div>
  );
}
