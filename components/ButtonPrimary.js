import React from 'react'

export const ButtonPrimary = (prop) => {
  return (
    <button className='flex gap-4 px-8 py-4 rounded-full text-gray-900 bg-gray-50 text-gray-50 font-medium hover:bg-opacity-80 ' type={prop.type}>{prop.label}</button>
  )
}

export default ButtonPrimary