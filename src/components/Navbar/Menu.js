import styled from 'styled-components'

import HiddenCheckbox from './HiddenCheckbox'
import Links from './Links'
import media from '../../styles/breakpoint'

const Menu = styled.nav`
  // full screen menu on small screen is hidden until hidden checkbox is checked
  position: absolute;
  top: 70px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-primary);
  opacity: 0;
  z-index:111;

  // remove all previous styles above breakpoint small
  ${media.s`
    all:unset
  `}

  // stack les differents menus (main, auth) en colonne (les menu items restent en ligne)
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  // animation on the menu
  transition: clip-path 1s 0.5s, opacity 0.8s 0.5s;
  clip-path: circle(200px at top right);

  /* if checkbox is checked, target its direct sibling of type Menu (& is the Menu)   */
  ${HiddenCheckbox}:checked ~ & {
    clip-path: circle(100% at center);
    opacity: 1;

    // target the 1st div of links (Menu, Contact) and all the <a> inside
    ${Links}:nth-of-type(1) a {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 0.4s ease-in-out 1s,
        transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s;

      // target le 1er lien et ajoute un délai
      &:nth-of-type(1) {
        transition-delay: 0.7s;
      }
      // target le 2nd lien
      &:nth-of-type(2) {
        transition-delay: 0.8s;
      }
      // target le 3e lien
      &:nth-of-type(3) {
        transition-delay: 0.9s;
      }
      /* &:nth-of-type(4) {
          transition-delay: 1s;
        } */
    }

    // target the 2n div of links (Auth links)
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

    // target the 3rd div of links
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
`
export default Menu
