import styled from 'styled-components'

import HiddenCheckbox from './HiddenCheckbox'
import Links from './Links'

const Menu = styled.div`
  display: flex;
  align-items: center;
  transition: clip-path 1s 0.5s, opacity 0.8s 0.5s;

  @media (max-width: 970px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${props => props.theme.colors.secondaryColor};
    clip-path: circle(200px at top right);
    opacity: 0;
    /* if parent checkbox is checked, target this direct sibling  */
    ${HiddenCheckbox}:checked ~ & {
      clip-path: circle(100% at center);
      opacity: 1;
      ${Links}:nth-of-type(1) a {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 0.4s ease-in-out 1s,
          transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s;
        &:nth-of-type(1) {
          transition-delay: 0.7s;
        }
        &:nth-of-type(2) {
          transition-delay: 0.8s;
        }
        &:nth-of-type(3) {
          transition-delay: 0.9s;
        }
        /* &:nth-of-type(4) {
          transition-delay: 1s;
        } */
      }
      ${Links}:nth-of-type(2) a {
        transform: translateY(0);
        opacity: 1;
        transition: opacity 0.4s ease-in-out 1s,
          transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s;
        &:nth-of-type(1) {
          transition-delay: 1s;
        }
        &:nth-of-type(2) {
          transition-delay: 1.2s;
        }
        /* &:nth-of-type(3) {
          transition-delay: 1.4s;
        } */
      }
      ${Links}:nth-of-type(3) a {
        transform: translateY(0);
        opacity: 1;
        transition: opacity 0.4s ease-in-out 1s,
          transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s;
        &:nth-of-type(1) {
          transition-delay: 1s;
        }
      }
    }
  }
`

export default Menu
