import styles from './IconButton.module.scss'
import cn from 'classnames'
import Icon from '../IconCompo'

export type Props = {
  className?: string
  style?: React.CSSProperties
  type: IconType
  url?: string
}

export type IconType = 'facebook' | 'doubleUp' | 'github' | 'gmail' | 'twitter'

const IconButton: React.FC<Props> = ({ className, style, type, url }) => (
  <div className={cn(styles.default, className)} style={style}>
    <button className={styles.button}>
      <a href={url}>
        <Icon type={type} />
      </a>
    </button>
  </div>
)

export default IconButton
