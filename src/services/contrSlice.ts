import { createSlice } from '@reduxjs/toolkit'

const contrDataSlice = createSlice({
  name: 'contrData',
  initialState: {
    contrData: {
      name: '',
      age: 0,
      email: '',
      passInit: '',
      passCheck: '',
      sex: '',
      image: '',
      country: '',
    },
  },
  reducers: {
    setContrData(state, action) {
      state.contrData = action.payload
    },
  },
})

export const { setContrData } = contrDataSlice.actions
export default contrDataSlice.reducer
