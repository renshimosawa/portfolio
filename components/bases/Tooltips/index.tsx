import styles from './Tooltips.module.scss'
import cn from 'classnames'
import React from 'react'

export type Props = {
  className?: string
  label: string
}

const Tooltips: React.FC<Props> = ({ className, label }) => {
  return (
    <div className={cn(styles.default, className)}>
      <p className="tooltip">{label}</p>
    </div>
  )
}

export default Tooltips
