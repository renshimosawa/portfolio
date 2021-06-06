export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
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
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch('https://emotional-aomori.microcms.io/api/v1/blog/' + id, key)
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      blog: data,
    },
  }
}

export default function BlogId({ blog }) {
  return (
    <main>
      <img src={blog.thumbnail.url}></img>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.main}`,
        }}
      />
    </main>
  )
}
