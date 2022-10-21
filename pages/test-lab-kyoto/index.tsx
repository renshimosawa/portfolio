import React from 'react'
import OverlayMapKyoto from '../../components/domains/OverlayMapKyoto'
import HeadCompo from '../../components/domains/HeadCompo'
import AppbarGray from '../../components/domains/AppbarGray'
import router from 'next/router'

// OGP
const Title = ''
const Type = 'artcle'
const Description = ''
const Url = 'https://emotional-aomori.com/test-lab-kyoto'
const OgpImage = ''

const testLabKyoto: React.FC = () => {
  return (
    <div>
      <HeadCompo
        title={Title}
        description={Description}
        ogType="artcle"
        ogUrl={Url}
        ogTitle={Title}
        ogDescription={Description}
        ogImage={OgpImage}
        twitterUrl={Url}
        twitterTitle={Title}
        twitterDescription={Description}
        twitterImage={OgpImage}
      />
      <AppbarGray onClick={() => router.push('/')} />
      <h2 style={{ padding: '0 20px', textAlign: 'center' }}>
        文久改正八戸御城下略図 on Google Map
      </h2>
      <OverlayMapKyoto />
    </div>
  )
}
export default testLabKyoto
