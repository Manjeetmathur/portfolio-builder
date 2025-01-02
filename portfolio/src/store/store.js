// import {configureStore} from "@reduxjs/toolkit"
// import authSlice from "./authSlice"

// const store = configureStore({
//       reducer : {
//             auth : authSlice
//       }
// })

// export default store

import {configureStore , combineReducers } from '@reduxjs/toolkit'
import {
      persistReducer,
      FLUSH,
      REHYDRATE,
      PAUSE,
      REGISTER,
      PERSIST,
      PURGE,
}
from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import authReducer from './authSlice'
import postReducer from './postSlice'

const persistConfig = {
      key : 'root',
      version : 1,
      storage,
}

const rootReducre = combineReducers({
      auth : authReducer,
      post : postReducer,

})

const persistReducre = persistReducer(persistConfig,rootReducre)

const store = configureStore({
      reducer : persistReducre,
      middleware : (getDefaultMiddleware) =>
            getDefaultMiddleware({
            serializableCheck : {
                  ignoredActions : [FLUSH,REGISTER,REHYDRATE,PAUSE,PERSIST,PURGE]
            }
      })
})

export default store