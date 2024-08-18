import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
  name: 'state',
  initialState: {
    lastModified: '',
  },
  reducers: {
    addState(state, action) {
      state.lastModified = action.payload
    },
    clearState(state) {
      state.lastModified = ''
    },
  },
})

export const { addState, clearState } = stateSlice.actions
export default stateSlice.reducer
