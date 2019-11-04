import React from 'react'
import style from './index.module.less'
import { withRouter } from 'react-router-dom'
import menuConfig from './menuConfig'

function Header(props) {
  const { history } = props

  function goPage(menu) {
    const path = {
      pathname: menu.pathname,
      search: menu.query && menu.query.type && `type=${menu.query.type}`
    }
    history.push(path)
  }

  function goHome() {
    history.push('/')
  }

  return (
    <div className={style.headerContainer}>
      <div className={style.homeBtn} onClick={goHome}>
        <img src={require('@/common/img/home.png')} alt='首页' />
        <p>max's blog</p>
      </div>
      <div className={style.menuContainer}>
        {menuConfig.map(menu => (
          <div className={style.menuItem} onClick={goPage.bind(null, menu)} key={menu.name}>
            <img src={menu.iconSrc} alt={menu.name} />
            <p>{menu.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default withRouter(Header)
