import styles from './SkillButton.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
  onSkillClick?: () => void
  label: string
}

const SkillButton: React.FC<Props> = ({ className, onSkillClick, label }) => (
  <button className={cn('w-100px,bg-sky-500/75', className)} onClick={onSkillClick}>
    <span>{label}</span>
  </button>
)

export default SkillButton
