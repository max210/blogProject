import React from 'react'
import style from './index.module.less'

function Loading() {
  const theme = (localStorage && localStorage.getItem('theme')) || 'light'

  return (
    <div className={`${style.loadingContainer} ${theme === 'dark' ? style.dark : ''}`}>
      <img className={style.loadingImg} src={require('@/common/img/loading.gif')} alt='加载中...' />
    </div>
  )
}

export default Loading
