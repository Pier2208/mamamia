import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text = styled.small`
  margin: 1rem 0 0.5rem 0;
  color: ${props => props.theme.colors.lightText};
`

const Small = ({ children }) => <Text>{children}</Text>

Small.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Small
