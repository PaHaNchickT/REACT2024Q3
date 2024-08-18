import { createSlice } from '@reduxjs/toolkit'
import { FORM_DATA_EMPTY } from '../components/constants'

const contrDataSlice = createSlice({
  name: 'contrData',
  initialState: {
    contrData: FORM_DATA_EMPTY,
  },
  reducers: {
    setContrData(state, action) {
      const initObj = state.contrData as unknown as { [key: string]: string }
      for (const key in action.payload) {
        initObj[key] = action.payload[key]
      }
    },
  },
})

export const { setContrData } = contrDataSlice.actions
export default contrDataSlice.reducer
