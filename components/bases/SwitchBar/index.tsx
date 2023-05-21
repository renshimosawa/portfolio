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
  disabledKyoto?: boolean
  disabledKamakura?: boolean
  disabledSengoku?: boolean
  disabledBakumatsu?: boolean
}

const SwitchBar: React.FC<Props> = ({
  className,
  style,
  onHeianClick: onHeianClick,
  onKamakuraClick,
  onSengokuClick,
  onBakumatsuClick,
  disabledKyoto,
  disabledKamakura,
  disabledSengoku,
  disabledBakumatsu,
}) => {
  return (
    <div className={cn(s.default, className)} style={style}>
      <div className={s.container}>
        <SkillButton
          label="平安"
          onSkillClick={onHeianClick}
          style={{ margin: '10px' }}
          disabled={disabledKyoto}
        />
        <SkillButton
          label="鎌倉"
          onSkillClick={onKamakuraClick}
          style={{ margin: '10px' }}
          disabled={disabledKamakura}
        />
        <SkillButton
          label="戦国"
          onSkillClick={onSengokuClick}
          style={{ margin: '10px' }}
          disabled={disabledSengoku}
        />
        <SkillButton
          label="幕末"
          onSkillClick={onBakumatsuClick}
          style={{ margin: '10px' }}
          disabled={disabledBakumatsu}
        />
      </div>
    </div>
  )
}

export default SwitchBar
