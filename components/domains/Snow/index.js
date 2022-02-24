import Particles from 'react-tsparticles'
import ParticlesSnow from './ts-particles-config-snow.json'

export const Snow = () => {
  const particlesInit = (main) => {
    console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  const particlesLoaded = (container) => {
    console.log(container)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={ParticlesSnow}
    />
  )
}
