import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from '../styles/global'
import Theme from '../styles/theme'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <Theme>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
