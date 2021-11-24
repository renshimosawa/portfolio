import styles from './Top.module.scss'
import cn from 'classnames'
import TopBack from '../TopBack'
import { Fade } from 'react-awesome-reveal'
import React, { VFC } from 'react';
import Particles from 'react-particles-js';
import { IOptions, RecursivePartial } from 'tsparticles';
import { css } from '@emotion/css';
import ParticlesPolygon from './particlesjs-config.json'
import ParticlesSnow from './particlesjs-config-snow.json'

export type Props = {
  className?: string
  title: string
  onFirstClick?: () => void
  FirstLabel?: string
  onSecondClick?: () => void
  SecondLabel?: string
}

const Top: React.FC<Props> = ({
  className,
  title,
  onFirstClick,
  FirstLabel,
  onSecondClick,
  SecondLabel,
}) => (
  <div className={cn(styles.default, className)}>
    
    <div className={styles.container}>
      <Fade>
        <p className={styles.title}>{title}</p>
        <button className={styles.portButton} onClick={onFirstClick}>
          <span>{FirstLabel}</span>
        </button>
        <br />
        <button className={styles.blogButton} onClick={onSecondClick}>
          <span>{SecondLabel}</span>
        </button>
      </Fade>
    </div>
    <Particles
      style={{ position: "absolute", top: 0, left: 0, zIndex:9 }}
      params={ParticlesSnow as RecursivePartial<IOptions>}
    />
    <TopBack className={styles.back} />
  </div>
)

export default Top
