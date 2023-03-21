import React from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "./ButtonPrimary";
import Image from "next/image";
import bgHeroShape from "../public/assets/img/bg-shape-02.svg";
import HeadingText from "./HeadingText";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  return (
    <div className="relative mx-auto flex flex-col items-left justify-center gap-8 text-left text-zinc-50 bg-zinc-900 py-20 px-12 md:py-48 md:px-24">
      <div className="max-w-5xl flex gap-10 flex-col">
        {/* MAIN TEXT */}
        {/* <HeadingText/> */}

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
            Hey 👋! I&apos;m a Product Designer, passionate about{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              design and tech.
            </span>
          </h1>
        </motion.div>

        <motion.div>
          <h1 className="font-regular text-zinc-200 text-xl max-w-3xl">
            I&apos;m super curious, proactive, and do things with passion. I
            learn most of the stuff in a self-taught way. By the way, this
            website was developed by me in Javascript (Nextjs).
          </h1>
        </motion.div>
        <div className="flex md:flex-row md:gap-2">
          <ButtonPrimary
            label="Contact me"
            className="z-50 w-48 block"
            link={"https://www.linkedin.com/in/isaiasulevich/"}
          />
          <Link
            className="flex shrink-0 gap-2 items-center pl-2 text-zinc-50 font-regular ease-in-out hover:text-purple-500"
            href={
              "https://docs.google.com/document/d/1ocuT2WMuLm571eN_vR8xp-rSbeiiQDhW1328TaYEFAo/"
            }
            target={"_blank"}
            passHref
          >
            <p className="w-full font-medium text-center justify-center">Download resume</p>
            {/* <ArrowUpRightIcon className="w-4 font-medium h-4 " /> */}
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: "Infinity", duration: 2 }}
      >
        <Image
          src={bgHeroShape}
          width={800}
          height={800}
          className="absolute top-0 -z-10 right-0 opacity-[0.5]"
        />
      </motion.div>
    </div>
  );
}
