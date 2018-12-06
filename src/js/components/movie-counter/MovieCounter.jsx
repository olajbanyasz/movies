import React, { Component } from 'react';
import './moviecounter.style.less';

class MovieCounter extends Component {
  
  getCounterText (result) {
    return `${result} ${result === 1 ? 'movie' : 'movies'} found`
  }
  
  render() {
    return (
      <div className='movie-counter'>
        {this.getCounterText(this.props.resultcounter)}
      </div>
    );
  }
}

export default MovieCounter;