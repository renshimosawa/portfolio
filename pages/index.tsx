import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import React, { FC } from 'react'
import AppbarWhite from '../components/domains/AppbarWhite'
import Top from '../components/domains/Top'
import Catch from '../components/domains/Catch'
import Profile from '../components/domains/Profile'
import BackButton from '../components/domains/BackButton'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AppbarWhite className={styles.appbar} />
        <Top className={styles.top} />
        <Catch className={styles.catch} />
        <Profile className={styles.profole} />
        <BackButton className={styles.backButton} />
      </main>

      {/* <footer className={styles.footer}>
        <a></a>
      </footer> */}
    </div>
  )
}

export default Home
