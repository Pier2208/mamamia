import React from 'react'
import Layout from '../components/Layout'
import { Router } from '@reach/router'
import PrivateRoute from '../components/PrivateRoute'
import UserAccount from '../components/Account/UserAccount'
// import AccountSettings from "../components/AccountSettings"
// import AccountBilling from "../components/AccountBilling"

const Account = () => {
  return (
    <Layout>
      <Router>
        <PrivateRoute path="/account" component={UserAccount} />
        {/* <PrivateRoute path="/account/settings" component={AccountSettings} />
          <PrivateRoute path="/account/billing" component={AccountBilling} /> */}
      </Router>
    </Layout>
  )
}

export default Account
