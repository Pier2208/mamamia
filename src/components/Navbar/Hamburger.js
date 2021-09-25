import React from 'react'
import styled from 'styled-components'
import HiddenCheckbox from './HiddenCheckbox'
import {
  pulse,
  openTop,
  openMid,
  openBtm,
  closedTop,
  closedMid,
  closedBtm,
} from './keyframes'
import media from '../../styles/breakpoint'

const Hamburger = () => (
  <Icon htmlFor="menu">
    <Line />
  </Icon>
)

export default Hamburger

// Les 3 barres du hamburger icon
const Line = styled.span`
  display: block;
  background-color: var(--color-white);
  position: relative;
  height: 3px;
  width: 28px;
  border-radius: 5px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: var(--color-white);
  }
  &:before {
    transform: translateY(-8px);
  }
  &:after {
    transform: translateY(8px);
  }
`

const Icon = styled.label`
  position: relative;
  cursor: pointer;
  z-index: 1;
  padding: 1.5rem 0.5rem;
  display: block;

  ${media.s`
      display: none;
    `}

  & ${Line} {
    animation: ${closedMid} 0.8s backwards;
    animation-direction: reverse;
    transition: background-color 3s;

    & :before {
      animation: ${closedTop} 0.8s backwards;
      animation-direction: reverse;
      transition: background-color 3s;
    }
    & :after {
      animation: ${closedBtm} 0.8s backwards;
      animation-direction: reverse;
      transition: background-color 3s;
    }
  }

  // when checkbox is selected, target its direct sibling(& is the Icon) and play pulse animation
  ${HiddenCheckbox}:checked ~ & {
    border-radius: 50%;
    animation: ${pulse} 1s;

    & span {
      animation: ${openMid} 0.8s forwards;
      transition: background-color 2s;

      & :before {
        animation: ${openTop} 0.8s forwards;
        transition: background-color 2s;
      }

      & :after {
        animation: ${openBtm} 0.8s forwards;
        transition: background-color 2s;
      }
    }
  }
`
