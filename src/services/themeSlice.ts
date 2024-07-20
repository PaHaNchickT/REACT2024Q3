import { createSlice } from '@reduxjs/toolkit'

const themeDataSlice = createSlice({
  name: 'themeData',
  initialState: {
    themeData: 'light',
  },
  reducers: {
    switchTheme(state) {
      state.themeData === 'light' ? (state.themeData = 'dark') : (state.themeData = 'light')
    },
  },
})

export const { switchTheme } = themeDataSlice.actions
export default themeDataSlice.reducer
