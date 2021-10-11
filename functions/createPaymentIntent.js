//https://nancyhuynh-til.netlify.app/stripe-react-notes/
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const inventory = require('../data/inventory.json')

exports.handler = async (event, context) => {
  // safeguard: only accept POST request
  const method = event.httpMethod
  if (method !== 'POST') {
    return {
      statusCode: '405',
      body: 'Only Accepts POST Requests'
    }
  }

  // get cart items
  const { items } = JSON.parse(event.body)

  // validate cart item's prices against inventory to correct any fraudulent price manipulations on the front-end
  const calculateOrderAmount = items => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    let total = 0
    for(let item in items) {
      let subTotal = inventory[item] * items[item].quantity
      total += subTotal
      console.log(total)
    }
    return total * 100 // Stripe requires amount in cents
  }

  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      payment_method_types: ['card'],
      amount: calculateOrderAmount(items),
      currency: 'cad'
    })

    console.log('payment intwnt', paymentIntent)

    return {
      statusCode: 200,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret
      })
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    }
  }
}
