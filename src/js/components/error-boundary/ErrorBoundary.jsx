import React, { Component } from 'react';
import './errorboundary.style.less';

class ErrorBoundary extends Component {
  
  state = {
    error: null
  };

  componentDidCatch(error) {
    this.setState({
      error: error
    });
  }

  render() {
    if (this.state.error || this.props.error) {
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