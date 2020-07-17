import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import rootReducer from '../reducers'
import useDOMReady from '../../hooks/useDOMReady'

let createStoreWithMiddleware

if (useDOMReady()) {
  const store = applyMiddleware(thunk)(createStore)
  createStoreWithMiddleware = () =>
    store(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

export default createStoreWithMiddleware
