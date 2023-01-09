import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ContributionsSection from "../components/ContributionsSection";
import ContactSection from "../components/ContactSection";
import ProjectSection from "../components/ProjectSection";
import Gesprender from "../public/assets/img/gesprender-thumb.png";
import Beagle from "../public/assets/img/beagle-thumb.png";
import SecondhandAppThumb from "../public/assets/img/secondhand-app-thumb.png";
import { motion, useScroll } from "framer-motion";
import WhereIWorkSection from "../components/WhereIWorkSection";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-zinc-900">
      <Head>
        <title>Isaías Ulevich | Portfolio</title>
      </Head>
      {/* <Banner/> */}
      <Header />

      <HeroSection />

      <WhereIWorkSection />

      <ProjectSection
        id="gesprender"
        title="Gesprender: Web Platform"
        description="Gesprender is a SaaS developed to help small and medium-sized businesses jump straight away into the digital world, showing business stats, reports, catalogues and much more."
        src={Gesprender}
        link={
          "https://www.behance.net/gallery/144483353/Gesprender-UXUI-Case-Study"
        }
        cta="View case study"
      />

      <ProjectSection
        id="secondhandapp"
        title="SecondHand: IOS Mobile App"
        description="The client wanted to build something where the users could post pictures of the products, and, just like on Tinder, swipe to like them or not."
        src={SecondhandAppThumb}
        link={
          "https://www.behance.net/gallery/139559963/SecondHand-App-UIUX-Case-Study"
        }
        cta="View case study"
      />
      <ProjectSection
        id="beagle"
        title="bEagle: Web Platform "
        description="bEagle is a place where you can publish and potentially find lost items, people, or pets."
        src={Beagle}
        link={
          "https://www.figma.com/file/vdoa1M58Cy9HqQ6xk5TgSP/%F0%9F%90%B6-bEagle?node-id=11%3A12732&t=GNUaTd7E1mujCQXu-1"
        }
        cta="View Figma file"
      />

      {/* <ContributionsSection /> */}

      <ContactSection />
      

      {/* <Toast/> */}
    </div>
  );
}
