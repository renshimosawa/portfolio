import styles from './skillSheet.module.scss'
import React from 'react'
import AppbarGray from '../../components/domains/AppbarGray'
import HeadCompo from '../../components/domains/HeadCompo'
import Footer from '../../components/domains/Footer'
import BackButton from '../../components/domains/BackButton'
import { useRouter } from 'next/router'
import { Fade } from 'react-awesome-reveal'
import { animateScroll as scroll } from 'react-scroll'

// OGP
const Title = `Ren's skillSheet`
const Description =
  '下沢廉のスキルシートです。Next.jsで作りました。新卒で入社した会社を1年未満で辞めて、フリーランスの動画編集者などを経験しましたが、今はフロントエンドエンジニアをしています。'
const Type = 'artcle'
const Url = 'https://emotional-aomori.com/skill-sheet'
const OgpImage =
  'https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/OGP.png?alt=media&token=ade42b67-3b99-4e49-b251-f9555117276f'

const skillSheet: React.FC = () => {
  const router = useRouter()
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
    <div className={styles.default}>
      <HeadCompo
        title={Title}
        description={Description}
        ogType={Type}
        ogUrl={Url}
        ogTitle={Title}
        ogDescription={Description}
        ogImage={OgpImage}
        twitterUrl={Url}
        twitterTitle={Title}
        twitterDescription={Description}
        twitterImage={OgpImage}
      />
      <Fade>
        <AppbarGray onClick={() => router.push('/')} />
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h4>Skill Sheet</h4>
            <h5>Adobe</h5>
            <p>Photoshop</p>
            <p>Illustrator</p>
            <p>Premiere Pro</p>
            <p>After Effects</p>
            <p>XD</p>
            <p>Lightroom</p>
            {/* brank */}
            <h5>Web Service</h5>
            <p>Figma</p>
            <p>LINE Business</p>
            {/* brank */}
            <h5>Google</h5>
            <p>Sheets / Docs / Slides</p>
            <p>Cloud Platform</p>
            <p>Domains</p>
            <p>Map API</p>
            <p>Analytics</p>
            {/* brank */}
            <h5>Coding</h5>
            <p>Next.js</p>
            <p>React.js</p>
            <p>TypeScript</p>
            <p>JavaScript</p>
            <p>HTML/CSS</p>
            <p>Git</p>
            <p>Lottie</p>
            <p>Micro CMS</p>
            <p>Flutter</p>
            <p>AWS</p>
            {/* brank */}
            <h5>Others</h5>
            <p>Microsoft Office</p>
            <p>ビジネス実務法務検定 2級</p>
          </div>
        </div>
      </Fade>
      <Fade>
        <BackButton className={styles.backButton} onBackClick={scrollToTop} />
      </Fade>
      <Fade>
        <Footer />
      </Fade>
    </div>
  )
}

export default skillSheet
