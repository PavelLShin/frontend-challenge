import { NavLink } from 'react-router-dom'
import { ALL_CATS, LIKE_CATS } from '../routes/consts'
import styles from './Headers.module.css'

function Headers() {
  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <NavLink
          to={ALL_CATS}
          className={({ isActive }) =>
            isActive ? styles.header_item_active : styles.header_item
          }
        >
          Все котики
        </NavLink>

        <NavLink
          to={LIKE_CATS}
          className={({ isActive }) =>
            isActive ? styles.header_item_active : styles.header_item
          }
        >
          Любимые котики
        </NavLink>
      </div>
    </div>
  )
}

export default Headers
