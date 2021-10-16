import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../redux/actions/userActions'
import { showModal } from '../../redux/actions/modalActions'
import { LOGIN_MODAL, CART_MODAL } from '../ModalManager/modalTypes'
import NavLink from './NavLink'
import Logo from '../Logo'
import useAuth from '../../hooks/useAuth'
import { Link } from 'gatsby'

import CircleLoader from '../Spinner/CircleLoader'
import HiddenCheckbox from './HiddenCheckbox'
import Hamburger from './Hamburger'
import Menu from './Menu'
import Links from './Links'
import authLinks from '../../constants/auth-links'
import mainLinks from '../../constants/main-links'
import { ButtonLink } from '../Buttons/CustomButtons'

const Navbar = () => {
  const isAuth = useAuth()
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
        <SiteName><Link to="/">Mamamia Pizza</Link></SiteName>
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
                if (isAuth && link.private) {
                  if (link.name === 'Logout') {
                    return loading ? (
                      <CircleLoader />
                    ) : (
                      <ButtonLink
                        type="button"
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
                        type="button"
                        key={i}
                        onClick={() => {
                          if (cartQuantity()) {
                            dispatch(
                              showModal(CART_MODAL, {
                                style: 'cartModal'
                              })
                            )
                          }
                        }}
                        type="button"
                        color={`var(--color-white)`}
                        isCartEmpty={!cartQuantity()}
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
                } else if (!isAuth && !link.private) {
                  return loading ? (
                    <CircleLoader />
                  ) : (
                    // LOGIN BUTTON
                    <ButtonLink
                      type="button"
                      key={i}
                      onClick={() =>
                        dispatch(
                          showModal(LOGIN_MODAL, {
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

  & ${ButtonLink} {
    margin-top: 0;
  }
`

const SiteName = styled.h1`
  display: block;
  color: var(--color-white);
  margin-right: auto;
  margin-bottom: 0%; ;
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
  font-family: var(--font-body);
  font-size: 0.8rem;
`

export default Navbar
