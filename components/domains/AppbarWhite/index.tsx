import styles from './AppbarWhite.module.scss'
import cn from 'classnames'
import LogoWhite from '../../../public/logo_white.svg'

// import LogoWhite from './LogoWhite'

export type Props = {
  className?: string
  onClick?: () => void
  // ↑HTMLタグ何でも入れられるよ
}

const AppbarWhite: React.FC<Props> = ({ onClick, className }) => (
  <div className={cn(styles.default, className)}>
    <button onClick={onClick} className={styles.button}>
      <LogoWhite className={styles.logo} />
    </button>
  </div>
)

export default AppbarWhite
