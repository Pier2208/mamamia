import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardField from './CardField'
import Field from './Field'
import { Fieldset } from './uiComponents'
import ErrorMessage from './ErrorMessage'
import SubmitButton from './SubmitButton'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'

// REDUX ACTIONS
import { resetCart } from '../../redux/actions/cartActions'

const CheckoutForm = () => {
  const cart = useSelector(state => state.cart)
  const { email } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  const [billingDetails, setBillingDetails] = useState({
    email,
    phone: '',
    name: '',
    address: {
      city: '',
      line1: '',
      postal_code: ''
    }
  })

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads but only if cart is NOT empty
      fetch('/.netlify/functions/createPaymentIntent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: cart })
      })
        .then(res => {
          return res.json()
        })
        .then(data => {
          setClientSecret(data.clientSecret)
        })
  }, [cart])

  const handleSubmit = async e => {
    e.preventDefault()

    setProcessing(true)

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        type: 'card',
        card: cardElement,
        billing_details: billingDetails
      }
    })

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
      setProcessing(false)
    } else {
      setError(null)
      setProcessing(false)
      setSucceeded(true)
      // reset cart
      dispatch(resetCart())
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* 1er groupe d'inputs */}
      <Fieldset>
        <Field
          label="Name: "
          id="name"
          type="text"
          required
          autoComplete="name"
          value={billingDetails.name}
          onChange={e => {
            setBillingDetails({ ...billingDetails, name: e.target.value })
          }}
        />
        <Field
          label="Email: "
          id="email"
          type="email"
          required
          autoComplete="email"
          value={billingDetails.email}
          onChange={e => {
            setBillingDetails({ ...billingDetails, email: e.target.value })
          }}
        />
        <Field
          label="Phone: "
          id="phone"
          type="tel"
          required
          autoComplete="tel"
          value={billingDetails.phone}
          onChange={e => {
            setBillingDetails({ ...billingDetails, phone: e.target.value })
          }}
        />
        <Field
          label="Address: "
          id="address"
          type="text"
          required
          autoComplete="address"
          value={billingDetails.address.line1}
          onChange={e => {
            setBillingDetails({
              ...billingDetails,
              address: { ...billingDetails.address, line1: e.target.value }
            })
          }}
        />
        <Field
          label="City: "
          id="city"
          type="text"
          required
          autoComplete="locality"
          value={billingDetails.address.city}
          onChange={e => {
            setBillingDetails({
              ...billingDetails,
              address: { ...billingDetails.address, city: e.target.value }
            })
          }}
        />
        {/* test card: https://stripe.com/docs/testing#cards */}
        <Field
          label="Postal Code: "
          id="postalCode"
          type="text"
          required
          autoComplete="postal_code"
          value={billingDetails.address.postal_code}
          onChange={e => {
            setBillingDetails({
              ...billingDetails,
              address: {
                ...billingDetails.address,
                postal_code: e.target.value
              }
            })
          }}
        />
      </Fieldset>
      {/* 2eme group d'inputs */}
      <Fieldset>
        <CardField />
      </Fieldset>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <SubmitButton processing={processing} error={error} disabled={!stripe}>
        Pay
      </SubmitButton>
    </form>
  )
}

export default CheckoutForm
