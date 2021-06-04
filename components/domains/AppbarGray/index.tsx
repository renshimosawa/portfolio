import styles from './AppbarGray.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
  onClick?: () => void
  // ↑HTMLタグ何でも入れられるよ
}

const AppbarGray: React.FC<Props> = ({ onClick, className }) => (
  <div className={cn(styles.default, className)}>
    <button onClick={onClick} className={styles.button}>
      <img className={styles.logo} src="logo_gray.svg"></img>
    </button>
  </div>
)

export default AppbarGray
