import styles from './SkillButton.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
  onSkillClick?: () => void
}

const SkillButton: React.FC<Props> = ({className, onSkillClick }) => (
  <button className={cn(styles.default,className)} onClick={onSkillClick}>
    <span>Skill Sheet</span>
  </button>
)

export default SkillButton