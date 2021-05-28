import styles from './Profile.module.scss'
import cn from 'classnames'

export type Props = {
  className?: string
}

const Profile: React.FC<Props> = ({ className }) => (
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
      <button className={styles.skillButton}>
        <span>Skill Sheet</span>
      </button>
      <p className={styles.present}>
        ＜現在＞
        <br />
        Quantum Box.Inc
        <br />
        コンペヤ -デザイナー・エンジニア
      </p>
      <div className={styles.linkContainer}></div>
    </div>
  </div>
)

export default Profile
