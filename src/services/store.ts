import { configureStore } from '@reduxjs/toolkit'
import searchStringSliceReducer from './searchSlice'
import { filmsAPI } from './API'

export default configureStore({
  reducer: {
    searchString: searchStringSliceReducer,
    [filmsAPI.reducerPath]: filmsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filmsAPI.middleware),
})
