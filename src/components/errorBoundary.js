// 异步加载组件错误 组件
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return <p>页面好像出错了</p>
    }
    return this.props.children
  }
}

export default withRouter(ErrorBoundary)
