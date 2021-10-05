import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Divider from '../components/Divider'
import RegisterForm from '../components/Forms/RegisterForm'
import Icon from '../components/Icon'
import media from '../styles/breakpoint'
import { CustomButton } from '../components/Buttons/CustomButtons'
import LoginWithGoogleButton from '../components/Buttons/LoginWithGoogle'

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

const inputStyle = {
  fontSize: '1rem',
  padding: '0.5rem'
}

const loginWithFacebookStyle = {
  ...inputStyle,
  width: '100%',
  bgColor: '#4267B2',
  color: 'var(--color-white)'
}

const Register = () => {
  return (
    <Layout>
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
            <LoginWithGoogleButton>Register with Google</LoginWithGoogleButton>
            <CustomButton {...loginWithFacebookStyle}>
              <Icon
                name="facebook"
                width="1.4rem"
                height="1.4rem"
                style={{ marginRight: '0.5rem' }}
              />
              Register with Facebook
            </CustomButton>
          </SocialLogins>
        </div>
      </Section>
    </Layout>
  )
}

export default Register
