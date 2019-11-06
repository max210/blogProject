import React, { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import Routers from '@/router'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ModeToggle from '@/components/modeToggle'
import style from './App.module.less'

export const Theme = React.createContext()

function App() {
  const [mode, setMode] = useState('light')

  return (
    <HashRouter>
      <Theme.Provider value={mode}>
        <div className={`${style.appContainer} ${mode === 'dark' ? style.dark : ''}`}>
          <div className={style.mainContainer}>
            <Header />
            <div className={style.toggleContainer}>
              <ModeToggle changeMode={setMode} />
            </div>
            <Routers />
          </div>
          <Footer />
        </div>
      </Theme.Provider>
    </HashRouter>
  )
}

export default App
