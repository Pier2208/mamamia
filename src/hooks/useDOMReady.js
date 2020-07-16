const useDOMReady = () =>
  typeof window !== 'undefined' &&
  !!window.document &&
  !!window.document.createElement

export default useDOMReady