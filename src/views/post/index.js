import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import postConfig from '@/postConfig'
import style from './index.module.less'
import Loading from '@/components/loading'
import { Theme } from '@/App'
import './markdown.css'

function Post() {
  const [markdownSource, setMarkdownSource] = useState('')
  const [postError, setPostError] = useState(false)
  let { name } = useParams()
  const mode = useContext(Theme)
  const postName = decodeURIComponent(name)
  const post = postConfig.find(post => post.name === postName)

  useEffect(() => {
    if (post) {
      import(`@/markdown/${post.type}/${postName}.md`)
        .then(res => setMarkdownSource(res.default)).catch(console.log)
    } else {
      setPostError(true)
    }
  }, [postName, post])

  return (
    <div className={`${style.postContainer} ${mode === 'dark' ? style.dark : ''}`}>
      {postError ? (
        <p className={style.errorInfo}>页面好像出错了~~</p>
      ) : (
          <>
            <div className={style.titleContianer}>
              <p className={style.title}>{postName}</p>
              <p className={style.time}>最后更新：{post && post.time}</p>
            </div>
            <div className={`${style.postContent} markdown-body`}>
              {markdownSource ? <ReactMarkdown source={markdownSource} /> : <Loading />}
            </div>
          </>
        )}
    </div>
  )
}

export default Post
