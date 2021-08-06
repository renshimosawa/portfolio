import styles from './id.module.scss'
import AppbarGray from '../../components/domains/AppbarGray'
import HeadCompo from '../../components/domains/HeadCompo'
import Moment from 'react-moment'
import { useRouter } from 'next/router'
import { InferGetStaticPropsType, NextPage } from 'next'

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

export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY },
  }
  const data = await fetch('https://emotional-aomori.microcms.io/api/v1/blog', key)
    .then((res) => res.json())
    .catch(() => null)
  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id
  const key = {
    headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY  },
  }
  const data:Blog = await fetch('https://emotional-aomori.microcms.io/api/v1/blog/' + id, key)
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      blog: data,
    },
  }
}

const BlogId:NextPage<Props> = ({ blog }) => {
  const router = useRouter()
  return (
    <div className={styles.default}>
      <HeadCompo />
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
