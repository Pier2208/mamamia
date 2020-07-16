import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//reducers
import user from './userReducer'

const persistConfig = {
    key: 'root', // at what point we want to persist the data
    storage,
    whitelist: ['user'], // what slices of the store we want to persist
  }

const rootReducer = combineReducers({
    user
})

export default persistReducer(persistConfig, rootReducer)