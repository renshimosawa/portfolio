import styles from './Profile.module.scss'
import cn from 'classnames'
import IconButton from '../../bases/IconButton'
import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export type Props = {
  className?: string
}

const Profile: React.FC<Props> = ({ className }) => {
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
        <button className={styles.skillButton}>
          <a href="/skill-sheet">
            <span>Skill Sheet</span>
          </a>
        </button>
        <p className={styles.present}>
          ＜現在＞
          <br />
          Quantum Box.Inc
          <br />
          コンペヤ -デザイナー・エンジニア
        </p>
        <div className={styles.linkContainer}>
          <IconButton
            className={styles.icon}
            type="facebook"
            url="https://www.facebook.com/ren.shimosawa"
          />
          <IconButton
            className={styles.icon}
            type="twitter"
            url="https://twitter.com/ren_shimosawa"
          />
          <IconButton className={styles.icon} type="github" url="https://github.com/renshimosawa" />
          <IconButton
            className={styles.icon}
            type="gmail"
            url="mailto:ren.shimosawa.cc@gmail.com"
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
