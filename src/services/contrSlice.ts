import { createSlice } from '@reduxjs/toolkit'
import { FORM_DATA_DEFAULT } from '../components/constants'

const contrDataSlice = createSlice({
  name: 'contrData',
  initialState: {
    contrData: FORM_DATA_DEFAULT,
  },
  reducers: {
    setContrData(state, action) {
      state.contrData = action.payload
    },
  },
})

export const { setContrData } = contrDataSlice.actions
export default contrDataSlice.reducer
