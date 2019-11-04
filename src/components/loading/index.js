import React from 'react'
import style from './index.module.less'

function Loading() {
  return (
    <div className={style.loadingContainer}>
      <img className={style.loadingImg} src={require('@/common/img/loading.gif')} alt='加载中...' />
    </div>
  )
}

export default Loading
