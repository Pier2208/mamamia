import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Layout from '../components/Layout'
import ResetPasswordForm from '../components/Forms/ResetPasswordForm'
import Spinner from '../components/ui/Spinner/Square'

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const ResetPassword = () => {
  const [validToken, setValidToken] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    
  }, [validToken])

  return (
    <Layout>
      <Section>
        {validToken === null && <Spinner />}
        {validToken === false && <ResetPasswordForm />}
        {validToken === true && <ResetPasswordForm />}
      </Section>
    </Layout>
  )
}

export default ResetPassword
