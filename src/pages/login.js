import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Layout from '../components/Layout'
//import RegisterForm from '../components/Forms/RegisterForm'
import LoginForm from '../components/Forms/LoginForm'
import Hero from '../components/Hero'
import SEO from '../components/seo'
import { navigate } from 'gatsby'

const Grid = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 20rem) [col-end])
    [center-end]
    minmax(5rem, 1fr) [full-end];
  grid-template-rows: 100vh;
`

const FormContainer = styled.div`
  grid-column: col-end 4 / full-end;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
`

const Login = ({ data: { loginImage } }) => {
  const { isAuthenticated } = useSelector(state => state.user)

  if (isAuthenticated) {
    navigate('/')
    return null
  }

  return (
    <Layout>
      <SEO title="Login" />
      <Grid>
        <Hero
          tag="header"
          img={loginImage.childImageSharp.fluid}
          format="half-left"
        />
        <FormContainer>
          <LoginForm />
        </FormContainer>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query {
    loginImage: file(relativePath: { eq: "loginImage.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Login
