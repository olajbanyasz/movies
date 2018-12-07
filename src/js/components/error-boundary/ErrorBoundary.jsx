import React, { Component } from 'react';
import './errorboundary.style.less';

class ErrorBoundary extends Component {
  
  state = {
    error: null,
    info: ''
  };

  componentDidCatch(error, info) {
    this.setState({
      error: error,
      info: info
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div className='error-boundary'>
          <h1>Something went wrong!</h1>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;