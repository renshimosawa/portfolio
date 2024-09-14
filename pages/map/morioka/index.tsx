import React from 'react'
import OverlayMapMorioka from '../../../components/domains/OverlayMapMorioka'
import HeadCompo from '../../../components/domains/HeadCompo'
import AppbarGray from '../../../components/domains/AppbarGray'
import router, { useRouter } from 'next/router'

// OGP
const Title = '南部領盛岡平城絵図 on Google Map'
const Description =
  '正保元年(1644年)の盛岡城の古地図「南部領盛岡平城絵図」を現代の盛岡市街にオーバーレイしました。'
const OgpImage =
  'https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/Overlay.png?alt=media&token=47dd02ee-efb8-438a-9d9c-ccd8d5a9eb9c'

const testLab: React.FC = () => {
  const router = useRouter()
  const path = router.pathname
  return (
    <div>
      <HeadCompo title={Title} description={Description} currentPathId={path} />
      <AppbarGray onClick={() => router.push('/')} />
      <h2 style={{ padding: '0 20px', textAlign: 'center' }}>南部領盛岡平城絵図 on Google Map</h2>
      <OverlayMapMorioka />
    </div>
  )
}
export default testLab
