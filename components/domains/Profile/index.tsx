import styles from './Profile.module.scss'
import cn from 'classnames'
import IconButton from '../../bases/IconButton'
import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Link from 'next/link'
import Tooltips from '../../bases/Tooltips'
import { useRouter } from 'next/router'

export type Props = {
  className?: string
}

const Profile: React.FC<Props> = ({ className }) => {
  const [isClick, setIsClick] = useState(false)
  const router = useRouter()
  useEffect(() => {
    console.log('action')
    return () => {
      setIsClick(false)
    }
  }, [isClick])

  // const counter = () => {
  //   const [count, setCount] = useState(0)
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCount((c) => c + 1)
  //     }, 1000)
  //     return () => clearInterval(interval)
  //   }, [])
  // }

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
        <button className={styles.skillButton} onClick={() => router.push('/skill-sheet')}>
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
              <IconButton
                className={styles.gmailIcon}
                type="gmail"
                onClick={() => setIsClick(true)}
              />
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
