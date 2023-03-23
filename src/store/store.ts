import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import userReducer from './slices/userSlice'
import budgetReducer from './slices/budgetSlice'

const rootReducer = combineReducers({
  userReducer,
  budgetReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store
