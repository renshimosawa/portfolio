import styles from './Top.module.scss'
import cn from 'classnames'
import TopBack from '../TopBack'
import { Fade } from 'react-awesome-reveal'
import React, { VFC } from 'react'

export type Props = {
  className?: string
  title: string
}

const Top: React.FC<Props> = ({ className, title }) => {
  return (
    <div className={cn(styles.default, className)}>
      <div className={styles.container}>
        <Fade>
          <h1 className={styles.title}>{title}</h1>
        </Fade>
      </div>
      <TopBack className={styles.back} />
    </div>
  )
}

export default Top
