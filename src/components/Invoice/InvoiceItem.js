import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

////////////////////////
// STYLED COMPONENTS //
//////////////////////
const Article = styled.article`
  width: 100%;
  padding: 0.5rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 110px 1fr;
  justify-items: stretch;
  align-items: center;
`

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  & h2 {
    font-weight: bold;
    font-size: 1.1rem;
    letter-spacing: 0px;
    font-family: var(--font-form);
    margin-bottom: 0.5rem;
  }

  & small {
    font-family: var(--font-form);
  }
`

const InvoiceItem = ({ invoiceItem}) => {
  return (
    <Article>
      <GatsbyImage image={invoiceItem.image} alt={invoiceItem.name} />
      <ItemInfo>
        <h2>{invoiceItem.name} x {invoiceItem.quantity}</h2>
        <small>
          {invoiceItem.size} | ${invoiceItem.price}
        </small>
        <small>Sub-total: ${invoiceItem.total}</small>
      </ItemInfo>
    </Article>
  )
}

export default InvoiceItem
