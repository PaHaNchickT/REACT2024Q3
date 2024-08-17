import { createSlice } from '@reduxjs/toolkit'

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    URL: '',
  },
  reducers: {
    setURL(state, action) {
      state.URL = action.payload
    },
  },
})

export const { setURL } = imageSlice.actions
export default imageSlice.reducer
