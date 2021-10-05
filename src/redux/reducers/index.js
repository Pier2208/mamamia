import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//reducers
import user from './userReducer'
import ui from'./uiReducer'
import modal from './modalReducer'

const persistConfig = {
    key: 'root', // at what point we want to persist the data
    storage,
    blacklist: ['user', 'ui', 'modal'], // what slices of the store we want to persist
  }

const rootReducer = combineReducers({
    user,
    ui,
    modal
})

export default persistReducer(persistConfig, rootReducer)