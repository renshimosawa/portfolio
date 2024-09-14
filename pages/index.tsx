import styles from '../styles/Home.module.scss'
import React from 'react'
import AppbarWhite from '../components/domains/AppbarWhite'
import Top from '../components/domains/Top'
import Profile from '../components/domains/Profile'
import { Fade } from 'react-awesome-reveal'
import { useRouter } from 'next/router'
import HeadCompo from '../components/domains/HeadCompo'
import Footer from '../components/domains/Footer'
import SkillButton from '../components/bases/SkillButton'
import ImgCard from '../components/domains/ImgItem'
import VideoCard from '../components/domains/VideoItem'

// OGP

const OgpImage =
  'https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/OGP-100.jpg?alt=media&token=607b69df-42b7-47fd-b5fe-11b042b6f16f'

const Home: React.FC = () => {
  const router = useRouter()
  const path = router.pathname
  return (
    <div className={styles.container}>
      <HeadCompo ogImage={OgpImage} currentPathId={path} />
      <main className={styles.main}>
        <AppbarWhite className={styles.appbar} onClick={() => router.push('/')} />
        <Top className={styles.top} title="History and Knowledge" />
        <Fade>
          <Profile className={styles.profile} onSkillClick={() => router.push('/skill-sheet')} />
          <div>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>Portfolio</h2>
            </div>
            <div className={styles.items}>
              <a href="https://it-feels-it.com/" target="_blank">
                <ImgCard
                  labelStyle={{ color: '#575757' }}
                  label="【Web制作】it feels it HP"
                  imgUrl="/it-feels-it.png"
                  alt="it feels itホームページの画像"
                />
              </a>
              <a href="https://quantum-box.com/" target="_blank">
                <ImgCard
                  labelStyle={{ color: '#575757' }}
                  label="【Web制作】Quantum Box HP"
                  imgUrl="/QBox-image.png"
                  alt="Quantum Boxホームページの画像"
                />
              </a>
              <a href="https://prtimes.jp/main/html/rd/p/000000001.000069392.html" target="_blank">
                <ImgCard
                  labelStyle={{ color: '#575757' }}
                  label="【PRtimes】アレルギーカード"
                  imgUrl="/allergy-card-image.png"
                  alt="スマホアプリ アレルギーカードのPR"
                />
              </a>
              <VideoCard
                labelStyle={{ color: '#575757' }}
                label="【動画】アレルギーカードとは"
                url="https://www.youtube.com/embed/XFMC9j25pXg"
              />
            </div>
          </div>
          <div>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>古地図</h2>
            </div>
            <div className={styles.items}>
              <a href="/map/hachinohe/">
                <ImgCard
                  labelStyle={{ color: '#575757' }}
                  label="八戸市"
                  imgUrl="/ol-hachinohe.png"
                  alt="八戸城オーバーレイのサムネイル"
                />
              </a>
              <a href="/map/kyoto/">
                <ImgCard
                  labelStyle={{ color: '#575757' }}
                  label="京都"
                  imgUrl="/ol-kyoto.png"
                  alt="平安京オーバーレイのサムネイル"
                />
              </a>
              <a href="/map/morioka/">
                <ImgCard
                  labelStyle={{ color: '#575757' }}
                  label="盛岡"
                  imgUrl="/moriokajou.png"
                  alt="盛岡城オーバーレイのサムネイル"
                />
              </a>
            </div>
          </div>
        </Fade>
        {/* <Fade>
          <BackButton className={styles.backButton} onBackClick={scrollToTop} />
        </Fade> */}
      </main>
      <Fade>
        <Footer />
      </Fade>
    </div>
  )
}

export default Home
