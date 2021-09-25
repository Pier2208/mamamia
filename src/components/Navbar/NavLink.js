import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import media from '../../styles/breakpoint'

const NavLink = ({ to, children }) => {
  return (
    <StyledLink to={to} activeStyle={{ color: 'var(--color-white)' }}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  font-size: 3rem;
  font-family: var(--font-display);
  cursor: pointer;
  color: var(--color-white);

  ${media.s`
  font-size: 1.8rem;
  `}
`

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavLink
