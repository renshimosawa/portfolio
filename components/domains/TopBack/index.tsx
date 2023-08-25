import Image from 'next/image'
import styles from './TopBack.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
}

const TopBack: React.FC<Props> = ({ className }) => (
  <div className={cn(styles.default, className)}>
    <Image src="/backImgsmall-pc2.png" className={styles.backgroundPc} alt="" fill />
    <Image src="/backImgsmall-sp1.png" className={styles.backgroundSp} alt="" fill />
  </div>
)

export default TopBack
