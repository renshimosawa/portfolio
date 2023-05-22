import React from 'react'
import OverlayMap from '../../../components/domains/OverlayMap'
import HeadCompo from '../../../components/domains/HeadCompo'
import AppbarGray from '../../../components/domains/AppbarGray'
import router, { useRouter } from 'next/router'

// OGP
const Title = '文久改正八戸御城下略図 on Google Map'
const Description =
  '幕末(1862年くらい)の八戸城の古地図「文久改正八戸御城下略図」を現代の八戸市街にオーバーレイしました。'
const testLab: React.FC = () => {
  const router = useRouter()
  const path = router.pathname
  return (
    <div>
      <HeadCompo title={Title} description={Description} currentPathId={path} />
      <AppbarGray onClick={() => router.push('/')} />
      <h2 style={{ padding: '0 20px', textAlign: 'center' }}>
        文久改正八戸御城下略図 on Google Map
      </h2>
      <OverlayMap />
    </div>
  )
}
export default testLab
