import React from "react";
import portfolioLogo from "../public/assets/img/portfolio-logo.svg";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

const Header = (prop) => {
  return (
    <div className="">
      {/* BANNER */}
      <div className="relative flex items-center justify-center text-gray-50 font-medium text-center bg-gradient-to-r from-pink-500 to-violet-500 py-4">
        <h2>The website is still in developing stages 🏗️ </h2>
      </div>

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
            href={"/contact"}
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
