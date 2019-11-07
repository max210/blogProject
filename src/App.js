import React, { useState, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routers from '@/router'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ErrorBoundary from '@/components/errorBoundary'
import Loading from '@/components/loading'
import ModeToggle from '@/components/modeToggle'
import style from './App.module.less'

export const Theme = React.createContext()

function App() {
  const [mode, setMode] = useState('light')

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
