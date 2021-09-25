import { keyframes } from 'styled-components'

export const pulse = keyframes`
  from {
      box-shadow: 0 0 0 0px rgba(66, 59, 75, 0.1);
      background: rgba(255, 255, 255, 0.6);
    }

  to {
      box-shadow: 0 0 0 1000px rgba(66, 159, 75, 0);
      background: rgba(255, 255, 255, 0);
    }
`

export const openTop = keyframes`
    0% {
      /* initial starting point of top line */
      transform: translateY(-5px) rotate(0deg);
    }
    50% {
      /* move the top line down to the middle */
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      /* rotate 90deg + 45deg */
      transform: translateY(0px) rotate(90deg);
    }
`

export const openMid = keyframes`
    50% {
      /* no 0% because this line does not need to collapse
      it's already in the middle */
      transform: rotate(0deg);
    }
    100% {
      /* rotate 45deg (also applied on the pseduo-elements*/
      transform: rotate(45deg);
    }
`

export const openBtm = keyframes`
    0% {
      /* starting point of bottom line */
      transform: translateY(5px) rotate(0deg);
    }
    50% {
      /* collpase to the middle */
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      /* rotate 90 + 45deg */
      transform: translateY(0px) rotate(90deg);
    }
`

export const closedTop = keyframes`
    0% {
      /* initial starting point of top line */
      transform: translateY(-5px) rotate(0deg);
    }
    50% {
      /* move the top line down to the middle */
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      /* rotate 90deg + 45deg */
      transform: translateY(0px) rotate(90deg);
    }
`

export const closedMid = keyframes`
        /* no 0% because this line does not need to collapse
    it's already in the middle */
    50% {
      /* starting point */
      transform: rotate(0deg);
    }
    100% {
      /* rotate 45deg (also applied on the pseduo-elements */
      transform: rotate(45deg);
    }
`

export const closedBtm = keyframes`
    0% {
    /* starting point of bottom line */
      transform: translateY(5px) rotate(0deg);
    }
    50% {
      /* collpase to the middle */
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      /* rotate 90 + 45deg */
      transform: translateY(0px) rotate(90deg);
    }
`
