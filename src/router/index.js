import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Loading from '@/components/loading'
import ErrorBoundary from '@/components/errorBoundary'

const Home = lazy(() => import('@/views/home'))
const Label = lazy(() => import('@/views/label'))
const Post = lazy(() => import('@/views/post'))

const routerConfig = [
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
    path: '/post',
    name: '文章',
    component: Post,
    exact: true
  }
]

function Routers() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routerConfig.map(route => (
            <Route path={route.path} component={route.component} exact={route.exact} key={route.path} />
          ))}
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  )
}

export default withRouter(Routers)
