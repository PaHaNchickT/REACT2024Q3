import { configureStore } from '@reduxjs/toolkit'
import searchDataSliceReducer from './searchSlice'
import detailsDataSliceReducer from './detailsSlice'
import selectedDataSliceReducer from './selectedSlice'

export default configureStore({
  reducer: {
    searchData: searchDataSliceReducer,
    detailsData: detailsDataSliceReducer,
    selectedData: selectedDataSliceReducer,
  },
})
