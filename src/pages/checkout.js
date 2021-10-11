import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import CheckoutForm from '../components/Stripe/CheckoutForm'
import Invoice from '../components/Invoice'
import media from '../styles/breakpoint'
import Line from '../components/Line'

const Section = styled.section`
  width: 100%;
`

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

  ${media.s`
    grid-template-columns: repeat(2, 1fr);
  `}
`

const Checkout = () => {
  return (
    <Layout>
      <Section>
        <h2>Your invoice</h2>
        <p>Please review your invoice and confirm payment. Thank you!</p>
        <Line />
        <Grid>
          <Invoice />
          <CheckoutForm />
        </Grid>
      </Section>
    </Layout>
  )
}

export default Checkout
