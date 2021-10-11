import React from 'react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import createStore from './src/redux/store'
import { getCurrentUser } from './src/redux/actions/userActions'


import ModalManager from './src/components/ModalManager'

// STRIPE
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe('pk_test_roWUE6MhbYXKleMM7RO6nzNv')

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  const store = createStore()
  const persistor = persistStore(store)

  // on first load or page refresh; fetch the current logged in user
  store.dispatch(getCurrentUser())

  return (
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <ModalManager />
        <PersistGate persistor={persistor} loading={null}>
          {element}
        </PersistGate>
      </Elements>
    </Provider>
  )
}

//https://github.com/auth0-blog/gatsby-auth0/blob/master/package.json
// https://auth0.com/blog/securing-gatsby-with-auth0/
