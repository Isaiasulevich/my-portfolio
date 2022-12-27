import React from "react";
import { ButtonPrimary } from "./ButtonPrimary";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import bgHeroShape from "../public/assets/img/bg-shape-02.svg";
import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="flex items-center mx-auto relative justify-center gap-8 text-center text-zinc-50 bg-gradient-to-t px-12 py-20 from-zinc-900 to-zinc-800 md:py-48 md:px-48 bg-clip-border">

      <ContactForm 
      />

      <motion.div 
      animate={{ opacity: [0.5,1,0.5]}}
      transition={{repeat:'Infinity',
                  duration: 2
      }}
      >
        <Image
          src={bgHeroShape}
          width={1000}
          height={1000}
          className="absolute bottom-2 -left-40 opacity-[0.5]"
        />
      </motion.div>
    </div>
  );
}
