import React from 'react'
import styles from './Icon.module.scss'
import cn from 'classnames'
import Facebook from './Icons/facebook'
import DoubleUp from './Icons/doubleUp'
import Github from './Icons/github'
import Gmail from './Icons/gmail'
import Twitter from './Icons/twitter'

export type Props = {
  className?: string
  type: Type
}
const svgMap = {
  facebook: Facebook,
  doubleUp: DoubleUp,
  github: Github,
  gmail: Gmail,
  twitter: Twitter,
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
