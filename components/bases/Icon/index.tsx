import React from 'react'
import styles from './Icon.module.scss'
import cn from 'classnames'
import Facebook from './Icons/facebook'

export type Props = {
  className?: string
  type: Type
}
const svgMap = {
  Facebook: 'facebook',
}

export type Type = keyof typeof svgMap //enum(列挙型=またはまたはまたは)

const Icon: React.FC<Props> = ({ type, className }) => {
  const SvgComponent = svgMap[type]
  return (
    <div className={cn(styles.default, className)}>
      <SvgComponent />
    </div>
  )
}

export default Icon
