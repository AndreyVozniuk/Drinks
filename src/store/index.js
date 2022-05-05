import { configureStore } from '@reduxjs/toolkit'
import randomDrinkSlice from './slices/randomDrinkSlice'
import drinksSlice from './slices/drinksSlice'

export default configureStore({
  reducer: {
    randomDrink: randomDrinkSlice,
    drinks: drinksSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
})

