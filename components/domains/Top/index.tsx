import styles from './Top.module.scss'
import cn from 'classnames'
import TopBack from '../TopBack'
import { Fade } from 'react-awesome-reveal'

export type Props = {
  className?: string
  title: string
  onFirstClick?: () => void
  FirstLabel?: string
  onSecondClick?: () => void
  SecondLabel?: string
}

const Top: React.FC<Props> = ({
  className,
  title,
  onFirstClick,
  FirstLabel,
  onSecondClick,
  SecondLabel,
}) => (
  <div className={cn(styles.default, className)}>
    <div className={styles.container}>
      <Fade>
        <p className={styles.title}>{title}</p>
        <button className={styles.portButton} onClick={onFirstClick}>
          <span>{FirstLabel}</span>
        </button>
        <br />
        <button className={styles.blogButton} onClick={onSecondClick}>
          <span>{SecondLabel}</span>
        </button>
      </Fade>
    </div>
    <TopBack className={styles.back} />
  </div>
)

export default Top
