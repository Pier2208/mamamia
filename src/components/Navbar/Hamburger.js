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

const Icon = styled.label`
  position: relative;
  cursor: pointer;
  z-index: 1;
  padding: 1.625rem 0.625rem;
  display: none;

  @media (max-width: 970px) {
    display: block;

    & span {
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

    ${HiddenCheckbox}:checked ~ & {
      border-radius: 50%;
      animation: ${pulse} 1s;

      & span {
        animation: ${openMid} 0.8s forwards;
        background-color: #fff;
        transition: background-color 2s;

        & :before {
          animation: ${openTop} 0.8s forwards;
          background-color: #fff;
          transition: background-color 2s;
        }

        & :after {
          animation: ${openBtm} 0.8s forwards;
          background-color: #fff;
          transition: background-color 2s;
        }
      }
    }
  }
`

const Line = styled.span`
  display: block;
  background-color: #000;
  position: relative;
  height: 2px;
  width: 22px;
  border-radius: 5px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #000;
  }
  &::before {
    transform: translateY(-6px);
  }
  &::after {
    transform: translateY(6px);
  }
`

const Hamburger = () => (
  <Icon htmlFor="menu">
    <Line />
  </Icon>
)

export default Hamburger
