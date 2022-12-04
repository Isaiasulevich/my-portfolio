import Head from "next/head";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import ButtonPrimary from "../components/ButtonPrimary";
import HeroSection from "../components/HeroSection";
import ContributionsSection from "../components/ContributionsSection";
import ContactSection from "../components/ContactSection";
import Toast from "../components/Toast";
import Banner from "../components/Banner";
import ProjectSection from "../components/ProjectSection";
import RainTree from "../public/assets/img/RainTree-visualization-thumb.png";


export default function Home() {
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
