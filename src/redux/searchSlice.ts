import { createSlice } from '@reduxjs/toolkit'

const searchStringSlice = createSlice({
  name: 'searchString',
  initialState: {
    searchString: '', //from localStorage
  },
  reducers: {
    setSearchValue(state, action) {
      state.searchString = action.payload
    },
  },
})

export const { setSearchValue } = searchStringSlice.actions
export default searchStringSlice.reducer
