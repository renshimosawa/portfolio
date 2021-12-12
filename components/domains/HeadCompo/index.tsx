import Head from 'next/head'

const HeadCompo: React.FC = () => {
  return (
    <Head>
      <title>Emotional Aomori</title>
      <link rel="icon" href="/favicon.png" />
      <title>Emotional Aomori</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="description"
        content="下沢廉のポートフォリオサイトです。Next.jsで作りました。"
      />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://emotional-aomori.com" />
      <meta property="og:title" content="Emotional Aomori" />
      <meta
        property="og:description"
        content="下沢廉のポートフォリオサイトです。Next.jsで作りました。"
      />
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/OGP.png?alt=media&token=fe348853-d2cd-4b08-8906-33eb47b3664f"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://emotional-aomori.com" />
      <meta property="twitter:title" content="Emotional Aomori" />
      <meta
        property="twitter:description"
        content="下沢廉のポートフォリオサイトです。Next.jsで作りました。"
      />
      <meta
        property="twitter:image"
        content="https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/OGP.png?alt=media&token=fe348853-d2cd-4b08-8906-33eb47b3664f"
      />
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
