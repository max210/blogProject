import React, { Suspense } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Loading from '@/components/loading'
import ErrorBoundary from '@/components/errorBoundary'
import routerConfig from './routerConfig'

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
