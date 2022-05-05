import axios from 'axios'

export const $host = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
  headers: {
    'Content-Type': 'application/json'
  }
})
