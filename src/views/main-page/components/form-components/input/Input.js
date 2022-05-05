import styles from './Input.module.scss'
import searchIcon from 'assets/search-icon.svg'

function Input({ value, onChange }) {

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          type='text'
          className={styles.input}
          placeholder='Enter name'
          value={value}
          onChange={event => onChange(event.target.value)}
        />
        <img src={searchIcon} alt='search-icon'/>
      </label>
    </div>
  )
}

export default Input
