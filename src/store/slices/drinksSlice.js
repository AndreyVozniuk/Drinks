import { asyncDrinksActions as asyncActions } from '../asyncActions/drinksAsyncActions'
import { createSlice } from '@reduxjs/toolkit'

export const drinksSlice = createSlice({
  name: 'drinks',
  initialState: {
    drinks: [],
    isDrinksLoading: false,
    getDrinksError: null
  },
  extraReducers: builder => {
    builder
      .addCase(asyncActions.getDrinks.pending, state => {
        state.isDrinksLoading = true
      })
      .addCase(asyncActions.getDrinks.fulfilled, (state, action) => {
        state.drinks = action.payload
        state.isDrinksLoading = false
      })
      .addCase(asyncActions.getDrinks.rejected, (state, { error }) => {
        state.getDrinksError = error
      })
  }
})

export default drinksSlice.reducer
