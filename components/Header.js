import React from 'react'
import portfolioLogo from '../public/assets/img/portfolio-logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='py-4 px-24 flex justify-between items-center '>

        <Image 
         src={portfolioLogo}
         alt='The best logo I ever created'
         /> 
        
          <Link href={'/contact'} className='inline-flex text-white rounded-lg py-3 hover:text-indigo-500 active:text-white active:bg-'>
            My Work
          </Link>
    </div>
  )
}

export default Header