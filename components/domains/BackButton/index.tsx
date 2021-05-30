import styles from './BackButton.module.scss'
import cn from 'classnames'
import IconButton from '../../bases/IconButton'
import { useRouter } from 'next/router'

export type Props = {
  className?: string
}

const BackButton: React.FC<Props> = ({ className }) => {
  const router = useRouter()
  return (
    <div className={cn(styles.default, className)}>
      <IconButton className={styles.icon} type="doubleUp" onClick={() => router.push('#top')} />
      <p className={styles.right}>build by Ren Shimosawa</p>
    </div>
  )
}

export default BackButton
