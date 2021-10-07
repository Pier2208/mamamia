import { SHOW_MODAL, HIDE_MODAL } from './types'

export const showModal = (modalType, modalProps = {}) => {
  // prevent page scrolling while modal is opened
  document.body.style.overflow = 'hidden'
  document.body.style.height = '100%'
  return {
    type: SHOW_MODAL,
    modalType,
    modalProps
  }
}

export const hideModal = () => {
  // restore page scrolling when modal is closed
  document.body.style.overflow = 'auto'
  document.body.style.height = 'auto'
  return {
    type: HIDE_MODAL
  }
}
