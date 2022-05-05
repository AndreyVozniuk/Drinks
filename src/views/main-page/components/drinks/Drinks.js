import { useEffect, useMemo, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getAlcoholicFilters, getCategoryFilters, getGlassFilters } from 'services/api/filters-api'
import { joinStringWithUnderline } from 'helpers/string-helpers'
import { asyncDrinksActions as asyncDrinksActions } from 'store/asyncActions/drinksAsyncActions'
import { Input, Select } from '../index'
import * as drinksSelector from 'store/selectors/drinksSelector'

import styles from './Drinks.module.scss'
import { DrinkCard, Loader } from 'components'

function Drinks() {
  const [drinkName, setDrinkName] = useState('')

  const [filters, setFilters] = useState({
    alcoholic: { value: 'alcoholic', label: 'Alcoholic' },
    category: { value: 'ordinary_drink', label: 'Ordinary_Drink' },
    glass: { value: 'highball_glass', label: 'Highball_glass' }
  })

  const [offset, setOffset] = useState(7)
  const [isEnded, setEnded] = useState(false)

  const drinks = useSelector(drinksSelector.drinks)
  const isDrinksLoading = useSelector(drinksSelector.isDrinksLoading)
  const getDrinksError = useSelector(drinksSelector.getDrinksError)
  const dispatch = useDispatch()

  useEffect(() => {
    getDrinks(filters)
  }, [filters])

  const getDrinks = ({ alcoholic, category, glass }) => {

    setOffset(8)
    setEnded(false)

    const senderOptions = {
      alcoholic: joinStringWithUnderline(alcoholic.label),
      category: joinStringWithUnderline(category.label),
      glass: glass.label.split(' ').join('_')
    }

    dispatch(asyncDrinksActions.getDrinks(senderOptions))
  }

  const getMoreDrinks = () => {
    setOffset(offset => {
      if (offset + 8 >= drinks.length - 1) {
        setEnded(true)
      }

      return offset + 8
    })
  }

  const getDrinksByName = (drinks, drinkName) => {
    if (drinks.length <= 8) {
      setEnded(true)
    }

    if (drinkName) {
      return drinks.filter(({ name }) =>
        name
          .toLowerCase()
          .includes(drinkName.trim().toLowerCase()))
    }

    return drinks
  }

  const renderDrinks = (drinks) => {
    if (isDrinksLoading) {
      return <div className={styles.loader}><Loader/></div>
    }

    if (getDrinksError) {
      return <h2>Error</h2>
    }

    return <>
      {drinks?.map((drink, index) => {
        const { id, name, img } = drink
        return index < offset ? <DrinkCard id={id} name={name} img={img} key={id}/> : null
      })}
    </>
  }

  const handleSelectChange = (selectedOption, { name }) => {
    setFilters({
      ...filters,
      [name]: selectedOption
    })
  }

  const filteredDrinks = useMemo(() => getDrinksByName(drinks, drinkName), [drinkName, drinks])

  return (
    <div className={styles.container}>
      <div className={styles.title}>All drinks</div>

      <div className={styles.filters}>
        <Input value={drinkName} onChange={setDrinkName}/>
        <Select
          name='alcoholic'
          value={filters.alcoholic}
          onChange={handleSelectChange}
          loadOptions={getAlcoholicFilters}
        />
        <Select
          name='category'
          value={filters.category}
          onChange={handleSelectChange}
          loadOptions={getCategoryFilters}
        />
        <Select
          name='glass'
          value={filters.glass}
          onChange={handleSelectChange}
          loadOptions={getGlassFilters}
        />
      </div>

      <div className={styles.drinksContainer}>
        {useMemo(() => renderDrinks(filteredDrinks, isDrinksLoading), [filteredDrinks])}
      </div>

      <div className={styles.pagination}>
        <button
          style={{ display: isEnded ? 'none' : 'block' }}
          className={styles.button}
          onClick={getMoreDrinks}
        >Show more
        </button>
      </div>

    </div>
  )
}

export default Drinks
