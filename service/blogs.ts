import axios from 'axios'

const X_API_KEY: string = process.env.X_API_KEY || ''

export const getBlogs = () =>
  axios.get('https://sample-cms.microcms.io/api/v1/blogs', {
    headers: {
      'Content-type': 'application/json',
      'X-API-KEY': X_API_KEY,
    },
  })

export const getBlogBy = (id) =>
  axios.get('https://sample-cms.microcms.io/api/v1/blogs/' + id, {
    headers: {
      'Content-type': 'application/json',
      'X-API-KEY': X_API_KEY,
    },
  })
