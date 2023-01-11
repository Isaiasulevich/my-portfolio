import Link from 'next/link'
import React from 'react'

export const ButtonPrimary = (prop) => {
  return (
    
    <Link target='_blank' className={prop.className+" flex gap-4 px-8 py-4 rounded-full text-zinc-900 bg-zinc-50 font-medium text-center justify-center items-center  hover:bg-opacity-80 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"} type={prop.type} href={prop.link ? prop.link : '/' }  >
      {prop.label}</Link>

    // {props.linkAlt && props.ctaAlt && (
    //   <Link href={props.linkAlt ? props.linkAlt : '/'}>
    //     <div className="flex items-center pt-8 justify-start text-md gap-2 font-medium hover:text-black rounded-full text-white sm:text-lg">
    //       <a>{props.ctaAlt ? props.ctaAlt : 'Learn more'}</a>
    //       <ChevronRightIcon
    //         strokeWidth={3}
    //         width={16}
    //         height={16}
    //       />
    //     </div>
    //   </Link>
    // )}
    
  )
}

export default ButtonPrimary