import styles from './user-switch.module.css'
import ReactLogo from '../../assets/react.svg'

function UserSwitch() {
  return (
    <div className={styles.switch}>
      <div className={styles.avatar}>
        <img src={ReactLogo} width={24} height={24} />
      </div>
      <span className={styles.username}>Memo Mogollan</span>
    </div>
  )
}

export default UserSwitch