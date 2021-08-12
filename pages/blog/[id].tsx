import styles from './id.module.scss'
import AppbarGray from '../../components/domains/AppbarGray'
import Moment from 'react-moment'
import { useRouter } from 'next/router'
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import createOgp from '../../utils/server/ogpUtils'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export interface Blog {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: any
  revisedAt: string
  title: string
  date: string
  thumbnail?: thumbnailTag
  main: string
}

export interface thumbnailTag {
  url: string
  width: number
  height: number
}

export interface microCmsResponse<T> {
  contents: Array<T>
}

const key = {
  headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY },
}
export const getStaticPaths = async () => {
  try{
    const data:microCmsResponse<Blog> = await (
      await fetch('https://emotional-aomori.microcms.io/api/v1/blog', key)
    ).json()
    const paths = data.contents.map((content) => `/blog/${content.id}`)
    return { paths, fallback: false }
  } catch (err) {
    console.error(err)
  }
}

export const getStaticProps = async ({params}: GetStaticPropsContext) => {
  const id =  params?.id ?? ''
  try{
    const data:Blog = await (
      await fetch('https://emotional-aomori.microcms.io/api/v1/blog/' + id, key)
      ).json()
      const title = data.title
      const Id = data.id
      const baseUrl = {
        production: "https://www.emotional-aomori.com/",
        development: "http://localhost:2019",
      }[process.env.NODE_ENV];
      void createOgp(title,Id);
      return {
        props: {
          blog: data,
          title,
          ogImageUrl: `${baseUrl}/api/ogp?title=${id}`,
        },
      }
  } catch(error) {
    console.error(error)
  }
}
const BlogId:NextPage<Props> = ({ blog, title }) => {
  const router = useRouter()
  const BaseUrl = "https://www.emotional-aomori.com/"
  const { Id } = router.query; 
  return (
    <div className={styles.default}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        {/* <meta property="og:title" content={`${BaseUrl}/ogp/${Id}.png`} /> */}
        <meta
          property="og:image"
          content={`${BaseUrl}/ogp/${Id}.png`} 
        />
        <meta
          property="twitter:card"
          content="summary_large_image" />
        <meta
          property="twitter:image"
          content={`${BaseUrl}/ogp/${Id}.png`} 
        />
      </Head>
      <AppbarGray onClick={() => router.push('/')} />
      <div className={styles.container}>
        <div className={styles.contents}>
          <h1 className={styles.title}>{blog.title}</h1>
          <Moment format="YYYY/MM/DD" className={styles.date}>
            {blog.publishedAt}
          </Moment>
          {blog.thumbnail.url && (
            <div className={styles.imgContainer}>
              <img src={blog.thumbnail.url} className={styles.thumbnail}></img>
            </div>
          )}
          <div
            className={styles.main}
            dangerouslySetInnerHTML={{
              __html: `${blog.main}`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
export default BlogId
