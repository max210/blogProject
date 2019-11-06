import React, { useContext } from 'react'
import style from './index.module.less'
import { Theme } from '@/App'

function About() {
  const mode = useContext(Theme)

  return (
    <div className={`${style.aboutContainer} ${mode === 'dark' ? style.dark : ''}`}>
      <p>关于我：喜欢敲文字，喜欢敲代码，喜欢跑步。</p>
    </div>
  )
}

export default About
