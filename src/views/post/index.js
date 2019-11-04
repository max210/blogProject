import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import queryString from 'query-string'
import style from './index.module.less'

function Post(props) {
  const { postName, postTime } = queryString.parse(props.history.location.search)
  const [markdownSource, setMarkdownSource] = useState('')

  useEffect(() => {
    postName && import(`@/markdown/${postName}.md`).then(res => setMarkdownSource(res.default))
  }, [postName])

  return (
    <div className={style.postContainer}>
      <div className={style.titleContianer}>
        <p className={style.title}>{postName}</p>
        <p className={style.time}>{postTime}</p>
      </div>
      <div className={style.postContent}>
        <ReactMarkdown source={markdownSource} />
      </div>
    </div>
  )
}

export default withRouter(Post)
