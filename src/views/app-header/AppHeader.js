import styles from './AppHeader.module.scss'

function AppHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>DRINKS</span>
        information portal
      </div>
    </div>
  )
}

export default AppHeader
