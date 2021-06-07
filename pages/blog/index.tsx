import styles from './blog.module.scss'
import React, { FC } from 'react'
import AppbarWhite from '../../components/domains/AppbarWhite'
import Top from '../../components/domains/Top'
import { useRouter } from 'next/router'
import HeadCompo from '../../components/domains/HeadCompo'
import BackButton from '../../components/domains/BackButton'
import { Fade } from 'react-awesome-reveal'
import Footer from '../../components/domains/Footer'
import Link from 'next/link'
import Card from '../../components/bases/Card'

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY },
  }
  const data = await fetch('https://emotional-aomori.microcms.io/api/v1/blog', key)
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      blog: data.contents,
    },
  }
}

export default function Blog({ blog }) {
  const router = useRouter()

  return (
    <div className={styles.default}>
      <HeadCompo />
      <AppbarWhite className={styles.appbar} onClick={() => router.push('/')} />
      <Top
        className={styles.top}
        FirstLabel="→Portfolio"
        SecondLabel="←Home"
        onFirstClick={() => router.push('portfolio')}
        onSecondClick={() => router.push('/')}
      />
      <Fade>
        <div className={styles.titleContainer}>
          <p className={styles.title}>記事</p>
        </div>
        <div className={styles.itemsContainer}>
          {blog.map((blog) => (
            <Card key={blog.id} className={styles.item} style={{ borderRadius: 0 }}>
              <Link href={`blog/${blog.id}`}>
                <div>
                  <div className={styles.imgContainer}>
                    <img src={blog.thumbnail.url}></img>
                  </div>
                  <h4 style={{ marginTop: 10, marginBottom: 10 }}>{blog.title}</h4>
                  <p datatype="yyyy-mm-dd" style={{ margin: 3, color: '#575757' }}>
                    {blog.date}
                  </p>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </Fade>
      <Fade>
        <BackButton onBackClick={() => router.push('#top')} />
        <Footer />
      </Fade>
    </div>
  )
}
