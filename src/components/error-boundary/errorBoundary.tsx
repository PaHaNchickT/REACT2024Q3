import { Component, ErrorInfo, ReactNode } from 'react'

import './errorBoundary.css'

export default class ErrorBoundary extends Component<{ [key: string]: ReactNode }, { [key: string]: boolean }> {
  constructor(props: { [key: string]: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}
