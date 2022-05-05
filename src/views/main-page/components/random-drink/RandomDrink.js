import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import * as randomDrinkSelectors from 'store/selectors/drinksSelector'
import { asyncDrinksActions as asyncDrinksActions } from 'store/asyncActions/drinksAsyncActions'
import { ReactComponent as ArrowLeft } from 'assets/arrow-left.svg'
import { DrinkCard, Loader } from 'components'

import 'rc-tooltip/assets/bootstrap.css'
import styles from './RandomDrink.module.scss'

function RandomDrink() {
  const randomDrink = useSelector(randomDrinkSelectors.randomDrink)
  const isRandomDrinkLoading = useSelector(randomDrinkSelectors.isRandomDrinkLoading)
  const getRandomDrinkError = useSelector(randomDrinkSelectors.getRandomDrinkError)
  const dispatch = useDispatch()

  useEffect(() => {
    getRandomDrink()
  }, [])

  const getRandomDrink = () => {
    dispatch(asyncDrinksActions.getRandomDrink())
  }

  const renderDrink = (name, img) => {
    if (isRandomDrinkLoading) {
      return <div className={styles.loaderContainer}><Loader/></div>
    }

    if (getRandomDrinkError) {
      return <h2>Error</h2>
    }

    return <DrinkCard id={id} name={name} img={img}/>
  }

  const renderIngredients = (ingredients) => {
    return (
      ingredients?.map((ingredient, index) => (
        index < 4 ?
          <div className={styles.ingredient} key={ingredient}>
            <ArrowLeft/>
            <span className={styles.ingredientsName}>{ingredient}</span>
          </div> : null
      ))
    )
  }

  const { name, id, img, ingredients } = randomDrink

  return (
    <div className={styles.container}>

      <div>
        <div className={styles.title}>Random drink <br/> for today</div>
        <div className={styles.subtitle}>
          Do you want to know its ingredients? <br/>
          generate a random drink and look <br/>
          at its composition
        </div>
        <button
          className={styles.button}
          onClick={getRandomDrink}
        >Generate
        </button>
      </div>

      <div className={styles.description}>
        <div className={styles.drink}>
          {renderDrink(name, img)}
        </div>
        <div className={styles.ingredients}>
          <div className={styles.ingredientsContainer}>
            {renderIngredients(ingredients)}
          </div>
          <Link
            to={`/${id}`}
            className={styles.link}
          >See more information
          </Link>
        </div>
      </div>

    </div>
  )
}

export default RandomDrink
