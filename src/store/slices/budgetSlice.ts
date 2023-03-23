import { createSlice } from '@reduxjs/toolkit'
interface IState {
  test: string
}

const initialState: IState = {
  test: '',
}

export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {},
})

// export const {} = budgetSlice.actions

export default budgetSlice.reducer
