import { configureStore } from '@reduxjs/toolkit'
import detailsDataSliceReducer from './detailsSlice'
import selectedDataSliceReducer from './selectedSlice'
import themeDataSliceReducer from './themeSlice'

export default configureStore({
  reducer: {
    detailsData: detailsDataSliceReducer,
    selectedData: selectedDataSliceReducer,
    themeData: themeDataSliceReducer,
  },
})
