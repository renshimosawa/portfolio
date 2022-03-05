import Particles from 'react-tsparticles'
import ParticlesSnow from './ts-particles-config-snow.json'

export const Snow = () => {
  const particlesInit = (main) => {
    console.log(main)
  }

  const particlesLoaded = (container) => {
    console.log(container)
  }

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesSnow}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
      />
    </div>
  )
}
