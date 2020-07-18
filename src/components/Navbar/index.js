import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions/userActions'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from './Logo'
import CircleLoader from '../ui/Spinner/CircleLoader'
import HiddenCheckbox from './HiddenCheckbox'
import Hamburger from './Hamburger'
import Menu from './Menu'
import Links from './Links'
import mainLinks from '../../constants/main-links'
import authLinks from '../../constants/auth-links'

const Nav = styled.nav`
  width: 100%;
  height: 3.5rem;
  position: fixed;
  padding: 0 5vw;
  z-index: 1111;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1),
    -4px -4px 5px rgba(255, 255, 255, 0.6);
  transition: all 0.4s ease-out;
`

const Navbar = () => {
  const navRef = useRef()
  const { isAuthenticated } = useSelector(state => state.user)
  const { loading } = useSelector(state => state.ui)

  const dispatch = useDispatch()

  useEffect(() => {
    const getPos = () => {
      let scrollPos = window.scrollY
      if (scrollPos > 10) {
        navRef.current.style.backgroundColor = '#f4f4f4'
        navRef.current.style.height = '2.5rem'
      } else {
        navRef.current.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
        navRef.current.style.height = '3.5rem'
        navRef.current.style.boxShadow = 'none'
      }
    }
    window.addEventListener('scroll', getPos)

    return () => {
      window.removeEventListener('scroll', getPos)
    }
  }, [])

  const logout = () => dispatch(logoutUser())

  return (
    <Nav ref={navRef}>
      <Logo></Logo>
      <HiddenCheckbox id="menu" />
      <Hamburger />
      <Menu>
        <Links mcol fromRight>
          {mainLinks.map((link, i) => {
            if (!link.private) {
              return (
                <Link key={i} to={link.path}>
                  {link.icon} {link.name}
                </Link>
              )
            }
          })}
        </Links>
        {loading ? (
          <CircleLoader />
        ) : (
          <Links mcol fromRight>
            {authLinks.map((link, i) => {
              if (isAuthenticated && link.private) {
                if (link.name === 'Logout') {
                  return (
                    <Link key={i} to={link.path} onClick={logout}>
                      {link.icon} {link.name}
                    </Link>
                  )
                }
                return (
                  <Link key={i} to={link.path}>
                    {link.icon} {link.name}
                  </Link>
                )
              } else if (!isAuthenticated && !link.private) {
                return (
                  <Link key={i} to={link.path}>
                    {link.icon} {link.name}
                  </Link>
                )
              }
            })}
          </Links>
        )}
      </Menu>
    </Nav>
  )
}

export default Navbar
