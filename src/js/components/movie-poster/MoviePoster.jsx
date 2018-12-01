import React, { Component } from 'react';

class MoviePoster extends Component {
  render() {
    return (
      <img src={this.props.url}/>
    );
  }
}

export default MoviePoster;