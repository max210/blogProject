// 异步加载组件错误 组件
import React, { Component } from 'react'

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

  componentDidCatch(error, info) {}

  render() {
    if (this.state.hasError) {
      return <p style={{ textAlign: 'center', fontSize: '20px', marginTop: '50px'}}>页面好像出错了~</p>
    }
    return this.props.children
  }
}

export default ErrorBoundary
