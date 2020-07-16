import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { navigate } from '../../pages/node_modules/gatsby'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const user = useSelector(state => state.user)

  if (!user.isAuthenticated) {
    navigate('/')
    return null
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
