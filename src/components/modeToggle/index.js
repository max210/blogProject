import React, { useContext } from 'react'
import { Theme } from '@/App'
import style from './index.module.less'

const modeList = ['light', 'dark']

function ModelToggle(props) {
  const { changeMode } = props
  const mode = useContext(Theme)

  function toggle() {
    const newMode = modeList.find(item => item !== mode)
    changeMode(newMode)
    localStorage && localStorage.setItem('theme', newMode)
  }

  return (
    <div className={style.toggleContainer} onClick={toggle}>
      <div className={style.icons}>
        <img src={require('@/common/img/moon.png')} alt='夜晚' />
        <img src={require('@/common/img/sun.png')} alt='白天' />
      </div>
      <div className={`${style.btn} ${mode === 'dark' ? style.dark : ''}`}></div>
    </div>
  )
}

export default ModelToggle
