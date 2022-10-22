import s from './SwitchBar.module.scss'
import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import SkillButton from '../SkillButton'

export type Props = {
  className?: string
  style?: React.CSSProperties
  onHeianClick?: () => void
  onKamakuraClick?: () => void
  onSengokuClick?: () => void
  onBakumatsuClick?: () => void
}

const HomeBar: React.FC<Props> = ({
  className,
  style,
  onHeianClick: onHeianClick,
  onKamakuraClick,
  onSengokuClick,
  onBakumatsuClick,
}) => {
  return (
    <div className={cn(s.default, className)} style={style}>
      <div className={s.container}>
        <SkillButton label="平安" onSkillClick={onHeianClick} />
        <SkillButton label="鎌倉" onSkillClick={onKamakuraClick} />
        <SkillButton label="戦国" onSkillClick={onSengokuClick} />
        <SkillButton label="幕末" onSkillClick={onBakumatsuClick} />
      </div>
    </div>
  )
}

export default HomeBar
