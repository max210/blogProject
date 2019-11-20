import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import routerConfig from './routerConfig'

function Routers() {
  return (
    <Switch>
      {routerConfig.map(route => (
        <Route path={route.path} component={route.component} exact={route.exact} key={route.path} />
      ))}
      <Redirect to='/' />
    </Switch>
  )
}

export default withRouter(Routers)
