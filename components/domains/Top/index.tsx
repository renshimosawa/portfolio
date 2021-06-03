import styles from './Top.module.scss'
import cn from 'classnames'
import TopBack from '../TopBack'

export type Props = {
  className?: string
  onPortClick?: () => void
  onBlogClick?: () => void
}

const Top: React.FC<Props> = ({ className, onPortClick, onBlogClick }) => (
  <div className={cn(styles.default, className)}>
    <div className={styles.container}>
      <p className={styles.title}>Make Aomori Emotional</p>
      <button className={styles.portButton} onClick={onPortClick}>
        <span>→Portfolio</span>
      </button>
      <br />
      <button className={styles.blogButton} onClick={onBlogClick}>
        <span>→Blog</span>
      </button>
    </div>
    <TopBack className={styles.back} />
  </div>
)

export default Top
