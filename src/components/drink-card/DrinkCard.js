import { sliceString } from 'helpers/string-helpers'
import { Link } from 'react-router-dom'
import Tooltip from 'rc-tooltip'

import styles from './DrinkCard.module.scss'

function DrinkCard({ id, name, img }) {
  return (
    <Link to={`/${id}`} className={styles.drinkWrapper}>
      <div className={styles.drink}>
        <img src={img} alt='drink-icon'/>
        <div className={styles.drinkName}>
          {name && name.length > 14 ?
            <Tooltip overlay={name}>
              <span>{sliceString(name, 14)}</span>
            </Tooltip> : <span>{name}</span>
          }
        </div>
      </div>
    </Link>
  )
}

export default DrinkCard
