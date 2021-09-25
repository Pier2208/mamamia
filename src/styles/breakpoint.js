import { css } from 'styled-components'

const size = {
  xs: 320,
  s: 600,
  m: 880,
  l: 1280,
  xl: 1920,
}

const media = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default media
