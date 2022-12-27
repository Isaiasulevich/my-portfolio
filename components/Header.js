import portfolioLogo from "../public/assets/img/portfolio-logo.svg";
import Image from "next/image";
import Link from "next/link";
import Banner from "./Banner";
import { useState, useRef } from "react";
import closeIcon from "../public/assets/img/close.svg";
import { useClickOutside } from "../hooks/useClickOutside";

const Header = (prop) => {
  const [clicked, setClicked] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setClicked(false));

  return (
    <div className=" backdrop-blur-sm bg-zinc-900/20  sticky z-[10000] top-0">
      {/* NAV CONTENT */}
      <div className="py-4 px-12 flex justify-between items-center ">
        {/* LOGO */}
        <Image src={portfolioLogo} alt="The best logo I ever created" />

        {clicked && (
          <div
            ref={ref}
            className="backdrop-blur-xl  bg-zinc-900/50 w-full h-auto flex flex-col justify-center py-6 px-12 text-zinc-50 absolute top-0 z-[1000] right-0 rounded-b-xl"
          >
            <div className="flex flex-row justify-end">
              <div
                onClick={() => setClicked(false)}
                className="p-2 rounded-lg focus:bg-zinc-800"
              >
                <Image src={closeIcon} alt="close" />
              </div>
            </div>
            <div className="flex flex-col">
              <Link
                target={'_blank'}
                href="https://docs.google.com/document/d/1ocuT2WMuLm571eN_vR8xp-rSbeiiQDhW1328TaYEFAo/edit"
                className="inline-flex rounded-lg py-3 hover:text-indigo-500"
              >
                Resume
              </Link>
              <Link
                href={"#gesprender"}
                className="inline-flex rounded-lg py-3 hover:text-indigo-500"
              >
                My Work
              </Link>
              <Link
                href={"/contact"}
                className="inline-flex rounded-lg py-3 hover:text-indigo-500"
              >
                Say Hello!
              </Link>
            </div>
          </div>
        )}

        <div className="md:hidden" onClick={() => setClicked(!clicked)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="focus:text-indigo-500"
          >
            <mask
              id="mask0_609_5613"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_609_5613)">
              <path
                d="M3.04199 14.562V12.938H16.979V14.562H3.04199ZM3.04199 10.812V9.167H16.979V10.812H3.04199ZM3.04199 7.062V5.438H16.979V7.062H3.04199Z"
                fill="#FAFAFA"
              />
            </g>
          </svg>
        </div>

        <div className="font-medium text-zinc-50 hidden md:flex gap-8 ">
          <Link
          
            href={"#gesprender"}
            className="inline-flex rounded-lg py-3 hover:text-indigo-500"
          >
            My Work
          </Link>

          <Link
            target={'_blank'}
            href="https://docs.google.com/document/d/1ocuT2WMuLm571eN_vR8xp-rSbeiiQDhW1328TaYEFAo/edit"
            className="inline-flex rounded-lg py-3 hover:text-indigo-500"
          >
            Resume
          </Link>

          <Link
            href={"/contact"}
            className="inline-flex rounded-lg py-3 hover:text-indigo-500"
          >
            Say Hello!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
