import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Icon = styled.span`
  width: fit-content;
  height: fit-content;
  padding: 0.3rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 300ms ease-in-out;
  & :hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.2);
  }
`

const IconButton = ({ children, onClick, ariaLabel }) => (
  <Icon onClick={onClick} aria-label={ariaLabel}>
    {children}
  </Icon>
)

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
}

export default IconButton
