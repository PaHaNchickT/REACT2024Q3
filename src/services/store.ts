import { configureStore } from '@reduxjs/toolkit'
import contrDataSliceReducer from './contrSlice'
import uncontrDataSliceReducer from './uncontrSlice'
import countriesSliceReducer from './countriesSlice'
import stateSliceReducer from './stateSlice'
import imageSliceReducer from './imageSlice'

export default configureStore({
  reducer: {
    contrData: contrDataSliceReducer,
    uncontrData: uncontrDataSliceReducer,
    countries: countriesSliceReducer,
    state: stateSliceReducer,
    image: imageSliceReducer,
  },
})
