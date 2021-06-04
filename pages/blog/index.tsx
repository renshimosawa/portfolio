import styles from './blog.module.scss'
import React, { FC } from 'react'
import AppbarWhite from '../../components/domains/AppbarWhite'
import Top from '../../components/domains/Top'
import { useRouter } from 'next/router'
import HeadCompo from '../../components/domains/HeadCompo'
import BackButton from '../../components/domains/BackButton'
import { Fade } from 'react-awesome-reveal'
import Footer from '../../components/domains/Footer'

import { NextPage } from 'next'

const blog: NextPage = (props: any) => {
  const router = useRouter()
  // const { contents } = props;
  return (
    <div className={styles.default}>
      <HeadCompo />
      <AppbarWhite className={styles.appbar} onClick={() => router.push('/')} />
      <Top
        className={styles.top}
        FirstLabel="→Portfolio"
        SecondLabel="←Home"
        onFirstClick={() => router.push('portfolio')}
        onSecondClick={() => router.push('/')}
      />
      <Fade>
        <div className={styles.titleContainer}>
          <p className={styles.title}>記事</p>
        </div>
        <div className={styles.columnContainer}>
          <p className={styles.cms}>BlogはMicro CMSでやろうとしてるところ</p>

          <p className={styles.ques}>
            あと、グラデーションの背景をSvgで埋めたいんですけど、いい方法ありますか？
            <br />
            imgタグのsrc内にいれて表示させると、縦横幅のレスポンシブが効かないし、Svgコンポネントとして入れるとパスにエラーを起こします。
            <br />
            どなたかいい情報お持ちでしたら教えてください。
            <br />
            ちなみにnext.jsで作ってます。
          </p>
        </div>
      </Fade>
      <Fade>
        <BackButton onBackClick={() => router.push('#top')} />
        <Footer />
      </Fade>
    </div>
  )
}

export default blog
