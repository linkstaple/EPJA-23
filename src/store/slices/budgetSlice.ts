import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Offer } from '../types'
interface IState {
  budget: number
  activeCase: Offer
}

const initialState: IState = {
  budget: 10000,
  activeCase: {} as Offer,
}

export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    setBudget(state, action: PayloadAction<number>) {
      state.budget = action.payload
    },
    setActiveCase(state, action: PayloadAction<Offer>) {
      state.activeCase = action.payload
    },
  },
})

export const { setBudget, setActiveCase } = budgetSlice.actions

export default budgetSlice.reducer
