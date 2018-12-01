import React, { Component } from 'react';

class MovieTitle extends Component {
  render() {
    return (
      <span>
        {this.props.title}
      </span>
    );
  }
}

export default MovieTitle;