import styles from './BackButton.module.scss'
import cn from 'classnames'
import IconButton from '../../bases/IconButton'

export type Props = {
  className?: string
}

const BackButton: React.FC<Props> = ({ className }) => (
  <div className={cn(styles.default, className)}>
    <IconButton className={styles.icon} type="doubleUp" url="/" />
    <p className={styles.right}>build by Ren Shimosawa</p>
  </div>
)

export default BackButton
