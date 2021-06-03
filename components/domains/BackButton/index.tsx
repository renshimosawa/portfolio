import styles from './BackButton.module.scss'
import cn from 'classnames'
import IconButton from '../../bases/IconButton'

export type Props = {
  className?: string
  onBackClick?: () => void
}

const BackButton: React.FC<Props> = ({ className, onBackClick }) => {
  return (
    <div className={cn(styles.default, className)}>
      <IconButton className={styles.icon} type="doubleUp" onClick={onBackClick} />
    </div>
  )
}

export default BackButton
