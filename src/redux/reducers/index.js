import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//reducers
import user from './userReducer'
import ui from'./uiReducer'

const persistConfig = {
    key: 'root', // at what point we want to persist the data
    storage,
    blacklist: ['user', 'ui'], // what slices of the store we want to persist
  }

const rootReducer = combineReducers({
    user,
    ui
})

export default persistReducer(persistConfig, rootReducer)