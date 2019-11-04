import React from 'react'
import { HashRouter } from 'react-router-dom'
import Routers from '@/router'
import Header from '@/components/header'

const style = {
  maxWidth: '900px',
  margin: '0 auto'
}

function App() {
  return (
    <HashRouter>
      <div style={style}>
        <Header />
        <Routers />
      </div>
    </HashRouter>
  )
}

export default App
