import styles from './TopBack.module.scss'
import cn from 'classnames'
import Image from 'next/image'

export type Props = {
  className?: string
}

const TopBack: React.FC<Props> = ({ className }) => (
  <div className={cn(styles.default, className)}>
    <Image src="/background.png" alt="" width={500} height={500} />
  </div>
)

export default TopBack
