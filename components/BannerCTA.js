import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/outline'

export default function BottomCTA(props) {
  return (
    <div
      className={`flex flex-col items-start md:items-center max-screen-2xl grow place-content-between rounded-2xl md:flex-row  ${
        props.bgColor ? props.bgColor : 'bg-gradient-to-r from-purple to-orange'
      } py-6 px-6 sm:py-12 sm:px-12`}
    >
      {/* TEXT AND LINK */}
      <div className="flex flex-col text-white text-left gap-8 justify-start max-w-lg xl:max-w-2xl pb-6 lg:pr-12 lg:pb-0 ">
        <h1 className="transition ease-in-out text-5xl text-left text-white font-medium xsmall:text-6xl sm:text-7xl tracking-tight ">
          {props.title}
        </h1>
        <p className="text-left text-xl sm:text-left font-regular">
          {props.description}
        </p>

        {props.linkAlt && props.ctaAlt && (
          <Link href={props.linkAlt ? props.linkAlt : '/'}>
            <div className="flex items-center pt-8 justify-start text-md gap-2 font-medium hover:text-black rounded-full text-white sm:text-lg">
              <a>{props.ctaAlt ? props.ctaAlt : 'Learn more'}</a>
              <ChevronRightIcon
                strokeWidth={3}
                width={16}
                height={16}
              />
            </div>
          </Link>
        )}
      </div>
      {/* CTA */}
      <div className="flex bg-white rounded-full text-black text-sm font-medium px-6 py-3 lg:text-lg sm:px-8 sm:py-4 hover:bg-opacity-80 ">
        <Link href={props.link}>
          <a className="flex flex-row gap-1 lg:gap-4 items-center ">
            <h1>{props.cta}</h1>
            <ChevronRightIcon stroke="black" width={20} height={20} />
          </a>
        </Link>
      </div>
    </div>
  )
}
