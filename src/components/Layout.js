import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'
import GlobalStyle from '../styles/global'
import styled from 'styled-components'
import Toast from './Toast'

const Layout = ({ children }) => {
  const { toast } = useSelector(state => state.ui)

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Main>
        {toast && toast.isActive ? (
          <Toast genre={toast.genre}>{toast.message}</Toast>
        ) : null}
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
