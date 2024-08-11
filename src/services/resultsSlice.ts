import { createSlice } from '@reduxjs/toolkit'

const resultsDataSlice = createSlice({
  name: 'resultsData',
  initialState: {
    resultsData: {
      items: [],
      total: 0,
      totalPages: 0,
    },
  },
  reducers: {
    setResultsData(state, action) {
      state.resultsData = action.payload
    },
  },
})

export const { setResultsData } = resultsDataSlice.actions
export default resultsDataSlice.reducer
