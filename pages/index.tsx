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

const Home: React.FC = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <HeadCompo />
      <main className={styles.main} id="top">
        <AppbarWhite className={styles.appbar} onClick={() => router.push('/')} />
        <Top
          className={styles.top}
          FirstLabel="→Portfolio"
          SecondLabel="→Blog"
          onFirstClick={() => router.push('/portfolio')}
          onSecondClick={() => router.push('/blog')}
        />
        <Fade>
          <Catch className={styles.catch} />
        </Fade>
        <Fade>
          <Profile className={styles.profole} onSkillClick={() => router.push('/skillSheet')} />
        </Fade>
        <Fade>
          <BackButton className={styles.backButton} onBackClick={() => router.push('#top')} />
        </Fade>
      </main>
      <Fade>
        <Footer />
      </Fade>
    </div>
  )
}

export default Home
