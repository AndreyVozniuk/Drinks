import { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import { getDrinkById } from 'services/api/drinks-api'
import { Loader } from 'components'
import { ReactComponent as ArrowLeft } from 'assets/arrow-left.svg'

import styles from './SingleDrink.module.scss'

function SingleDrink() {
  const [drink, setDrink] = useState({})
  const [isDrinkLoading, setDrinkLoading] = useState(false)
  const [getDrinkError, setDrinkError] = useState(null)

  const { drinkId } = useParams()

  useEffect(() => {
    setDrinkLoading(true)

    getDrinkById(drinkId)
      .then(setDrink)
      .catch(setDrinkError)
      .finally(() => setDrinkLoading(false))
  }, [])

  const renderIngredients = (ingredients) => {
    return (
      <>
        {ingredients?.map((ingredient, index) => (
          <div className={styles.ingredient} key={ingredient}>
            <span className={styles.ingredientTitle}>{ingredient}</span>
            {index < ingredients.length - 1 ?
              <span className={styles.cicle}></span> : null
            }
          </div>
        ))
        }
      </>
    )
  }

  const renderDrink = (drink, isDrinkLoading, getDrinkError) => {
    const { img, name, ingredients, instruction } = drink

    if (isDrinkLoading) {
      return <div className={styles.loader}><Loader/></div>
    }

    if (getDrinkError) {
      return <h2>Error</h2>
    }

    return (
      <div className={styles.drink}>
        <img className={styles.drinkImage} src={img} alt='drink-image'/>
        <div className={styles.drinkContent}>
          <div className={styles.drinkTitle}>{name}</div>
          <div className={styles.ingredients}>
            <div className={styles.ingredientsTitle}>Ingredients</div>
            <div className={styles.ingredientsContainer}>
              {renderIngredients(ingredients)}
            </div>
          </div>
          <div className={styles.instruction}>
            <div className={styles.instructionTitle}>Steps</div>
            <div className={styles.instructionDescription}>{instruction}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>

      <Link to='/' className={styles.back}>
        <ArrowLeft/>
        <span className={styles.backTitle}>Back</span>
      </Link>

      {renderDrink(drink, isDrinkLoading, getDrinkError)}

    </div>
  )
}

export default SingleDrink
