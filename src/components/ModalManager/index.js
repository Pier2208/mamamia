import React from 'react'
import { useSelector } from 'react-redux'

//import modal components
import QuickLoginModal from '../Forms/LoginForm/QuickLoginModal'
import Cart from '../Cart'

const MODAL_COMPONENTS = {
  QUICK_LOGIN_MODAL: QuickLoginModal,
  CART_MODAL: Cart
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
