import React from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "./ButtonPrimary";
import Image from "next/image";
import bgHeroShape from "../public/assets/img/bg-shape-02.svg";

export default function HeroSection() {
  return (
    <div className="relative mx-auto flex flex-col items-center relative justify-center gap-8 text-center text-zinc-50 bg-zinc-900 py-20 px-12 bg-clip-border bg-gradient-to-b from-zinc-900 to-zinc-800 md:py-48 md:px-48 ">

      {/* MAIN TEXT */}

      <motion.div
        className="z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
      >
        <h1 className="font-bold text-5xl max-w-5xl">
          I&lsquo;m a UX/UI designer, passionate about <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">design, tech and blockchain.</span>
        </h1>
      </motion.div>

      <motion.div>
        <h1 className="font-medium text-xl max-w-2xl">
          I&lsquo;m super curious, proactive, and do things with passion. I learn most
          of the stuff in a self-taught way. By the way, this website was
          developed by me in Javascript (Nextjs) 🤙🏽
        </h1>
      </motion.div>

      <ButtonPrimary label="Contact me" className="z-50" link={"https://www.linkedin.com/in/isaiasulevich/"}/>
      

      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3,1,0.3]}}
      transition={{repeat:'Infinity',
                  duration: 2
      }}
      >
        <Image
          src={bgHeroShape}
          width={1000}
          height={1000}
          className='absolute bottom-0 -z-10 right-0 opacity-[0.5]'
        />
      </motion.div>
    </div>
  );
}
