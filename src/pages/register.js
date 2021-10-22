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
  justify-self: end;
`

const CreateAccount = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FormTitle = styled.h1`
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 1.8rem;
  margin-bottom: 3rem;
`

const Section = styled.section`
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  margin-top: var(--spacing-l);
  display: grid;
  column-gap: var(--spacing-l);
  padding: 6rem 0;

  ${media.m`
  grid-template-columns: repeat(2, 1fr);
  ${Image} {
      display: block;
  }
  ${CreateAccount} {
    justify-self: start;
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

  & > *:first-child {
    margin-bottom: var(--spacing-m);
  }
`

const Register = ({ location }) => {
  return (
    <Layout>
      <Seo
        title="Create an account"
        description="Create an account today and order pizza right away!"
      />
      <Section>
        <Image>
          <StaticImage
            src="../assets/images/register.jpg"
            alt="Register an account."
            placeholder="tracedSVG"
            width={400}
            height={550}
            imgStyle={{ borderRadius: '10px' }}
          />
        </Image>
        <CreateAccount>
          <FormTitle>Create an account</FormTitle>
          <RegisterForm />
          <Divider />
          <SocialLogins>
            <LoginWithGoogleButton location={location.pathname}>
              Register with Google
            </LoginWithGoogleButton>
            <LoginWithFacebookButton location={location.pathname}>
              Register with Facebook
            </LoginWithFacebookButton>
          </SocialLogins>
        </CreateAccount>
      </Section>
    </Layout>
  )
}

export default Register
