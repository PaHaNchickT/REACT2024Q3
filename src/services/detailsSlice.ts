import { createSlice } from '@reduxjs/toolkit'

const detailsDataSlice = createSlice({
  name: 'detailsData',
  initialState: {
    detailsData: {
      isClosed: false,
      filmId: 0,
      filmData: {},
    },
  },
  reducers: {
    setIsClosed(state, action) {
      state.detailsData.isClosed = action.payload.isClosed
      state.detailsData.filmId = action.payload.filmId || 0
    },
    setFilmData(state, action) {
      state.detailsData.filmData = action.payload.filmData
    },
  },
})

export const { setIsClosed, setFilmData } = detailsDataSlice.actions
export default detailsDataSlice.reducer
