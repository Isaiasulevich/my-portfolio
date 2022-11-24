import React from 'react'
import portfolioLogo from '../public/assets/img/portfolio-logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './ContactForm'

const Header = () => {
  return (
    <div className='py-4 px-24 bg-black flex justify-between items-center '>

        <Image 
         src={portfolioLogo}
         alt='The best logo I ever created'
         /> 
        <div className='flex gap-8 '>
          <Link href={'/contact'} className='inline-flex text-white rounded-lg py-3 hover:text-indigo-500 active:text-white active:bg-'>
            My Work
          </Link>

          {/* It'll be a popup with my resume (api? and a button to download) */}

          <Link href={'/contact'} className='inline-flex text-white rounded-lg py-3 hover:text-indigo-500 active:text-white active:bg-'>
            Resume
          </Link>

          <Link href={'/contact'} className='inline-flex text-white rounded-lg py-3 hover:text-indigo-500 active:text-white active:bg-'>
          Say Hello! 
        </Link>
        </div>
    </div>
  )
}

export default Header