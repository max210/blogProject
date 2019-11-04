import React from 'react'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import postConfig from '@/postConfig'
import style from './index.module.less'

const thoughtInfo = '【想法】 inner peace'
const techInfo = '【技术】 不断重复、不断总结'

function Label(props) {
  const { history } = props
  const { type } = queryString.parse(history.location.search)

  function goPost(post) {
    history.push({
      pathname: '/post',
      search: `postName=${post.name}&postTime=${post.time}`
    })
  }

  function getTypePost(post) {
    return type === post.type
  }

  return (
    <div className={style.container}>
      <div className={style.info}>{type === 'thought' ? thoughtInfo : techInfo}</div>
      {postConfig.filter(getTypePost).map(post => (
        <div className={style.post} onClick={goPost.bind(null, post)} key={post.name}>
          <p className={style.title}>{post.name}</p>
          <p className={style.time}>{post.time}</p>
        </div>
      ))}
    </div>
  )
}

export default withRouter(Label)
