import Head from "next/head";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import ButtonPrimary from "../components/ButtonPrimary";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <Header />

      <HeroSection/>

      <ContactForm/>
    </div>
  )
}
