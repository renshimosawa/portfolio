import styles from './TopBack.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
}

const TopBack: React.FC<Props> = ({ className }) => (
  <div className={cn(styles.default, className)}>
    {/* <div className={styles.gradation}></div> */}
    <img src="background.svg" className={styles.background}></img>
  </div>
)

export default TopBack
