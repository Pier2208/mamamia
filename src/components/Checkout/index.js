import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Layout from '../Layout'
import CheckoutForm from '../Stripe/CheckoutForm'
import Invoice from '../Invoice'
import media from '../../styles/breakpoint'
import Line from '../Line'
import { navigate } from 'gatsby-link'
import Seo from '../seo'

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

const Title = styled.h2`
  font-family: var(--font-body);
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
      <Seo title="Checkout" />
      <Section>
        <Title>Your invoice</Title>
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
