import { configureStore } from '@reduxjs/toolkit'
import searchDataSliceReducer from './searchSlice'

export default configureStore({
  reducer: {
    searchData: searchDataSliceReducer,
  },
})
