import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import Image from "next/image";
import linkedinIcon from "../public/assets/icons/Icons 20px/Icon/Filled/icons/linkedin-icon.svg";
import githubIcon from "../public/assets/icons/Icons 20px/Icon/Filled/icons/github-icon.svg";
import behanceIcon from "../public/assets/icons/Icons 20px/Icon/Filled/icons/behance-icon.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";


export default function BottomCTA() {
  return (
    <div className="flex items-center gap-12 mx-auto bg-zinc-900 py-20 px-12 bg-clip-border bg-gradient-to-b from-zinc-900 to-zinc-800 md:flex md:gap-24 md:py-48 md:px-48  max-w-screen-2xl">
      {/* LEFT CONTENT */}

      <motion.div
        className="z-10 flex flex-col gap-4 max-w-xl"
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
        <h1 className="font-bold text-zinc-50 text-5xl max-w-5xl">
          Let&lsquo;s get in touch!{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            always up for new challenges.
          </span>
        </h1>
        <h1 className="font-medium text-zinc-400 text-xl max-w-2xl">
          I'm open to new opportunities, preferably remote and also able to
          relocate anywhere in the world.
        </h1>
      </motion.div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col gap-4">
        {/* SOCIAL MEDIA ICONS */}
        <div className="flex gap-1 ">
          {/* LINKEDIN */}
          <a
            className="p-2 rounded-lg hover:bg-zinc-800"
            target="_blank"
            href={"https://www.linkedin.com/in/isaiasulevich/"}
          >
            <Image src={linkedinIcon} alt="Linkedin Profile"></Image>
          </a>
          {/* GITHUB */}
          <a
            className="p-2 rounded-lg hover:bg-zinc-800"
            target="_blank"
            href={"https://www.github.com/isaiasulevich/"}
          >
            <Image src={githubIcon} alt="Linkedin Profile"></Image>
          </a>
          {/* BEHANCE */}
          <a
            className="p-2 rounded-lg hover:bg-zinc-800"
            target="_blank"
            href={"https://www.behance.net/isaiasulevich"}
          >
            <Image src={behanceIcon} alt="Linkedin Profile"></Image>
          </a>
        </div>

        {/* LINK CTA */}
        <Link
            className="flex gap-2 items-center pl-2 text-zinc-50 font-regular ease-in-out hover:text-purple-500"
            href={"https://docs.google.com/document/d/1ocuT2WMuLm571eN_vR8xp-rSbeiiQDhW1328TaYEFAo/"}
            target={'_blank'}
          >
            <p>Download resume</p>
            <ArrowUpRightIcon className="w-4 h-4 " />
          </Link>

      </div>
    </div>
  );
}
