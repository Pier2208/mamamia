import React from 'react'
import styled, { keyframes } from 'styled-components'
import Overlay from './Overlay'

// animation
const cubeGridScaleDelay = keyframes`
    0%, 70%, 100% {
        -webkit-transform: scale3D(1, 1, 1);
                transform: scale3D(1, 1, 1);
        } 
        35% {
        -webkit-transform: scale3D(0, 0, 1);
                transform: scale3D(0, 0, 1);
        } 
`

const Grid = styled.div`
  width: 50px;
  height: 50px;
  margin: 100px auto;

  & div:nth-child(1) {
    animation-delay: 0.2s;
  }
  & div:nth-child(2) {
    animation-delay: 0.3s;
  }
  & div:nth-child(3) {
    animation-delay: 0.4s;
  }
  & div:nth-child(4) {
    animation-delay: 0.1s;
  }
  & div:nth-child(5) {
    animation-delay: 0.2s;
  }
  & div:nth-child(6) {
    animation-delay: 0.3s;
  }
  & div:nth-child(7) {
    animation-delay: 0s;
  }
  & div:nth-child(8) {
    animation-delay: 0.1s;
  }
  & div:nth-child(9) {
    animation-delay: 0.2s;
  }
`
const Cube = styled.div`
  width: 33%;
  height: 33%;
  background-color: ${(props) => props.theme.colors.offWhite};
  float: left;
  animation: ${cubeGridScaleDelay} 1.3s ease-in-out infinite;
`

const Spinner = () => (
  <Overlay>
    <Grid>
      {[...new Array(9)].map((_, i) => (
        <Cube key={i} />
      ))}
    </Grid>
  </Overlay>
)

export default Spinner

