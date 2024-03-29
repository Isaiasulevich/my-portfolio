import React from "react";
import { motion } from "framer-motion";
import DabbleLab from "../public/assets/img/dabblelab-logo.png";
import Seedj from "../public/assets/img/seedj-logo.png";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function WhereIWorkSection() {
  return (
    <div className="relative flex flex-col items-center gap-12 mx-auto  py-20 px-12   md:flex md:py-24 md:px-48  max-w-screen-2xl">
         {/* TITLE */}
         <div>
            <h1 className="font-medium text-3xl text-zinc-500">
                Currently working at
            </h1>
        </div>
      <div className="flex flex-col items-top justify-center gap-12 md:flex-row">
      {/* <div>
            <h1 className="font-medium text-3xl text-zinc-500">
                Working at
            </h1>
        </div> */}
        {/* DL CARD */}
        <motion.div className="flex flex-col text-center items-center justify-center  gap-4 max-w-2xl">
          {/* IMAGE */}
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-zinc-800 p-4 ">
            <Image className="" alt="Dabble Lab logo" src={DabbleLab} />
          </div>

          {/* TEXT */}
          <div className=" flex flex-col gap-2 text-zinc-50 max-w-sm">
            <h3 className="font-medium text-lg">UX/UI Designer | Part-time </h3>
            <h6 className="font-regular text-sm text-zinc-500">
            I mostly do UI/UX design but also code. I collaborated on multiple diverse projects.
            </h6>
          </div>

          {/* LINK CTA */}
          <Link
            className="flex gap-2 items-center text-zinc-50 font-regular ease-in-out hover:text-purple-500"
            href={"https://www.dabblelab.com"}
            target={'_blank'}
            passHref
          >
            <p>Go to company website</p>
            <ChevronRightIcon className="w-4 h-4 " />
          </Link>
        </motion.div>

        {/* SEEDJ CARD */}
        <motion.div className="flex flex-col text-center items-center justify-center  gap-4 max-w-2xl">
          {/* IMAGE */}
          <div className="flex items-center  justify-center w-20 h-20 rounded-full bg-zinc-800 p-4 ">
            <Image className="" alt="Dabble Lab logo" src={Seedj} />
          </div>

          {/* TEXT */}
          <div className=" flex flex-col gap-2 text-zinc-50 max-w-sm">
            <h3 className="font-medium text-lg">Product designer | Full-time </h3>
            <h6 className="font-regular text-sm text-zinc-500">
            I work on new feature implementations and building/updating the whole design system.
            </h6>
          </div>

          {/* LINK CTA */}
          <Link
            className="flex gap-2 items-center text-zinc-50 font-regular ease-in-out hover:text-purple-500"
            href={"https://www.seedj.app"}
            target={'_blank'}
            passHref
          >
            <p>Go to company website</p>
            <ChevronRightIcon className="w-4 h-4 " />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
