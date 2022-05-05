import { $host } from './index'

export async function getCategoryFilters() {
  const { data } = await $host.get('list.php?c=list')

  return data.drinks.map(categoryToClient)
}

export async function getGlassFilters() {
  const { data } = await $host.get('list.php?g=list')

  return data.drinks.map(glassToClient)
}

export async function getAlcoholicFilters() {
  const { data } = await $host.get('list.php?a=list')

  return data.drinks.map(alcoholicToClient)
}

const categoryToClient = (data) => {
  const category = {
    value: data.strCategory.toLowerCase(),
    label: data.strCategory
  }

  return category
}

const glassToClient = (data) => {
  const category = {
    value: data.strGlass.toLowerCase(),
    label: data.strGlass
  }
  return category
}

const alcoholicToClient = (data) => {
  const category = {
    value: data.strAlcoholic.toLowerCase(),
    label: data.strAlcoholic
  }
  return category
}
