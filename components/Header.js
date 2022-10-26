import React from 'react'
import portfolioLogo from '../public/assets/img/portfolio-logo.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='py-4 px-8'>

        <Image 
         src={portfolioLogo}
         alt='The best logo I ever created'

         /> 

    </div>
  )
}

export default Header