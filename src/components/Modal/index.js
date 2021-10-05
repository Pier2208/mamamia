import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// COMPONENTS
import Overlay from './Overlay'
import ModalStyle from './ModalStyle'

// REDUX ACTIONS
import { hideModal } from '../../redux/actions/modalActions'

////////////////
//// REACT ////
//////////////
const Modal = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const handleKeyDown = e => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      dispatch(hideModal())
    }
  }

  return (
    <Overlay onClick={() => dispatch(hideModal())}>
      <ModalStyle
        role="dialog"
        aria-modal="true"
        type="quickLoginModal"
        onClick={e => e.stopPropagation()} // empêcher la fermeture du modal au clic dessus
      >
        {children}
      </ModalStyle>
    </Overlay>
  )
}

export default Modal
