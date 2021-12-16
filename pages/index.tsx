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
import SkillButton from '../components/bases/SkillButton'

// OGP
const Title = 'Emotional Aomori'
const Description =
  '下沢廉のポートフォリオサイトです。Next.jsで作りました。新卒で入社した会社を1年未満で辞めて、フリーランスの動画編集者などを経験しましたが、今はフロントエンドエンジニアをしています。'
const Url = 'https://emotional-aomori.com'
const OgpImage =
  'https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/OGP.png?alt=media&token=ade42b67-3b99-4e49-b251-f9555117276f'

const Home: React.FC = () => {
  const router = useRouter()
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <div className={styles.container}>
      <HeadCompo
        title={Title}
        description={Description}
        ogUrl={Url}
        ogTitle={Title}
        ogDescription={Description}
        ogImage={OgpImage}
        twitterUrl={Url}
        twitterTitle={Title}
        twitterDescription={Description}
        twitterImage={OgpImage}
      />
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p style={{ textAlign: 'center' }}>今つくろうとしてるアプリの実験場</p>
            <SkillButton
              label="TESTLABへ"
              style={{ textAlign: 'center' }}
              onSkillClick={() => router.push('/test-lab')}
            />
          </div>
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
