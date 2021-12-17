import styles from './id.module.scss'
import AppbarGray from '../../components/domains/AppbarGray'
import Moment from 'react-moment'
import { useRouter } from 'next/router'
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import HeadCompo from '../../components/domains/HeadCompo'

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
  try {
    const data: microCmsResponse<Blog> = await (
      await fetch('https://emotional-aomori.microcms.io/api/v1/blog', key)
    ).json()
    const paths = data.contents.map((content) => `/blog/${content.id}`)
    return { paths, fallback: false }
  } catch (err) {
    console.error(err)
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params?.id ?? ''
  try {
    const data: Blog = await (
      await fetch('https://emotional-aomori.microcms.io/api/v1/blog/' + id, key)
    ).json()
    const title = data.title
    return {
      props: {
        blog: data,
        title,
      },
    }
  } catch (error) {
    console.error(error)
  }
}

// OGP
const Type = 'artcle'
const Description =
  '下沢廉のブログです。Next.jsで作りました。新卒で入社した会社を1年未満で辞めて、フリーランスの動画編集者などを経験しましたが、今はフロントエンドエンジニアをしています。'
const OgpImage =
  'https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/OGP.png?alt=media&token=ade42b67-3b99-4e49-b251-f9555117276f'

const BlogId: NextPage<Props> = ({ blog, title }) => {
  const router = useRouter()
  const Url = 'https://emotional-aomori.com/' + router.query
  return (
    <div className={styles.default}>
      <HeadCompo
        title={title}
        description={Description}
        ogType={Type}
        ogUrl={Url}
        ogTitle={title}
        ogDescription={Description}
        ogImage={OgpImage}
        twitterUrl={Url}
        twitterTitle={title}
        twitterDescription={Description}
        twitterImage={OgpImage}
      />
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
