import { $host } from './index'

const drinkToClientFormat = (data) => {
  const ingredients = []

  for (let key in data) {
    if (key.indexOf('strIngredient') === 0 && data[key] !== null) {
      ingredients.push(data[key])
    }
  }

  const drink = {
    id: data.idDrink,
    name: data.strDrink,
    img: data.strDrinkThumb,
    ingredients,
    instruction: data.strInstructions
  }

  return drink
}

export async function getRandomDrink() {
  const { data } = await $host.get(`random.php`)

  return drinkToClientFormat(data.drinks[0])
}

export async function getDrinks(alcoholic, category, glass) {
  const { data } = await $host.get(`filter.php?a=${alcoholic}&c=${category}&g=${glass}`)

  return data.drinks.map(drinkToClientFormat)
}

export async function getDrinkById(drinkId) {
  const { data } = await $host.get(`lookup.php?i=${drinkId}`)

  return drinkToClientFormat(data.drinks[0])
}








