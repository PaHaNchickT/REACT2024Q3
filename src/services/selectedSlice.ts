import { createSlice } from '@reduxjs/toolkit'
import { FilmObj } from '../components/types'

const selectedDataSlice = createSlice({
  name: 'selectedData',
  initialState: {
    selectedData: {
      selectedItems: [],
    },
  } as { selectedData: { selectedItems: FilmObj[] } },
  reducers: {
    addItemData(state, action) {
      state.selectedData.selectedItems.push(action.payload)
    },
    removeItemData(state, action) {
      state.selectedData.selectedItems = state.selectedData.selectedItems.filter(
        (item) => JSON.stringify(item) !== JSON.stringify(action.payload)
      )
    },
    clearItemData(state) {
      state.selectedData.selectedItems = []
    },
  },
})

export const { addItemData, removeItemData, clearItemData } = selectedDataSlice.actions
export default selectedDataSlice.reducer
