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
