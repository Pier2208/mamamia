import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import ForgotPasswordForm from '../components/Forms/ForgotPasswordForm'

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const ForgotPassword = () => {
  return (
    <Layout>
      <Section>
        <ForgotPasswordForm />
      </Section>
    </Layout>
  )
}

export default ForgotPassword
