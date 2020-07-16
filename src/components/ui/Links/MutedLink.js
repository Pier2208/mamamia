import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '../../../pages/node_modules/gatsby'

const Text = styled.small`
  margin: 1rem 0 0.5rem 0;
  text-decoration: underline;
  & a {
    color: ${props => props.theme.colors.lightText};
  }
`

const MutedLink = ({ children, to }) => (
  <Text>
    <Link to={to}>{children}</Link>
  </Text>
)

MutedLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
}

export default MutedLink