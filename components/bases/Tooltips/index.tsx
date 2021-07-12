import styles from './Tooltips.module.scss'
import cn from 'classnames'
import React from 'react'

export type Props = {
  className?: string
  label: string
  style?: React.CSSProperties
}

const Tooltips: React.FC<Props> = ({ className, label, style }) => {
  return (
    <div className={cn(styles.default, className)} style={style}>
      <p className="tooltip">{label}</p>
    </div>
  )
}

export default Tooltips
