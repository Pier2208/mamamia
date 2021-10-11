import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import { FormRow } from './uiComponents'

// style the inside of the CardElement
const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#504E4E',
      color: '#504E4E',
      fontWeight: 500,
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#504E4E'
      },
      '::placeholder': {
        color: '#504E4E'
      }
    },
    invalid: {
      iconColor: '#D12626',
      color: '#D12626'
    }
  }
}

// a wrapper component around a Stripe CardElement
const CardField = ({ onChange }) => {
  return (
    <FormRow>
      <CardElement options={CARD_OPTIONS} hidePostalCode={true} onChange={onChange} />
    </FormRow>
  )
}

export default CardField
