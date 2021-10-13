import React from 'react'

import { Router } from '@reach/router'
import PrivateRoute from '../components/PrivateRoute'
import Checkout from '../components/Checkout'

// private path /user/*
const User = () => {
  return (
    <Router>
      <PrivateRoute path="/user/checkout" component={Checkout} />
    </Router>
  )
}

export default User
