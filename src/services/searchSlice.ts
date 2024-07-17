import { createSlice } from '@reduxjs/toolkit'

const searchDataSlice = createSlice({
  name: 'searchData',
  initialState: {
    searchData: {
      value: '', //from localStorage
      page: 1,
    },
  },
  reducers: {
    setSearchValue(state, action) {
      state.searchData.value = action.payload.value
    },
  },
})

export const { setSearchValue } = searchDataSlice.actions
export default searchDataSlice.reducer
