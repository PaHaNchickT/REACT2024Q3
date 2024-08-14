import { createSlice } from '@reduxjs/toolkit'

const uncontrDataSlice = createSlice({
  name: 'uncontrData',
  initialState: {
    uncontrData: {
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
    setUncontrData(state, action) {
      state.uncontrData = action.payload
    },
  },
})

export const { setUncontrData } = uncontrDataSlice.actions
export default uncontrDataSlice.reducer
