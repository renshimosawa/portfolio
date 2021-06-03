import styles from './IconButton.module.scss'
import cn from 'classnames'
import Icon from '../IconCompo'
import Link from 'next/link'

export type Props = {
  className?: string
  style?: React.CSSProperties
  type: IconType
  onClick?: () => void
}

export type IconType = 'facebook' | 'doubleUp' | 'github' | 'gmail' | 'twitter'

const IconButton: React.FC<Props> = ({ className, style, type, onClick }) => (
  <div className={cn(styles.default, className)} style={style}>
    <button className={styles.button} onClick={onClick}>
      <Icon type={type} />
    </button>
  </div>
)

export default IconButton
