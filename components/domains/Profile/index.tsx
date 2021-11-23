import styles from './Profile.module.scss'
import cn from 'classnames'
import IconButton from '../../bases/IconButton'
import React, { CSSProperties, useCallback, useMemo, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Link from 'next/link'
import Tooltips from '../../bases/Tooltips'
import * as gtag from '../../../src/lib/gtag'
import SkillButton from '../../bases/SkillButton'

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
  const ClickZenn = () => {
    gtag.event({
      action: 'click_zenn',
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
        </p>
        <SkillButton />
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <tr>
              <td className={styles.date}>2020/02～</td>
              <td>【開業】
                <br className={styles.spBr} />
                動画編集(Emotional Aomori)
              </td>
            </tr>
            <tr>
              <td className={styles.date}>2020/10～</td>
              <td>【Quantum Box.Inc】
                <br className={styles.spBr} />
               グラフィックデザイナー
              </td>
            </tr>
            <tr>
              <td className={styles.date}>2021/01～</td>
              <td>【Quantum Box.Inc】
                <br className={styles.spBr} />
                フロントエンドエンジニア
              </td>
            </tr>
            <tr>
              <td className={styles.date}>2021/10～</td>
              <td>【freee株式会社】
                <br className={styles.spBr} />
                フロントエンドエンジニア
              </td>
            </tr>
          </table>
        </div>

        <div className={styles.linkContainer}>
          <Link href="https://www.facebook.com/ren.shimosawa">
            <a target="_blank" onClick={ClickFacebook} className={styles.facebookIcon}>
              <IconButton className={styles.icon} type="facebook" />
            </a>
          </Link>
          <Tooltips
            label="Open facebook"
            className={styles.facebookTooltips}
          />
          <Link href="https://twitter.com/ren_shimosawa">
            <a target="_blank" onClick={ClickTwitter} className={styles.twitterIcon}>
              <IconButton className={styles.icon} type="twitter" />
            </a>
          </Link>
          <Tooltips
            label="Open Twitter"
            className={styles.twitterTooltips}
          />
          <Link href="https://github.com/renshimosawa">
            <a target="_blank" onClick={ClickGithub} className={styles.githubIcon}>
              <IconButton className={styles.icon} type="github" />
            </a>
          </Link>
          <Tooltips
            label="Open Github"
            className={styles.githubTooltips}
          />
          <div className={styles.gmail}>
            <CopyToClipboard text={'ren.shimosawa.cc@gmail.com'}>
              <IconButton className={styles.gmailIcon} type="gmail" onClick={toggleDisplay} />
            </CopyToClipboard>
          </div>
          <Tooltips
            label="Copy Clipboard"
            className={styles.gmailTooltips}
            style={{backgroundColor:"#AEBAA8"}}
          />
          <Link href="https://zenn.dev/renshimosawa">
            <a target="_blank" onClick={ClickZenn} className={styles.zennIcon}>
              <IconButton className={styles.icon} type="zenn" />
            </a>
          </Link>
          <Tooltips
            label="Open Zenn"
            className={styles.zennTooltips}
          />
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
