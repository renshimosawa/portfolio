import styles from './SkillButton.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
  onSkillClick?: () => void
  label: string
  style?: React.CSSProperties
  disabled?: boolean
}

const SkillButton: React.FC<Props> = ({ className, onSkillClick, label, style, disabled }) => (
  <button
    className={cn(styles.default, className)}
    onClick={onSkillClick}
    style={style}
    disabled={disabled}
  >
    <span>{label}</span>
  </button>
)

export default SkillButton
