import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import media from '../../styles/breakpoint'

const NavLink = ({ to, children, color, activeStyle, partiallyActive }) => {
  return (
    <StyledLink to={to} color={color} activeStyle={activeStyle} partiallyActive={true}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  font-size: 3rem;
  font-family: var(--font-display);
  cursor: pointer;
  color: ${({ color}) => color || 'var(--color-grey-dark)'}; // get the color passed into the component props


  ${media.s`
  font-size: 2.3rem;
  `}
`

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  activeStyle: PropTypes.object.isRequired,
  color: PropTypes.string
}

export default NavLink
