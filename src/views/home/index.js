import React from 'react'
import { withRouter } from 'react-router-dom'
import postConfig from '@/postConfig'
import style from './index.module.less'

function Home(props) {
  const { history } = props

  function goPost(post) {
    history.push({
      pathname: '/post',
      search: `postName=${post.name}&postTime=${post.time}`
    })
  }

  return (
    <div className={style.container}>
      {postConfig.map(post => (
        <div className={style.post} key={post.name}>
          <p className={style.title} onClick={goPost.bind(null, post)}>{post.name}</p>
          <p className={style.time}>{post.time}</p>
        </div>
      ))}
    </div>
  )
}

export default withRouter(Home)
