import styles from './AppbarWhite.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
  onClick?: () => void
  // ↑HTMLタグ何でも入れられるよ
}

const AppbarWhite: React.FC<Props> = ({ onClick, className }) => (
  <div className={cn(styles.default, className)}>
    <button onClick={onClick} className={styles.button}>
      <img className={styles.logo} src="/logo_white.svg" width={250} height={50}></img>
    </button>
  </div>
)

export default AppbarWhite
