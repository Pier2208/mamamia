import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import GlobalStyles from '../styles/global'
import Theme from '../styles/theme'
import Navbar from './Navbar'
import Toast from './ui/Toast'

const Layout = ({ children }) => {
  const { toast } = useSelector(state => state.ui)
  return (
    <Theme>
      <GlobalStyles />
      <Navbar />
      <main>
        {toast && toast.isActive ? (
          <Toast genre={toast.genre}>{toast.message}</Toast>
        ) : null}
        {children}
      </main>
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
