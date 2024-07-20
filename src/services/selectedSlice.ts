import { createSlice } from '@reduxjs/toolkit'
import { FilmObj } from '../components/types'

const selectedDataSlice = createSlice({
  name: 'selectedData',
  initialState: {
    selectedData: [],
  } as { selectedData: FilmObj[] },
  reducers: {
    addItemData(state, action) {
      state.selectedData.push(action.payload)
    },
    removeItemData(state, action) {
      state.selectedData = state.selectedData.filter((item) => JSON.stringify(item) !== JSON.stringify(action.payload))
    },
  },
})

export const { addItemData, removeItemData } = selectedDataSlice.actions
export default selectedDataSlice.reducer
