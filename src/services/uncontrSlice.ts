import { createSlice } from '@reduxjs/toolkit'
import { FORM_DATA_DEFAULT } from '../components/constants'

const uncontrDataSlice = createSlice({
  name: 'uncontrData',
  initialState: {
    uncontrData: FORM_DATA_DEFAULT,
  },
  reducers: {
    setUncontrData(state, action) {
      state.uncontrData = action.payload
    },
  },
})

export const { setUncontrData } = uncontrDataSlice.actions
export default uncontrDataSlice.reducer
