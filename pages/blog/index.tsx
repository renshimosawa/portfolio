import styles from './blog.module.scss'
import React, { FC } from 'react'
import AppbarWhite from '../../components/domains/AppbarWhite'
import Top from '../../components/domains/Top'
import { useRouter } from 'next/router'
import HeadCompo from '../../components/domains/HeadCompo'
import BackButton from '../../components/domains/BackButton'
import { Fade } from 'react-awesome-reveal'
import Footer from '../../components/domains/Footer'
import { getBlogs } from '../../service/blogs'
import Navigation from '../../components/domains/templates'
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
      </Fade>
      <Fade>
        <BackButton onBackClick={() => router.push('#top')} />
        <Footer />
      </Fade>
    </div>
  )
}

export default blog
