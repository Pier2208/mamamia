import { useEffect, useState } from 'react'

const useWindowSize = () => {
  if (typeof window !== `undefined`) {
    // check that the window object exists
    const isClient = typeof window !== 'undefined'

    const getSize = () => ({
      windowWidth: isClient ? window.innerWidth : undefined,
      windowHeight: isClient ? window.innerHeight : undefined,
    })

    // useState to save the dimensions of the window
    const [dimensions, setDimensions] = useState(getSize)

    useEffect(() => {
      // window does not exist; returns undefined for width/height
      if (!isClient) return false

      const handleResize = () => {
        setDimensions(getSize())
      }

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }, [])
    return dimensions
  }
}

export default useWindowSize
