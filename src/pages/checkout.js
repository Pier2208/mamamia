import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Layout from '../components/Layout'
import CheckoutForm from '../components/Stripe/CheckoutForm'
import Invoice from '../components/Invoice'
import media from '../styles/breakpoint'
import Line from '../components/Line'
import { navigate } from 'gatsby-link'
import SEO from '../components/seo'

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
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    if (Object.keys(cart).length === 0) {
      navigate('/menu/pizza')
    }
  }, [cart])

  return (
    <Layout>
      <SEO title="Checkout" />
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
