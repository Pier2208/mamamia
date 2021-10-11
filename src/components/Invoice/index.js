import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import InvoiceItem from './InvoiceItem'
import Line from '../Line'

const Container = styled.div`
  overflow-y: scroll;
  padding: var(--spacing-m) 0;
  width: 70%;
  margin: 0 auto;
`

const InvoiceTotal = styled.h2`
  font-family: var(--font-form);
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid var(--color-black);
  border-radius: 5px;
  padding: var(--spacing-s);
`

const InvoiceItems = styled.div`
  margin-top: var(--spacing-l);
  margin-bottom: var(--spacing-l);
`

const Invoice = () => {
  const cart = useSelector(state => state.cart)

  // get all cart items
  const invoiceItems = []
  for (let item in cart) {
    invoiceItems.push(cart[item])
  }

  // calculate invoice amount
  const invoiceTotal = () => {
    let tot = 0
    for (let key in invoiceItems) {
      tot += invoiceItems[key]['total']
    }
    return tot
  }

  return (
    <Container>
      {invoiceItems.length ? (
        <>
          <InvoiceItems>
            {invoiceItems.map(invoiceItem => (
              <InvoiceItem key={invoiceItem.key} invoiceItem={invoiceItem} />
            ))}
          </InvoiceItems>
          <Line />
          <InvoiceTotal>Total: ${invoiceTotal()}</InvoiceTotal>
        </>
      ) : (
        'No invoice.'
      )}
    </Container>
  )
}

export default Invoice
