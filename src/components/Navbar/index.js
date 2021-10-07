import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions/userActions'
import { showModal } from '../../redux/actions/modalActions'
import { QUICK_LOGIN_MODAL, CART_MODAL } from '../ModalManager/modalTypes'
import NavLink from './NavLink'
import Logo from '../Logo'

import CircleLoader from '../Spinner/CircleLoader'
import HiddenCheckbox from './HiddenCheckbox'
import Hamburger from './Hamburger'
import Menu from './Menu'
import Links from './Links'
import authLinks from '../../constants/auth-links'
import mainLinks from '../../constants/main-links'
import { ButtonLink } from '../Buttons/CustomButtons'

const Navbar = () => {
  const { isAuthenticated } = useSelector(state => state.user)
  const { loading } = useSelector(state => state.ui)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const cartQuantity = () => {
    let tot = null
    for (let key in cart) {
      tot += Number(cart[key]['quantity'])
    }
    return tot
  }

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
            {mainLinks.map(
              (link, i) =>
                !link.private && (
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
            )}

            {/* AUTH LINKS */}
            {loading ? (
              <CircleLoader />
            ) : (
              authLinks.map((link, i) => {
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
                  if (link.name === 'Cart') {
                    return (
                      <ButtonLink
                        key={i}
                        onClick={() =>
                          dispatch(
                            showModal(CART_MODAL, {
                              style: 'cartModal'
                            })
                          )
                        }
                        type="button"
                        color={`var(--color-white)`}
                      >
                        {cartQuantity() && (
                          <CartQuantity>{cartQuantity()}</CartQuantity>
                        )}
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
                      onClick={() =>
                        dispatch(
                          showModal(QUICK_LOGIN_MODAL, {
                            style: 'quickLoginModal'
                          })
                        )
                      }
                      type="button"
                      color={`var(--color-white)`}
                    >
                      {link.name}
                    </ButtonLink>
                  )
                }
              })
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
  position: fixed;
  z-index: 1111;
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
const CartQuantity = styled.span`
  position: absolute;
  top: -5px;
  left: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-secondary);
  color: var(--color-white);
  font-family: var(--font-form);
  font-size: 0.8rem;
`

export default Navbar
