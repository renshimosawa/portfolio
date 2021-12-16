import Head from 'next/head'
import React from 'react'

export interface props {
  title: string
  description: string
  ogUrl: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  twitterUrl: string
  twitterTitle: string
  twitterDescription: string
  twitterImage: string
}

// OGP
const Title = 'Emotional Aomori'
const Description =
  '下沢廉のポートフォリオサイトです。Next.jsで作りました。新卒で入社した会社を1年未満で辞めて、フリーランスの動画編集者などを経験しましたが、今はフロントエンドエンジニアをしています。'
const Url = 'https://emotional-aomori.com'
const OgpImage =
  'https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/OGP.png?alt=media&token=ade42b67-3b99-4e49-b251-f9555117276f'

const HeadCompo: React.FC<props> = ({
  title,
  description,
  ogUrl,
  ogTitle,
  ogDescription,
  ogImage,
  twitterUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="description" content={description} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={twitterUrl} />
      <meta property="twitter:title" content={twitterTitle} />
      <meta property="twitter:description" content={twitterDescription} />
      <meta property="twitter:image" content={twitterImage} />
      <link rel="shortcut icon" href="favicon.png" />
      <link rel="apple-touch-icon" href="favicon.png" />
      <link rel="icon" type="image/png" href="favicon.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
  )
}

export default HeadCompo
