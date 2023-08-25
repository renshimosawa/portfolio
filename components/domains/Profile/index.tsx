import styles from './Profile.module.scss'
import cn from 'classnames'
import IconButton from '../../bases/IconButton'
import React, { CSSProperties, useCallback, useMemo, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Link from 'next/link'
import Tooltips from '../../bases/Tooltips'
import * as gtag from '../../../src/lib/gtag'
import SkillButton from '../../bases/SkillButton'
import ReactTooltip from 'react-tooltip'

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
        <h2 className={styles.name}>Ren Shimosawa</h2>
        <div className={styles.imgContainer}>
          <img src="face-icon.svg" alt="Ren Shimosawaのアイコン" width={200} height={200} />
        </div>
        <p className={styles.ocupation}>フロントエンドエンジニア</p>
        {/* <SkillButton onSkillClick={onSkillClick} label="Skill Sheet" /> */}
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.date}>2020/02～</td>
                <td>Youtube動画編集者</td>
              </tr>
              <tr>
                <td className={styles.date}>2020/10～</td>
                <td>
                  <span className={styles.strong}>Quantum Box.Inc </span>
                  <br className={styles.spBr} />
                  グラフィックデザイナー
                </td>
              </tr>
              <tr>
                <td className={styles.date}>2021/01～</td>
                <td>
                  <span className={styles.strong}>Quantum Box.Inc </span>
                  <br className={styles.spBr} />
                  フロントエンドエンジニア
                </td>
              </tr>
              <tr>
                <td className={styles.date}>2021/10～</td>
                <td>
                  <span className={styles.strong}>freee株式会社 </span>
                  <br className={styles.spBr} />
                  フロントエンドエンジニア
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.linkContainer}>
          <a
            href="https://www.facebook.com/ren.shimosawa"
            data-tip="Facebookを開く"
            target="_blank"
            onClick={ClickFacebook}
            className={styles.facebookIcon}
            aria-label="Facebookを開く"
          >
            <IconButton className={styles.icon} type="facebook" />
          </a>

          <a
            href="https://twitter.com/ren_shimosawa"
            data-tip="Twitterを開く"
            target="_blank"
            onClick={ClickTwitter}
            className={styles.twitterIcon}
            aria-label="Twitterを開く"
          >
            <IconButton className={styles.icon} type="twitter" />
          </a>

          <a
            href="https://github.com/renshimosawa"
            data-tip="Githubを開く"
            target="_blank"
            onClick={ClickGithub}
            className={styles.githubIcon}
            aria-label="Githubを開く"
          >
            <IconButton className={styles.icon} type="github" />
          </a>

          <a
            href="https://zenn.dev/renshimosawa"
            data-tip="Zennを開く"
            target="_blank"
            onClick={ClickZenn}
            className={styles.zennIcon}
            aria-label="Zennを開く"
          >
            <IconButton className={styles.icon} type="zenn" />
          </a>
        </div>
        {/* <ReactTooltip border={true} arrowColor="none" place="bottom" effect="solid" type="info" /> */}
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
