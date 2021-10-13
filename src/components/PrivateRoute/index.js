import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import CircleLoader from '../Spinner/CircleLoader'
import useAuth from '../../hooks/useAuth'

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
`

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const isAuth = useAuth()
  // we don't kow user status yet -> display a spinner
  if (isAuth === null) {
    return (
      <Overlay>
        <CircleLoader color={`var(--color-black)`} />
      </Overlay>
    )
    // user is not authenticated
  } else if (!isAuth) {
    navigate('/')
    return null
  }

  // user is authenticated
  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired
}

export default PrivateRoute
