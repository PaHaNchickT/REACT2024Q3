import { configureStore } from '@reduxjs/toolkit'
import searchStringSliceReducer from './searchSlice'

export default configureStore({
  reducer: {
    searchString: searchStringSliceReducer,
  },
})
