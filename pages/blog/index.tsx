import styles from './blog.module.scss'
import React, { FC } from 'react'
import AppbarGray from '../../components/domains/AppbarGray'
import Top from '../../components/domains/Top'
import { useRouter } from 'next/router'
import HeadCompo from '../../components/domains/HeadCompo'
import BackButton from '../../components/domains/BackButton'
import { Fade } from 'react-awesome-reveal'
import Footer from '../../components/domains/Footer'
import Link from 'next/link'
import Card from '../../components/bases/Card'
import Moment from 'react-moment'
import { animateScroll as scroll } from 'react-scroll'

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

const Blog = ({ blog }) => {
  const router = useRouter()
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <div className={styles.default}>
      <HeadCompo />
      <AppbarGray onClick={() => router.push('/')} />
      <Fade>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Blog</p>
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
                  <Moment format="YYYY/MM/DD" style={{ margin: 5, color: '#a1a1a1;' }}>
                    {blog.date}
                  </Moment>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </Fade>
      <Fade>
        <BackButton onBackClick={scrollToTop} />
        <Footer />
      </Fade>
    </div>
  )
}

export default Blog
