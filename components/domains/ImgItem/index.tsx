import styles from './ImgItem.module.scss'
import cn from 'classnames'
import Card from '../../bases/Card'
import Link from 'next/link'
import Image from 'next/image'

export type Props = {
  className?: string
  imgUrl: string
  alt: string
  label?: string
  style?: React.CSSProperties
  labelStyle?: React.CSSProperties
}

const ImgItem: React.FC<Props> = ({ className, imgUrl, alt, label, style, labelStyle }) => {
  return (
    <Card className={cn(styles.default, className)} style={style}>
      <div className={styles.container}>
        <Image src={imgUrl} className={styles.item} width={350} height={180} alt={alt} />
      </div>
      <p className={styles.label} style={labelStyle}>
        {label}
      </p>
    </Card>
  )
}

export default ImgItem
