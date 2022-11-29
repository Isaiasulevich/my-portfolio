import Head from "next/head";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import ButtonPrimary from "../components/ButtonPrimary";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Toast from "../components/Toast";


export default function Home() {
  return (
    <div className="bg-zinc-900">
      <Header />

      <HeroSection/>

      <ProjectSection/>

      <ContactSection/>

      {/* <Toast/> */}
    </div>
  )
}
