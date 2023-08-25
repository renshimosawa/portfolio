import Image from 'next/image'
import styles from './TopBack.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
}

const TopBack: React.FC<Props> = ({ className }) => (
  <div className={cn(styles.default, className)}>
    <Image
      src="/backImgsmall-pc1.png"
      className={styles.backgroundPc}
      alt=""
      width={800}
      height={450}
    />
    <Image
      src="/backImgsmall-sp.png"
      className={styles.backgroundSp}
      alt=""
      width={400}
      height={400}
    />
  </div>
)

export default TopBack
