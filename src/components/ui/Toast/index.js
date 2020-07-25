import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hideToast } from '../../../redux/actions/uiActions'
import styled, { keyframes } from 'styled-components'
import IconButton from '../Buttons/IconButton'
import { AiOutlineClose } from 'react-icons/ai'

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
  max-width: 350px;
  padding: 0.7rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props =>
    props.genre === 'success' ? 'rgba(38, 166, 91, 1)' : 'red'};
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  color: ${props => props.theme.colors.offWhite};
  font-size: 1.1rem;
  border-radius: 10px;
  font-family: 'Lato';
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  opacity: 1;
  animation: ${fadeIn} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 111;
`

const Toast = ({ children, genre }) => {
  const dispatch = useDispatch()
  const closeToast = () => {
    dispatch(hideToast())
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast()
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BaseToast genre={genre}>
      {children}
      <IconButton onClick={closeToast} ariaLabel='close notification'>
        <AiOutlineClose />
      </IconButton>
    </BaseToast>
  )
}

export default Toast
