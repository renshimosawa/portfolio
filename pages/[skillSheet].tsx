import styles from '../styles/skillSheet.module.scss'
import React, { FC } from 'react'
import { NextPage } from 'next'
import AppbarGray from '../components/domains/AppbarGray'

const skillSheet: NextPage = () => {
  return (
    <div className={styles.default}>
      <AppbarGray />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h4>Skill Sheet</h4>
          <h5>Adobe</h5>
          <p>Photoshop</p>
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
          {/* brank */}
          <h5>Others</h5>
          <p>Microsoft Office</p>
        </div>
      </div>
    </div>
  )
}

export default skillSheet
