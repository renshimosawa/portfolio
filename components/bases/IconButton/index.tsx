import styles from './Card.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
  children?: React.ReactNode
  // ↑HTMLタグ何でも入れられるよ
  style?: React.CSSProperties
}

const Card: React.FC<Props> = ({ children, className, style }) => (
  <div className={cn(styles.default, className)} style={style}>
    {children}
  </div>
)

export default Card
