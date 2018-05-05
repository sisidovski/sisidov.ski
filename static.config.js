import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'
import webpack from './config/webpack'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  getSiteData: () => ({
    title: 'sisidov.ski - Shunya Shishido',
  }),
  getRoutes: async () => {
    const { posts, home, about, contact } = await jdown('content')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          ...home,
          posts
        }),
      },
      {
        path: '/about',
        component: 'src/containers/About',
        getData: () => ({
          about,
        }),
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/contact',
        component: 'src/containers/Contact',
        getData: () => ({
          contact
        })
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  webpack: webpack,
}
