import { useEffect, useState } from 'react'

// this custom hook takes a DOM node
const useDOMNodeSize = nodeRef => {
  if (typeof window !== `undefined`) {
    // a function that returns an object
    const getDimensions = () => ({
      width: nodeRef.current.offsetWidth,
      height: nodeRef.current.offsetHeight,
    })

    // we make use of the useState hook to keep track of the dimensions
    // of the node
    const [dimensions, setDimensions] = useState({
      width: 0,
      height: 0,
    })

    useEffect(() => {
      const handleResize = () => {
        setDimensions(getDimensions())
      }

      // when the component mounts for the 1st time
      if (nodeRef.current) {
        setDimensions(getDimensions())
      }

      // call handleResize each time the window is resized
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [nodeRef])

    return dimensions
  }
}

export default useDOMNodeSize
