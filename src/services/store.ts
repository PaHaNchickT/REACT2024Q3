import { configureStore } from '@reduxjs/toolkit'
import searchDataSliceReducer from './searchSlice'
import resultsDataSliceReducer from './resultsSlice'
import detailsDataSliceReducer from './detailsSlice'
import selectedDataSliceReducer from './selectedSlice'
import { filmsAPI } from './API'

export default configureStore({
  reducer: {
    searchData: searchDataSliceReducer,
    resultsData: resultsDataSliceReducer,
    detailsData: detailsDataSliceReducer,
    selectedData: selectedDataSliceReducer,
    [filmsAPI.reducerPath]: filmsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filmsAPI.middleware),
})
