import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import GlobalStyle from '../styles/global'
import styled from 'styled-components'

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.main`
  margin-top: 0;
`

export default Layout