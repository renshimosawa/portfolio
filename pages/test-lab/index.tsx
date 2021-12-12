import React, { FC } from 'react'
import OverlayMap from '../../components/domains/OverlayMap'
const testLab: React.FC = () => {
  return (
    <div>
      <h2 style={{ padding: '0 20px', textAlign: 'center' }}>
        文久改正八戸御城下略図 on Google Map
      </h2>
      <p style={{ padding: '0 20px', textAlign: 'center' }}>
        幕末(1862年くらい)の八戸城を現代にオーバーレイしました
      </p>
      <OverlayMap />
    </div>
  )
}
export default testLab
