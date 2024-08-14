import { configureStore } from '@reduxjs/toolkit'
import contrDataSliceReducer from './contrSlice'
import uncontrDataSliceReducer from './uncontrSlice'
import countriesSliceReducer from './countriesSlice'

export default configureStore({
  reducer: {
    contrData: contrDataSliceReducer,
    uncontrData: uncontrDataSliceReducer,
    countries: countriesSliceReducer,
  },
})
