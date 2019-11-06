import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import queryString from 'query-string'
import postConfig from '@/postConfig'
import style from './index.module.less'
import { Theme } from '@/App'
import { handlePostName } from '@/utils'

function Post(props) {
  const { name } = queryString.parse(props.history.location.search)
  const [markdownSource, setMarkdownSource] = useState('')

  const mode = useContext(Theme)

  const postNameEqual = post => post.name === name

  useEffect(() => {
    name && import(`@/markdown/${name}.md`).then(res => setMarkdownSource(res.default))
  }, [name])

  return (
    <div className={`${style.postContainer} ${mode === 'dark' ? style.dark : ''}`}>
      <div className={style.titleContianer}>
        <p className={style.title}>{handlePostName(name)}</p>
        <p className={style.time}>最后更新：{postConfig.find(postNameEqual).time}</p>
      </div>
      <div className={style.postContent}>
        <ReactMarkdown source={markdownSource} />
      </div>
    </div>
  )
}

export default withRouter(Post)
