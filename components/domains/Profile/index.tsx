import styles from './Profile.module.scss'
import cn from 'classnames'
import IconButton from '../../bases/IconButton'
import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Link from 'next/link'
import Tooltips from '../../bases/Tooltips'

export type Props = {
  className?: string
  onSkillClick?: () => void
}

const Profile: React.FC<Props> = ({ className, onSkillClick }) => {
  const [isClick, setIsClick] = useState(false)
  const handleToolTip = () => {
    setIsClick(true)
    setTimeout(() => setIsClick(false), 2000)
  }

  return (
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
          コンペヤ －デザイナー・エンジニア
        </p>
        <div className={styles.linkContainer}>
          <Link href="https://www.facebook.com/ren.shimosawa">
            <a target="_blank">
              <IconButton className={styles.icon} type="facebook" />
            </a>
          </Link>
          <Link href="https://twitter.com/ren_shimosawa">
            <a target="_blank">
              <IconButton className={styles.icon} type="twitter" />
            </a>
          </Link>
          <Link href="https://github.com/renshimosawa">
            <a target="_blank">
              <IconButton className={styles.icon} type="github" />
            </a>
          </Link>
          <div>
            <CopyToClipboard text={'ren.shimosawa.cc@gmail.com'}>
              <IconButton className={styles.gmailIcon} type="gmail" onClick={handleToolTip} />
            </CopyToClipboard>
          </div>
          {isClick && (
            <Tooltips label="メールアドレスをコピーしました" className={styles.tooltips} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
