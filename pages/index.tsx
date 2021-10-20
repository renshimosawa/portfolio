import styles from '../styles/Home.module.scss'
import React, { FC } from 'react'
import AppbarWhite from '../components/domains/AppbarWhite'
import Top from '../components/domains/Top'
import Catch from '../components/domains/Catch'
import Profile from '../components/domains/Profile'
import BackButton from '../components/domains/BackButton'
import { Fade } from 'react-awesome-reveal'
import { useRouter } from 'next/router'
import HeadCompo from '../components/domains/HeadCompo'
import Footer from '../components/domains/Footer'
import { animateScroll as scroll } from 'react-scroll'

const Home: React.FC = () => {
  const router = useRouter()
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <div className={styles.container}>
      <HeadCompo />
      <main className={styles.main}>
        <AppbarWhite className={styles.appbar} onClick={() => router.push('/')} />
        <Top
          className={styles.top}
          title="Make Aomori Emotional"
          FirstLabel="→Portfolio"
          SecondLabel="→Blog"
          onFirstClick={() => router.push('/portfolio')}
          onSecondClick={() => router.push('/blog')}
        />
        <Fade>
          <Catch className={styles.catch} />
        </Fade>
        <Fade>
          <Profile className={styles.profile} onSkillClick={() => router.push('/skillSheet')} />
        </Fade>
        <Fade>
          <BackButton className={styles.backButton} onBackClick={scrollToTop} />
        </Fade>
      </main>
      <Fade>
        <Footer />
      </Fade>
    </div>
  )
}

export default Home
