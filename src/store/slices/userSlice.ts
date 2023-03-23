import { createSlice } from '@reduxjs/toolkit'
interface IState {
  test: string
}

const initialState: IState = {
  test: 'test',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

// export const {} = userSlice.actions

export default userSlice.reducer
