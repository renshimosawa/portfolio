import styles from './CardItem.module.scss'
import cn from 'classnames'
import Card from '../../bases/Card'

export type Props = {
  className?: string
  url?: string
  label?: string
}

const CardItem: React.FC<Props> = ({ className, url, label }) => {
  return (
    <Card className={styles.default}>
      <div className={styles.container}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Xw_Xc50jY1E"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></iframe>
      </div>
      <p className={styles.label}>{label}</p>
    </Card>
  )
}

export default CardItem
