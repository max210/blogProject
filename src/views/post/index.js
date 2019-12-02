import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import queryString from 'query-string'
import postConfig from '@/postConfig'
import style from './index.module.less'
import Loading from '@/components/loading'
import { Theme } from '@/App'
import { handlePostName } from '@/utils'
import './markdown.css'

function Post(props) {
  const [markdownSource, setMarkdownSource] = useState('')
  const { n } = queryString.parse(props.history.location.search)
  const mode = useContext(Theme)
  const postName = decodeURIComponent(n)
  const post = postConfig.find(post => post.name === postName)

  useEffect(() => {
    post && import(`@/markdown/${postName}.md`).then(res => setMarkdownSource(res.default))
  }, [postName, post])

  return (
    <div className={`${style.postContainer} ${mode === 'dark' ? style.dark : ''}`}>
      {markdownSource ? (
        <>
          <div className={style.titleContianer}>
            <p className={style.title}>{handlePostName(postName)}</p>
            <p className={style.time}>最后更新：{post && post.time}</p>
          </div>
          <div className={`${style.postContent} markdown-body`}>
            {markdownSource ? <ReactMarkdown source={markdownSource} /> : <Loading />}
          </div>
        </>
      ) : (
        <p className={style.errorInfo}>页面好像出错了~~</p>
      )}
    </div>
  )
}

export default withRouter(Post)
