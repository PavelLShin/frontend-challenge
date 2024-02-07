import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const headers = new Headers({
  'Content-Type': 'application/json',
  'x-api-key': 'DEMO-API-KEY',
})

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow',
}

export const fetchCats = createAsyncThunk(
  'cats/fetchCats',
  async function (url) {
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    const datas = data.map((el) => {
      const { id, url } = el
      return {
        id,
        url,
        isFavorite: false,
      }
    })
    return datas
  }
)

const initialState = []

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      return state.map((el) =>
        el.id === action.payload ? { ...el, isFavorite: !el.isFavorite } : el
      )
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      return state.concat(action.payload)
    })
  },
})

export const { toggleFavorite } = catsSlice.actions
export const selectCat = (state) => {
  return state.cats
}
export default catsSlice.reducer
