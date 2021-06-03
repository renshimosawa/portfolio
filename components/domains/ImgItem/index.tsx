import styles from './ImgItem.module.scss'
import cn from 'classnames'
import Card from '../../bases/Card'
import Link from 'next/link'

export type Props = {
  className?: string

  imgUrl: string
  label?: string
  style?: React.CSSProperties
  labelStyle?: React.CSSProperties
}

const ImgItem: React.FC<Props> = ({ className, imgUrl, label, style, labelStyle }) => {
  return (
    <Card className={cn(styles.default, className)} style={style}>
      <div className={styles.container}>
        <img src={imgUrl} className={styles.item} />
      </div>
      <p className={styles.label} style={labelStyle}>
        {label}
      </p>
    </Card>
  )
}

export default ImgItem
