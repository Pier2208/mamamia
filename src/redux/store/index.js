import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import rootReducer from '../reducers'
import isDOMReady from '../../hooks/useDOMReady'

const devTools = () => {
  if (isDOMReady()) {
    return (
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  }
}

const store = applyMiddleware(thunk)(createStore)
const createStoreWithMiddleware = () => store(rootReducer, devTools())

export default createStoreWithMiddleware
