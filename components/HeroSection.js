import React from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "./ButtonPrimary";
import Image from "next/image";
import bgHeroShape from "../public/assets/img/bg-shape-02.svg";

export default function HeroSection() {
  return (
    <div className=" flex flex-col items-center relative justify-center gap-8 text-center text-gray-50 bg-gray-900 py-48 px-48 bg-clip-border ">
      {/* MAIN TEXT */}

      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          delay: 0.5,
          x: { duration: 1 },
          default: { ease: "linear" },
        }}
      >
        <h1 className="font-bold text-5xl max-w-5xl">
          I'm a UX/UI designer, passionate about design, tech and blockchain.
        </h1>
      </motion.div>

      <motion.div>
        <h1 className="font-medium text-xl max-w-2xl">
          I'm super curious, proactive, and do things with passion. I learn most
          of the stuff in a self-taught way. By the way, this website was
          developed by me in Javascript 🤙🏽
        </h1>
      </motion.div>

      <ButtonPrimary label="Contact me" />

      {/* <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          delay: 0.5,
          x: { duration: 1 },
          default: { ease: "linear" },
        }}
      >
        <Image
          src={bgHeroShape}
          width={1000}
          height={1000}
          className="absolute bottom-0 right-0 opacity-[0.5]"
        />
      </motion.div> */}
    </div>
  );
}
