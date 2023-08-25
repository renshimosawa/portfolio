import styles from './AppbarGray.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
  onClick?: () => void
}

const AppbarGray: React.FC<Props> = ({ onClick, className }) => (
  <div className={cn(styles.default, className)}>
    <button onClick={onClick} className={styles.button} aria-label="Logo">
      <img className={styles.logo} src="/logo_gray.svg" width={250} height={50} alt="Historedge" />
    </button>
  </div>
)

export default AppbarGray
