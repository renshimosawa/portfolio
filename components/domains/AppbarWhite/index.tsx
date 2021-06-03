import styles from './AppbarWhite.module.scss'
import cn from 'classnames'
import LogoWhite from '../../../public/logo_white.svg'

// import LogoWhite from './LogoWhite'

export type Props = {
  className?: string
  children?: React.ReactNode
  // ↑HTMLタグ何でも入れられるよ
}

const AppbarWhite: React.FC<Props> = ({ children, className }) => (
  <div className={cn(styles.default, className)}>
    <a href="/">
      <LogoWhite className={styles.logo} />
    </a>
  </div>
)

export default AppbarWhite
