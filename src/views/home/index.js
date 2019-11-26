import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import postConfig from '@/postConfig'
import style from './index.module.less'
import { Theme } from '@/App'
import { handlePostName } from '@/utils'

function Home(props) {
  const { history } = props
  const mode = useContext(Theme)

  function goPost(post) {
    history.push({
      pathname: '/post',
      search: `n=${encodeURIComponent(post.name)}`
    })
  }

  return (
    <div className={`${style.container} ${mode === 'dark' ? style.dark : ''}`}>
      {postConfig.map(post => (
        <div className={style.post} key={post.name}>
          <p className={style.title} onClick={goPost.bind(null, post)}>{handlePostName(post.name)}</p>
          <p className={style.time}>最后更新：{post.time}</p>
        </div>
      ))}
    </div>
  )
}

export default withRouter(Home)
