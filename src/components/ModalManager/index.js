import React from 'react'
import { useSelector } from 'react-redux'

//import modal components
import LoginModal from '../Forms/LoginForm/LoginModal'
import Cart from '../Cart'

const MODAL_COMPONENTS = {
  CART_MODAL: Cart,
  LOGIN_MODAL: LoginModal
}

// ModalManager reads from the redux store the type of modal to open and its associated style
const ModalManager = () => {
  const { modalType, modalProps } = useSelector(state => state.modal)
  if (!modalType) {
    return null
  }

  const ModalComponent = MODAL_COMPONENTS[modalType]

  return <ModalComponent {...modalProps} />
}

export default ModalManager
