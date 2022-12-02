import React from 'react'

export const Button = (prop) => {
  return (
    <button className='flex gap-4 px-8 py-4 rounded-full bg-gray-900 text-gray-50 font-medium ' type={prop.type}>{prop.label}</button>
  )
}

