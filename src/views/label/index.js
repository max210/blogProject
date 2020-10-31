import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import queryString from 'query-string'
import postConfig from '@/postConfig'
import { Theme } from '@/App'
import style from './index.module.less'

const thoughtInfo = 'Inner Peace'
const techInfo = '不断重复、不断总结'

function Label(props) {
  const history = useHistory()
  const mode = useContext(Theme)
  const { type } = queryString.parse(history.location.search)

  function goPost(post) {
    history.push(`/post/${encodeURIComponent(post.name)}`)
  }

  function getTypePost(post) {
    return type === post.type
  }

  return (
    <div className={`${style.container} ${mode === 'dark' ? style.dark : ''}`}>
      <div className={style.info}>{type === 'thinking' ? thoughtInfo : techInfo}</div>
      {postConfig.filter(getTypePost).map(post => (
        <div className={style.post} onClick={goPost.bind(null, post)} key={post.name}>
          <p className={style.title}>{post.name}</p>
          <p className={style.time}>最后更新：{post.time}</p>
        </div>
      ))}
    </div>
  )
}

export default Label
