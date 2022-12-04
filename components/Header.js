import React from "react";
import portfolioLogo from "../public/assets/img/portfolio-logo.svg";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import Banner from "./Banner";

const Header = (prop) => {
  return (
    <div className=" bg-blur-sm bg-zinc-900 bg-opacity-5 sticky z-50 top-0">
      <Banner/>
     {/* CONTENT */}
      <div className="py-4 px-24 bg-zinc-900 flex justify-between items-center ">
        <Image src={portfolioLogo} alt="The best logo I ever created" />
        <div className="flex gap-8 font-medium text-zinc-50 ">
          <Link
            href={"/contact"}
            className="inline-flex bg-zinc-900 rounded-lg py-3 hover:text-indigo-500"
          >
            My Work
          </Link>

          {/* It'll be a popup with my resume (api? and a button to download) */}

          <Link
            href="https://docs.google.com/document/d/1ocuT2WMuLm571eN_vR8xp-rSbeiiQDhW1328TaYEFAo/edit"
            className="inline-flex bg-zinc-900 rounded-lg py-3 hover:text-indigo-500"
          >
            Resume
          </Link>

          <Link
            href={"/contact"}
            className="inline-flex bg-zinc-900 rounded-lg py-3 hover:text-indigo-500"
          >
            Say Hello!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
