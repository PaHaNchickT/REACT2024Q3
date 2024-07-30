import { createSlice } from '@reduxjs/toolkit'

const searchDataSlice = createSlice({
  name: 'searchData',
  initialState: {
    searchData: {
      value: (typeof window !== 'undefined' && localStorage.getItem('paul-saved-value')) || '',
      page: 1,
    },
  },
  reducers: {
    setSearchValue(state, action) {
      state.searchData.value = action.payload.value
      if (typeof window !== 'undefined') localStorage.setItem('paul-saved-value', action.payload.value)
    },
    setPage(state, action) {
      state.searchData.page = action.payload.page
    },
  },
})

export const { setSearchValue, setPage } = searchDataSlice.actions
export default searchDataSlice.reducer
