import React from 'react'
import styles from './IconCompo.module.scss'
import cn from 'classnames'
import Facebook from './Icons/facebook'
import DoubleUp from './Icons/doubleUp'
import Github from './Icons/github'
import Gmail from './Icons/gmail'
import Twitter from './Icons/twitter'
import Zenn from './Icons/zenn'

export type Props = {
  className?: string
  type: Type
  url?: string
}
const svgMap = {
  facebook: Facebook,
  doubleUp: DoubleUp,
  github: Github,
  gmail: Gmail,
  twitter: Twitter,
  zenn: Zenn,
}

export type Type = keyof typeof svgMap //enum(列挙型=またはまたはまたは)

const IconCompo: React.FC<Props> = ({ type, className, url }) => {
  const SvgComponent = svgMap[type]
  return (
    <div className={cn(styles.default, className)}>
      <a href={url}>
        <SvgComponent />
      </a>
    </div>
  )
}

export default IconCompo
