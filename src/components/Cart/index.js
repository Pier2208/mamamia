import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../Modal'
import CartItem from './CartItem'
import Line from '../Line'
import { CustomButton } from '../Buttons/CustomButtons'

// REDUX ACTIONS
import { hideModal } from '../../redux/actions/modalActions'

const Container = styled.div`
  overflow-y: scroll;
  padding: var(--spacing-m) 0;
  width: 80%;
  margin: 0 auto;
`

const CartTotal = styled.h2`
  font-family: var(--font-form);
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
`

const CartItems = styled.div`
  margin-top: var(--spacing-l);
  margin-bottom: var(--spacing-l);
`

const Cart = props => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const cartItems = []
  for (let item in cart) {
    cartItems.push(cart[item])
  }

  const cartTotal = () => {
    let tot = 0
    for (let key in cartItems) {
      tot += cartItems[key]['total']
    }
    return tot
  }

  return (
    <Modal type={props.style}>
      <Container>
        {cartItems.length ? (
          <>
            <CartTotal>Total: ${cartTotal()}</CartTotal>
            <Line />
            <CartItems>
              {cartItems.map(cartItem => (
                <CartItem key={cartItem.key} cartItem={cartItem} />
              ))}
            </CartItems>
            {/* Navigate to checkout page */}
            <CustomButton
              type="button"
              role="link" // for accessibility
              onClick={() => {
                dispatch(hideModal())
                navigate('/checkout')
              }}
            >
              Proceed to checkout
            </CustomButton>
          </>
        ) : (
          'Your cart is empty.'
        )}
      </Container>
    </Modal>
  )
}

export default Cart
