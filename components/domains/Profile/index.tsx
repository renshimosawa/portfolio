import styles from './Profile.module.scss'
import cn from 'classnames'
import IconButton from '../../bases/IconButton'
import React, { CSSProperties, useCallback, useMemo, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Link from 'next/link'
import Tooltips from '../../bases/Tooltips'
import * as gtag from '../../../src/lib/gtag'

export type Props = {
  className?: string
  onSkillClick?: () => void
}

const useFadeInOut = (durationSec: number) => {
  const [display, setDisplay] = useState(false)

  const handleClose = useCallback(() => {
    setDisplay(false)
  }, [setDisplay])

  const handleOpen = useCallback(() => {
    setDisplay(true)
  }, [setDisplay])

  const toggleDisplay = useCallback(() => {
    setDisplay(true)
    setTimeout(() => setDisplay(false), 2000)
  }, [setDisplay])

  const boxStyle = useMemo((): CSSProperties => {
    if (display) {
      return {
        opacity: 1,
        visibility: 'visible',
        transition: `opacity ${durationSec}s`,
      }
    }

    return {
      opacity: 0,
      visibility: 'hidden',
      transition: `opacity ${durationSec}s, visibility 0s ${durationSec}s`,
    }
  }, [durationSec, display])

  return { display, handleOpen, handleClose, toggleDisplay, boxStyle }
}

const Profile: React.FC<Props> = ({ className, onSkillClick }) => {
  const { toggleDisplay, boxStyle } = useFadeInOut(0.2)
  const ClickFacebook = () => {
    gtag.event({
      action: 'click_facebook',
      category: 'link_button',
      label: 'facebook',
    })
  }

  const ClickTwitter = () => {
    gtag.event({
      action: 'click_twitter',
      category: 'link_button',
      label: 'twitter',
    })
  }

  const ClickGithub = () => {
    gtag.event({
      action: 'click_github',
      category: 'link_button',
      label: 'github',
    })
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
            <a target="_blank" onClick={ClickFacebook}>
              <IconButton className={styles.icon} type="facebook" />
            </a>
          </Link>
          <Link href="https://twitter.com/ren_shimosawa">
            <a target="_blank" onClick={ClickTwitter}>
              <IconButton className={styles.icon} type="twitter" />
            </a>
          </Link>
          <Link href="https://github.com/renshimosawa">
            <a target="_blank" onClick={ClickGithub}>
              <IconButton className={styles.icon} type="github" />
            </a>
          </Link>
          <div>
            <CopyToClipboard text={'ren.shimosawa.cc@gmail.com'}>
              <IconButton className={styles.gmailIcon} type="gmail" onClick={toggleDisplay} />
            </CopyToClipboard>
          </div>
        </div>
        <Tooltips
          label="メールアドレスをコピーしました"
          className={styles.tooltips}
          style={boxStyle}
        />
      </div>
    </div>
  )
}

export default Profile
