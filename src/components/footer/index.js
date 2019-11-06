import React from 'react'
import style from './index.module.less'

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.wechat}>
          <img src={require('@/common/img/wechat.jpg')} alt='1697云开见日' />
          <p>欢迎关注个人公众号～</p>
        </div>
        <p>made by Maximilian</p>
      </div>
    </div>
  )
}

export default Footer
