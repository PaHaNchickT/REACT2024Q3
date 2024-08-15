import { createSlice } from '@reduxjs/toolkit'
import { FORM_DATA_DEFAULT } from '../components/constants'

const uncontrDataSlice = createSlice({
  name: 'uncontrData',
  initialState: {
    uncontrData: FORM_DATA_DEFAULT,
  },
  reducers: {
    setUncontrData(state, action) {
      const initObj = state.uncontrData as unknown as { [key: string]: string }
      for (const key in action.payload) {
        initObj[key] = action.payload[key]
      }
    },
  },
})

export const { setUncontrData } = uncontrDataSlice.actions
export default uncontrDataSlice.reducer
