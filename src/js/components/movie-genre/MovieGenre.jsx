import React, { Component } from 'react';
import './moviegenre.style.less';

class MovieGenre extends Component {
  render() {
    return (
      <div className='movie-genre'>
        {this.props.genres}
      </div>
    );
  }
}

export default MovieGenre;