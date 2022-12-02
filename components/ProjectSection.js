import React from "react";
import { ButtonPrimary } from "./ButtonPrimary";
import { motion } from "framer-motion";
import Card from "./ContributionCard";
import RainTree from "../public/assets/img/RainTree-visualization-thumb.png";

export default function ContactSection() {
  return (
    <div className="flex flex-col items-start relative justify-start gap-8 text-center text-zinc-50 bg-zinc-800 py-48 px-48 sm:flex sm:flex-row">
      <motion.div
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
        <Card
          src={RainTree}
          title="RainTree visualization - Web3"
          description="I&lsquo;m super curious, proactive, and do things with passion. I learn most
      of the stuff in a self-taught way. By the way, this website was
      developed by me in Javascript 🤙🏽"
        />
      </motion.div>
      <motion.div
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
        <Card
          src={RainTree}
          title="Node Auditor - POKT Network"
          description="I&lsquo;m super curious, proactive, and do things with passion. I learn most
      of the stuff in a self-taught way. By the way, this website was
      developed by me in Javascript 🤙🏽"
        />
      </motion.div>
      <motion.div
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
        <Card
          src={RainTree}
          title="Lens Protocol - Graph"
          description="I&lsquo;m super curious, proactive, and do things with passion. I learn most
      of the stuff in a self-taught way. By the way, this website was
      developed by me in Javascript 🤙🏽"
        />
      </motion.div>
    </div>
  );
}
