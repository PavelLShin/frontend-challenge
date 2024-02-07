import { configureStore } from '@reduxjs/toolkit'
import catsSlice from './slices/catsSlice'
import likeSlices from './slices/likeSlices'

const store = configureStore({
  reducer: {
    likeCats: likeSlices,
    cats: catsSlice,
  },
})

export default store
