import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import Icon from '../Icon'

// REDUX ACTIONS
import { hideToast } from '../../redux/actions/uiActions'

const fadeIn = keyframes`
0% {
    bottom: -200px;
    opacity: 0;
    }
100% {
      bottom: 1rem;
      opacity: 1;
    }
`

const BaseToast = styled.div`
  width: 60%;
  max-width: 500px;
  padding: 0.7rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props =>
    props.genre === 'success'
      ? 'var(--color-secondary)'
      : 'var(--color-primary)'};
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  color: var(--color-white);
  font-size: 1.1rem;
  border-radius: 10px;
  font-family: 'Lato';
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  opacity: 1;
  animation: ${fadeIn} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 111;
`

const InteractiveIcon = styled(Icon)`
  cursor: pointer;
`

// les toats sont dispatchés à partir du <Layout />
const Toast = ({ children, genre }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast()
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const closeToast = () => {
    dispatch(hideToast())
  }

  return (
    <BaseToast genre={genre}>
      {children}
      <InteractiveIcon
        onClick={closeToast}
        name="close"
        fill={'var(--color-white)'}
        stroke={'var(--color-secondary)'}
      />
    </BaseToast>
  )
}

export default Toast
