import React, { Component } from 'react';
import './movieposter.style.less';

class MoviePoster extends Component {
  render() {
    return (
      <img src={this.props.url} className="movie-poster"/>
    );
  }
}

export default MoviePoster;