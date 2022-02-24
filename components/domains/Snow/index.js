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
    <div
    // style={{
    //   width: '100vw',
    //   height: '100vh',
    //   position: 'fixed',
    //   top: 0,
    //   left: 0,
    //   overflow: 'hidden',
    //   zIndex: 1,
    // }}
    >
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
