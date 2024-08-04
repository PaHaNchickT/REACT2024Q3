import { configureStore } from '@reduxjs/toolkit'
import searchDataSliceReducer from './searchSlice'
import detailsDataSliceReducer from './detailsSlice'
import selectedDataSliceReducer from './selectedSlice'
import themeDataSliceReducer from './themeSlice'

export default configureStore({
  reducer: {
    searchData: searchDataSliceReducer,
    detailsData: detailsDataSliceReducer,
    selectedData: selectedDataSliceReducer,
    themeData: themeDataSliceReducer,
  },
})
