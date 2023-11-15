import { combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const  rootReducer =  combineReducers({user:userReducer})

const persistConfig = {
  key:'root',
  Storage,
  version: 1,
}

const presistReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false,
  }),
})