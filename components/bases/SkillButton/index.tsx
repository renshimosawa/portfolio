import styles from './SkillButton.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
  onSkillClick?: () => void
  label: string
  style?: React.CSSProperties
}

const SkillButton: React.FC<Props> = ({ className, onSkillClick, label, style }) => (
  <button className={cn(styles.default, className)} onClick={onSkillClick} style={style}>
    <span>{label}</span>
  </button>
)

export default SkillButton
