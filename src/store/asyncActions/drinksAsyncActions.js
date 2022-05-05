import { createAsyncThunk } from '@reduxjs/toolkit'
import * as drinksApi from 'services/api/drinks-api'

const getRandomDrinkName = 'getRandomDrink'
const getDrinksName = 'getDrinks'

const getRandomDrink = createAsyncThunk (
  `randomDrink/${getRandomDrinkName}`,
   async () => await drinksApi.getRandomDrink()
)

const getDrinks = createAsyncThunk(
  `drinks/${getDrinksName}`,
  async ({ alcoholic, category, glass }) => await drinksApi.getDrinks(alcoholic, category, glass))


export const asyncDrinksActions = {
  getRandomDrink,
  getDrinks
}
