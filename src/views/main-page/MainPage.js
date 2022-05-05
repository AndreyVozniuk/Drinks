import { Drinks, RandomDrink } from './components'
import styles from './MainPage.module.scss'

function MainPage() {
  return (
    <div className={styles.container}>
      <RandomDrink/>
      <Drinks/>
    </div>
  )
}

export default MainPage
