import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

// REDUX ACTIONS
import { removeFromCart, editCartQuantity } from '../../redux/actions/cartActions'

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

const ItemActions = styled.div`
  display: flex;
  align-items: center;
`

const DeleteItem = styled.small`
  color: var(--color-primary);
  cursor: pointer;
  font-family: var(--font-form);
  &:hover {
    text-decoration: underline;
  }
`

const Select = styled.select`
  outline: none;
  border-radius: 3px;
  border-color: var(--color-grey-dark);
`

////////////
// REACT //
//////////
const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch()
  const [qty, setQty] = useState(cartItem.quantity)

  const updateCart = e => {
    setQty(e.target.value)
    dispatch(editCartQuantity(cartItem.key, e.target.value))
  }

  return (
    <Article>
      <GatsbyImage image={cartItem.image} alt={cartItem.name} />
      <ItemInfo>
        <h2>{cartItem.name}</h2>
        <small>{cartItem.size} | ${cartItem.price}</small>
        <small>Sub-total: ${cartItem.total}</small>
        <ItemActions>
          <DeleteItem onClick={() => dispatch(removeFromCart(cartItem))}>
            Remove
          </DeleteItem>
          <small>|</small>
          <form>
            <label htmlFor="quantity">
              <small>Quantity: </small>
            </label>
            <Select
              id="quantity"
              name="quantity"
              value={qty}
              onChange={e => updateCart(e)}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map(n => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </Select>
          </form>
        </ItemActions>
      </ItemInfo>
    </Article>
  )
}

export default CartItem
