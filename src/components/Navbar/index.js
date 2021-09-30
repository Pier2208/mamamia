import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions/userActions'
import NavLink from './NavLink'
import Logo from '../Logo'

import QuickLoginModal from './QuickLoginModal'
import HiddenCheckbox from './HiddenCheckbox'
import Hamburger from './Hamburger'
import Menu from './Menu'
import Links from './Links'
import authLinks from '../../constants/auth-links'
import mainLinks from '../../constants/main-links'
import { ButtonLink } from '../Buttons/CustomButtons'

const Navbar = () => {
  const { isAuthenticated } = useSelector(state => state.user)
  const [showLogin, setShowLogin] = useState(false)
  const dispatch = useDispatch()

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
            {/* MAIN LINKS */}
            {mainLinks.map((link, i) =>
              !link.private ? (
                <NavLink
                  key={i}
                  to={link.path}
                  color={'var(--color-white)'}
                  activeStyle={{
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                  }}
                >
                  {link.name}
                </NavLink>
              ) : null
            )}
            {/* AUTH LINKS */}
            {authLinks.map((link, i) => {
              if (isAuthenticated && link.private) {
                if (link.name === 'Logout') {
                  return (
                    <ButtonLink
                      key={i}
                      onClick={() => dispatch(logoutUser())}
                      type="button"
                      color={`var(--color-white)`}
                    >
                      {link.name}
                    </ButtonLink>
                  )
                }
                return (
                  <NavLink
                    key={i}
                    to={link.path}
                    color={'var(--color-white)'}
                    activeStyle={{
                      fontWeight: 'bold',
                      textDecoration: 'underline'
                    }}
                  >
                    {link.name}
                  </NavLink>
                )
              } else if (!isAuthenticated && !link.private) {
                return (
                  <ButtonLink
                    key={i}
                    onClick={() => setShowLogin(!showLogin)}
                    type="button"
                    color={`var(--color-white)`}
                  >
                    {link.name}
                  </ButtonLink>
                )
              }
            })}
          </Links>
        </Menu>
      </NavbarMain>
      <QuickLoginModal show={showLogin} />
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--color-primary);
  height: 70px;
  width: 100%;
  position: relative;
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
