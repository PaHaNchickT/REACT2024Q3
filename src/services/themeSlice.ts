import { createSlice } from '@reduxjs/toolkit'

const themeDataSlice = createSlice({
  name: 'themeData',
  initialState: {
    themeData: {
      color: 'light',
    },
  },
  reducers: {
    setTheme(state, action) {
      state.themeData.color = action.payload
      if (typeof window !== 'undefined') localStorage.setItem('paul-theme', action.payload)
    },
  },
})

export const { setTheme } = themeDataSlice.actions
export default themeDataSlice.reducer
