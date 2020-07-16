import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hotpink;
`

const UserAccount = () => {
  const user = useSelector(state => state.user)

  return (
    <Section>
      <h2>ACCOUNT</h2>
      <h2>Hello {user.email}</h2>
    </Section>
  )
}

export default UserAccount