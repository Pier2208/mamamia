import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Content= styled.div`
  margin-right: auto;
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 0.2rem 0.7rem;
  & img {
    display: flex;
    align-items: center;
  }
`

const Logo = ({ children }) => <Content>{children}</Content>

Logo.propTypes = {
  children: PropTypes.node,
}

export default Logo
