import React from "react";
import RainTree from "../public/assets/img/RainTree-visualization-thumb.png";
import Image from "next/image";

export default function ContributionCard () {
  return (
    <div>
      <div className="max-w-sm bg-zinc-50 border border-zinc-200 rounded-lg shadow-md dark:bg-zinc-800 dark:border-zinc-700">
        <a href="#">
          {/* TODO: CORRECT THIS  */}
          <div className="max-w-sm">
            <Image
              width={300}
              height={300}
              className="rounded-t-lg object-cover"
              src={RainTree}
              alt="RainTree"
            />
          </div>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-Inc-900 dark:text-white">
              RainTree Visualisation
            </h5>
          </a>
          <p className="mb-3 font-normal text-zinc-700 dark:text-zinc-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-zinc-50 bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
