import styles from './skillSheet.module.scss'
import React, { FC } from 'react'
import AppbarGray from '../../components/domains/AppbarGray'
import HeadCompo from '../../components/domains/HeadCompo'
import Footer from '../../components/domains/Footer'
import BackButton from '../../components/domains/BackButton'
import { useRouter } from 'next/router'
import { Fade } from 'react-awesome-reveal'
import { animateScroll as scroll } from 'react-scroll'

const skillSheet: React.FC = () => {
  const router = useRouter()
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
    <div className={styles.default}>
      <HeadCompo />
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
            <p>Google Sheets / Docs / Slides</p>
            {/* brank */}
            <h5>Engneering</h5>
            <p>HTML/CSS</p>
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Next.js</p>
            <p>Git</p>
            <p>Lottie</p>
            <p>Flutter</p>
            <p>AWS Amprify</p>
            <p>Google Domains</p>
            <p>Google Cloud Platform</p>
            {/* brank */}
            <h5>Others</h5>
            <p>Microsoft Office</p>
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
