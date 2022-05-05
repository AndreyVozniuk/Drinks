import { createSlice } from '@reduxjs/toolkit'
import { asyncDrinksActions as asyncActions } from '../asyncActions/drinksAsyncActions'

export const randomDrinkSlice = createSlice({
  name: 'randomDrink',
  initialState: {
    randomDrink: {},
    isRandomDrinkLoading: false,
    getRandomDrinkError: null
  },
  extraReducers: builder => {
    builder
      .addCase(asyncActions.getRandomDrink.pending, state => {
        state.isRandomDrinkLoading = true
      })
      .addCase(asyncActions.getRandomDrink.fulfilled, (state, action) => {
        state.randomDrink = action.payload
        state.isRandomDrinkLoading = false
      })
      .addCase(asyncActions.getRandomDrink.rejected, state => {
        state.getRandomDrinkError = {}
      })
  }
})

export default randomDrinkSlice.reducer
