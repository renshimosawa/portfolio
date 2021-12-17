import styles from './portfolio.module.scss'
import React, { FC } from 'react'
import AppbarGray from '../../components/domains/AppbarGray'
import { useRouter } from 'next/router'
import ImgCard from '../../components/domains/ImgItem'
import VideoCard from '../../components/domains/VideoItem'
import HeadCompo from '../../components/domains/HeadCompo'
import BackButton from '../../components/domains/BackButton'
import { Fade } from 'react-awesome-reveal'
import Footer from '../../components/domains/Footer'
import Link from 'next/link'
import { animateScroll as scroll } from 'react-scroll'

// OGP
const Title = `Ren's portfolio`
const Type = 'artcle'
const Description = '下沢廉のポートフォリオです。過去に作成した動画、イラスト、Webページなどです。'
const Url = 'https://emotional-aomori.com/portfolio'
const OgpImage =
  'https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/OGP.png?alt=media&token=ade42b67-3b99-4e49-b251-f9555117276f'

const Portfolio: React.FC = () => {
  const router = useRouter()
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
    <div className={styles.default}>
      <HeadCompo
        title={Title}
        description={Description}
        ogType={Type}
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
      <Fade>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Portfolio</p>
        </div>
        <div className={styles.items}>
          <Link href="https://it-feels-it.com/">
            <a target="_blank">
              <ImgCard
                style={{ margin: 15 }}
                labelStyle={{ color: '#575757' }}
                label="【Web制作】it feels it HP"
                imgUrl="https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/ogp.jpg?alt=media&token=fff0561e-3cd7-45e1-9a3c-8be8d33cdf8d"
              />
            </a>
          </Link>
          <Link href="https://quantum-box.com/">
            <a target="_blank">
              <ImgCard
                style={{ margin: 15 }}
                labelStyle={{ color: '#575757' }}
                label="【Web制作】Quantum Box HP"
                imgUrl="https://firebasestorage.googleapis.com/v0/b/allergy-card-c1149.appspot.com/o/OGP.png?alt=media&token=efe1ff32-29a9-4384-a3ad-6a42a20cd9cf"
              />
            </a>
          </Link>
          <VideoCard
            style={{ margin: 15 }}
            labelStyle={{ color: '#575757' }}
            label="えんぶりフォトコン2020特賞"
            url="https://www.youtube.com/embed/Xw_Xc50jY1E"
          />
          <ImgCard
            style={{ margin: 15 }}
            labelStyle={{ color: '#575757' }}
            label="Quantum Box 会社ロゴ作成"
            imgUrl="https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%2031%20%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC_color.png?alt=media&token=dd982f4c-5e44-43bc-9f5a-4d18f4f99a76"
          />
          <ImgCard
            style={{ margin: 15 }}
            labelStyle={{ color: '#575757' }}
            label="Quantum Box 会社ロゴ作成"
            imgUrl="https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%2031_color.png?alt=media&token=306f71e9-326f-492d-8bf4-6b1048920b56"
          />
          <Link href="https://compeya.com/lp">
            <a target="_blank">
              <ImgCard
                style={{ margin: 15 }}
                labelStyle={{ color: '#575757' }}
                label="【Webデザイン】コンペヤLP"
                imgUrl="https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/1.91_1.png?alt=media&token=c97cd079-0c10-46db-a170-4d9869a23159"
              />
            </a>
          </Link>
          {/* <VideoCard
            style={{ margin: 15 }}
            labelStyle={{ color: '#575757' }}
            label="Youtubeプレミア公開　模写"
            url="https://www.youtube.com/embed/FVDlTiEDpFY"
          /> */}
          <Link href="https://prtimes.jp/main/html/rd/p/000000001.000069392.html">
            <a target="_blank">
              <ImgCard
                style={{ margin: 15 }}
                labelStyle={{ color: '#575757' }}
                label="【PRtimes】アレルギーカード"
                imgUrl="https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/yellowGreen3.png?alt=media&token=7595e878-3672-49e2-be88-e7c54cce8aaa"
              />
            </a>
          </Link>
          <VideoCard
            style={{ margin: 15 }}
            labelStyle={{ color: '#575757' }}
            label="【動画】アレルギーカードとは"
            url="https://www.youtube.com/embed/XFMC9j25pXg"
          />
        </div>
      </Fade>
      <Fade>
        <BackButton onBackClick={scrollToTop} />
        <Footer />
      </Fade>
    </div>
  )
}

export default Portfolio
