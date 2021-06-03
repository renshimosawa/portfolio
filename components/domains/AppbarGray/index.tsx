import styles from './AppbarGray.module.scss'
import cn from 'classnames'
import LogoWhite from '../../../public/logo_gray.svg'

// import LogoWhite from './LogoWhite'

export type Props = {
  className?: string
  onClick?: () => void
  // ↑HTMLタグ何でも入れられるよ
}

const AppbarGray: React.FC<Props> = ({ onClick, className }) => (
  <div className={cn(styles.default, className)}>
    <button onClick={onClick} className={styles.button}>
      <LogoWhite className={styles.logo} />
    </button>
  </div>
)

export default AppbarGray
