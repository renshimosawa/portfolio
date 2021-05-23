import styles from './AppbarGray.module.scss'
import cn from 'classnames'
import LogoWhite from './logo_gray.svg'
// import LogoWhite from './LogoWhite'

export type Props = {
  className?: string
  children?: React.ReactNode
  // ↑HTMLタグ何でも入れられるよ
}

const AppbarGray: React.FC<Props> = ({ children, className }) => (
  <div className={cn(styles.default, className)}>
    <LogoWhite className={styles.logo} />
  </div>
)

export default AppbarGray
