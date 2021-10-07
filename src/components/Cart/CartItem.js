import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

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

    & h2{
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



const CartItem = ({ name, quantity, size, price, image, total }) => {
  return (
    <Article>
      <GatsbyImage
        image={image}
        alt={name}
      />
      <ItemInfo>
          <h2>{quantity} x {name}</h2>
          <small>{size}</small>
          <small>Sub-total: ${total}</small>
      </ItemInfo>
    </Article>
  )
}

export default CartItem
