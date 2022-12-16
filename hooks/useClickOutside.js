import { RefObject, useEffect } from 'react'

export const useClickOutside = (
    ref,
    onClickOutside,
  ) => {
    useEffect(() => {
      /**
       * Invoke Function onClick outside of element
       */
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside() 
        }
      }
      // Bind
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // dispose
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref, onClickOutside])
  }
  