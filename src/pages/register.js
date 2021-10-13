import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Divider from '../components/Divider'
import RegisterForm from '../components/Forms/RegisterForm'
import media from '../styles/breakpoint'
import LoginWithGoogleButton from '../components/Buttons/LoginWithGoogle'
import LoginWithFacebookButton from '../components/Buttons/LoginWithFacebook'
import Seo from '../components/seo'

const Image = styled.div`
display: none;
`
const Section = styled.section`
  width: 100%;
  margin-top: var(--spacing-l);
  display: grid;
  justify-items: center;
  column-gap: 2rem;

  ${media.m`
  grid-template-columns: repeat(2, 1fr);
  ${Image} {
      display: block;
  }
  `}
`

const SocialLogins = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
`

const Register = ({ location }) => {

  return (
    <Layout>
      <Seo title="Create an account" description="Create an account today and order pizza right away!" />
      <Section>
        <Image>
          <StaticImage
            src="../assets/images/register.jpg"
            alt="Register an account."
            placeholder="tracedSVG"
            width={500}
            height={800}
            imgStyle={{ borderRadius: '10px' }}
          />
        </Image>
        <div className="center-content">
          <h1>Create an account</h1>
          <RegisterForm />
          <Divider />
          <SocialLogins>
            <LoginWithGoogleButton location={location.pathname}>Register with Google</LoginWithGoogleButton>
            <LoginWithFacebookButton location={location.pathname}>Register with Facebook</LoginWithFacebookButton>
          </SocialLogins>
        </div>
      </Section>
    </Layout>
  )
}

export default Register
