import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import postConfig from '@/postConfig'
import style from './index.module.less'
import { Theme } from '@/App'

function Home() {
  const history = useHistory()
  const mode = useContext(Theme)

  function goPost(post) {
    history.push(`/post/${encodeURIComponent(post.name)}`)
  }

  return (
    <div className={`${style.container} ${mode === 'dark' ? style.dark : ''}`}>
      {postConfig.map(post => (
        <div className={style.post} key={post.name}>
          <p className={style.title} onClick={goPost.bind(null, post)}>{post.name}</p>
          <p className={style.time}>最后更新：{post.time}</p>
        </div>
      ))}
    </div>
  )
}

export default Home
