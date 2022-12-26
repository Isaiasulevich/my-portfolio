import React from "react";
import { motion } from "framer-motion";
import DabbleLab from "../public/assets/img/dabblelab-logo.png";
import Seedj from "../public/assets/img/seedj-logo.png";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function WhereIWorkSection() {
  return (
    <div className="relative flex flex-col items-center gap-12 mx-auto bg-zinc-900 py-20 px-20 bg-clip-border bg-gradient-to-b from-zinc-900 to-zinc-800 md:flex md:py-48 md:px-48  max-w-screen-2xl">
         {/* TITLE */}
         <div>
            <h1 className="font-medium text-3xl text-zinc-500">
                Currently working at
            </h1>
        </div>
      <div className="flex items-top justify-center gap-12">
      {/* <div>
            <h1 className="font-medium text-3xl text-zinc-500">
                Working at
            </h1>
        </div> */}
        {/* DL CARD */}
        <motion.div className="flex flex-col gap-4 max-w-2xl">
          {/* IMAGE */}
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-zinc-900 p-4 ">
            <Image className="" alt="Dabble Lab logo" src={DabbleLab} />
          </div>

          {/* TEXT */}
          <div className=" flex flex-col gap-2 text-zinc-50 max-w-sm">
            <h3 className="font-medium text-lg">UX/UI Designer | Part-time </h3>
            <h6 className="font-regular text-sm text-zinc-500">
              I mostly do UI/UX design but also code. I contributed to their
              website.
            </h6>
          </div>

          {/* LINK CTA */}
          <Link
            className="flex gap-2 items-center text-zinc-50 font-regular ease-in-out hover:text-purple-500"
            href={"https://www.dabblelab.com"}
          >
            <p>Go to company profile</p>
            <ChevronRightIcon className="w-4 h-4 " />
          </Link>
        </motion.div>

        {/* SEEDJ CARD */}
        <motion.div className="flex flex-col gap-4 max-w-2xl">
          {/* IMAGE */}
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-zinc-900 p-4 ">
            <Image className="" alt="Dabble Lab logo" src={Seedj} />
          </div>

          {/* TEXT */}
          <div className=" flex flex-col gap-2 text-zinc-50 max-w-sm">
            <h3 className="font-medium text-lg">Product designer | Full-time </h3>
            <h6 className="font-regular text-sm text-zinc-500">
              I work in new feautres implemmentations and building/updating the
              whole design system.
            </h6>
          </div>

          {/* LINK CTA */}
          <Link
            className="flex gap-2 items-center text-zinc-50 font-regular ease-in-out hover:text-purple-500"
            href={"https://www.seedj.app"}
            rel="noopener noreferrer"
          >
            <p>Go to company profile</p>
            <ChevronRightIcon className="w-4 h-4 " />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
