import React from 'react'
import OverlayMapKyoto from '../../../components/domains/OverlayMapKyoto'
import HeadCompo from '../../../components/domains/HeadCompo'
import AppbarGray from '../../../components/domains/AppbarGray'
import { useRouter } from 'next/router'
import LogoFooter from '../../../components/domains/LogoFooter'

// OGP
const Title = '京都古地図'
const Description = ''
const OgpImage =
  'https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/kyoto.png?alt=media&token=b688df04-fee8-4cae-a631-8f1ed478a329'

const testLabKyoto: React.FC = () => {
  const router = useRouter()
  const path = router.pathname
  return (
    <div>
      <HeadCompo
        title={Title}
        description={Description}
        ogImage={OgpImage}
        currentPathId={path}
        noindex
      />
      {/* <AppbarGray onClick={() => router.push('/')} /> */}
      <OverlayMapKyoto />
      <LogoFooter />
    </div>
  )
}
export default testLabKyoto
