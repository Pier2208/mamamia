import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const theme = {
  colors: {
    offWhite: '#f4f4f4',
    primaryColor: 'darkcyan',
    secondaryColor: '#F9B100',
    darkText: '#0C0F12',
    lightText: '#8e8e8e'
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
