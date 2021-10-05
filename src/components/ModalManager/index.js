import React from 'react'
import { useSelector } from 'react-redux'

//import modal components
import QuickLoginModal from '../Forms/LoginForm/QuickLoginModal'

const MODAL_COMPONENTS = {
  QUICK_LOGIN_MODAL: QuickLoginModal
}

const ModalManager = () => {
  const { modalType, modalProps } = useSelector(state => state.modal)
  if (!modalType) {
    return null
  }

  const ModalComponent = MODAL_COMPONENTS[modalType]
  return <ModalComponent {...modalProps} />
}

export default ModalManager
