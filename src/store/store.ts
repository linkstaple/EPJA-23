import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import userReducer from './slices/userSlice'
import budgetReducer from './slices/budgetSlice'

const rootReducer = combineReducers({
  user: userReducer,
  budget: budgetReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
