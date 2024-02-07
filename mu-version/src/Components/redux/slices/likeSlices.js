import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const likeSlices = createSlice({
  name: 'likeCats',
  initialState,
  reducers: {
    addLikeCats: (state, action) => {
      state.concat(action.payload)
    },
  },
})

export const { addLikeCats } = likeSlices.actions

export const selectLikeCat = (state) => {
  return state.likeCats
}

export default likeSlices.reducer
