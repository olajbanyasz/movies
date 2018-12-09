import React, { Component } from 'react';
import './movietitle.style.less';

class MovieTitle extends Component {
  render() {
    return (
      <div className='movie-title'>
        {this.props.title}
      </div>
    );
  }
}

export default MovieTitle;