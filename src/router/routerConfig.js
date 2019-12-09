import { lazy } from 'react'

const Home = lazy(() => import('@/views/home'))
const Label = lazy(() => import('@/views/label'))
const Post = lazy(() => import('@/views/post'))
const About = lazy(() => import('@/views/about'))

export default [
  {
    path: '/',
    name: '首页',
    component: Home,
    exact: true
  },
  {
    path: '/label',
    name: '分类',
    component: Label,
    exact: true
  },
  {
    path: '/post/:name',
    name: '文章',
    component: Post,
    exact: true
  },
  {
    path: '/about',
    name: '关于',
    component: About,
    exact: true
  }
]
