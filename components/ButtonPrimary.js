import React from 'react'

export const ButtonPrimary = (prop) => {
  return (
    <button className={prop.className+" block max-w-2 gap-4 px-8 py-4 rounded-full text-zinc-900 bg-zinc-50 text-zinc-900 font-medium  hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-500 hover:text-zinc-50 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"} type={prop.type} href={prop.link}>{prop.label}</button>
  )
}

export default ButtonPrimary