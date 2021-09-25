import React from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'
import Logo from '../Logo'

import HiddenCheckbox from './HiddenCheckbox'
import Hamburger from './Hamburger'
import Menu from './Menu'
import Links from './Links'
import mainLinks from '../../constants/main-links'

const Navbar = () => {
  return (
    <Header>
      <NavbarLeft>
        <div />
        <div>
          <Logo fill={'var(--color-grey-dark)'} />
        </div>
      </NavbarLeft>
      <NavbarMain>
        <SiteName>Mamamia Pizza</SiteName>
        <HiddenCheckbox id="menu" />
        <Hamburger />
        <Menu>
          <Links>
            {mainLinks.map((link, i) =>
              !link.private ? (
                <NavLink key={i} to={link.path}>
                  {link.name}
                </NavLink>
              ) : null
            )}
          </Links>
        </Menu>
      </NavbarMain>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--color-primary);
  height: 70px;
  width: 100%;
`
// partie gauche du header(div verte et blanche)
const NavbarLeft = styled.div`
  display: flex;
  height: 100%;
  width: 140px;
  & > div {
    flex: 1;
  }
  & > div:first-child {
    background-color: var(--color-secondary);
  }
  & > div:last-child {
    background-color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
// partie principale du header (rouge)
const NavbarMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-m);
  width: 100%;
`

const SiteName = styled.h1`
  color: var(--color-white);
  margin-right: auto;
`

export default Navbar
