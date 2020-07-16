import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const store = applyMiddleware(thunk)(createStore)
const createStoreWithMiddleware = () => store(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default createStoreWithMiddleware