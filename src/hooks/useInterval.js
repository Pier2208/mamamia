import { useEffect, useRef } from 'react'

const useInterval = (callback, delay) => {
  if (typeof window !== `undefined`) {
    const savedCallback = useRef()

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let interval = setInterval(tick, delay * 1000)
        return () => clearInterval(interval)
      }
    }, [delay])
  }
}

export default useInterval
