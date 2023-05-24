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
        <Top className={styles.top} title="Knowledge of history" />
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
                  imgUrl="https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/ogp.jpg?alt=media&token=fff0561e-3cd7-45e1-9a3c-8be8d33cdf8d"
                />
              </a>
              <a href="https://quantum-box.com/" target="_blank">
                <ImgCard
                  labelStyle={{ color: '#575757' }}
                  label="【Web制作】Quantum Box HP"
                  imgUrl="https://firebasestorage.googleapis.com/v0/b/allergy-card-c1149.appspot.com/o/OGP.png?alt=media&token=efe1ff32-29a9-4384-a3ad-6a42a20cd9cf"
                />
              </a>
              <a href="https://prtimes.jp/main/html/rd/p/000000001.000069392.html" target="_blank">
                <ImgCard
                  labelStyle={{ color: '#575757' }}
                  label="【PRtimes】アレルギーカード"
                  imgUrl="https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/yellowGreen3.png?alt=media&token=7595e878-3672-49e2-be88-e7c54cce8aaa"
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
                  imgUrl="https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/Overlay.png?alt=media&token=47dd02ee-efb8-438a-9d9c-ccd8d5a9eb9c"
                />
              </a>
              <a href="/map/kyoto/">
                <ImgCard
                  labelStyle={{ color: '#575757' }}
                  label="京都"
                  imgUrl="https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/kyoto.png?alt=media&token=b688df04-fee8-4cae-a631-8f1ed478a329"
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
