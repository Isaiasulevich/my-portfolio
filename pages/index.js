import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ContributionsSection from "../components/ContributionsSection";
import ContactSection from "../components/ContactSection";
import ProjectSection from "../components/ProjectSection";
import RainTree from "../public/assets/img/RainTree-visualization-thumb.png";
import { motion, useScroll } from "framer-motion";


export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-zinc-900">
      {/* <Banner/> */}

      <Header />

      <HeroSection/>

      <ProjectSection
      title='Gesprender Web Platform'
      description='This is a Saas platform to manage, financial and logistic activity in small businesses'
      src={RainTree}
      />

      <ContributionsSection/>

      <ContactSection/>


      {/* <Toast/> */}
    </div>
  )
}
