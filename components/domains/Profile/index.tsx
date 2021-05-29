import styles from './Profile.module.scss'
import cn from 'classnames'
import IconButton from '../../bases/IconButton'

export type Props = {
  className?: string
  onSkillClick: () => void
}

const Profile: React.FC<Props> = ({ className, onSkillClick }) => (
  <div className={cn(styles.default, className)}>
    <div className={styles.container}>
      <p className={styles.name}>Ren Shimosawa</p>
      <div className={styles.imgContainer}>
        <img src="profile.jpg"></img>
      </div>
      <p className={styles.ocupation}>
        グラフィックデザイナー
        <br />
        フロントエンドエンジニア
        <br />
        映像制作ディレクター
      </p>
      <button className={styles.skillButton} onClick={onSkillClick}>
        <span>Skill Sheet</span>
      </button>
      <p className={styles.present}>
        ＜現在＞
        <br />
        Quantum Box.Inc
        <br />
        コンペヤ -デザイナー・エンジニア
      </p>
      <div className={styles.linkContainer}>
        <IconButton className={styles.icon} type="facebook" />
        <IconButton className={styles.icon} type="twitter" />
        <IconButton className={styles.icon} type="github" />
        <IconButton className={styles.icon} type="gmail" />
      </div>
    </div>
  </div>
)

export default Profile
