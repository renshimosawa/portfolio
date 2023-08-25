import styles from './VideoItem.module.scss'
import cn from 'classnames'
import Card from '../../bases/Card'

export type Props = {
  className?: string
  url?: string
  label?: string
  style?: React.CSSProperties
  labelStyle?: React.CSSProperties
}

const VideoItem: React.FC<Props> = ({ className, url, label, style, labelStyle }) => {
  return (
    <Card className={cn(styles.default, className)} style={style}>
      <div className={styles.container}>
        <iframe src={url} className={styles.item} title="YouTube video player" loading="lazy" />
      </div>
      <p className={styles.label} style={labelStyle}>
        {label}
      </p>
    </Card>
  )
}

export default VideoItem
