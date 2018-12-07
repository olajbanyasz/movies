import React, { Component } from 'react';
import MovieTile from './../movie-tile/MovieTile.jsx';
import './movielist.style.less';

class MovieList extends Component {

  render() {

    if (!this.props.movielist.length) {
      return (
        <div className='no-films-found'>
          <h1>No films found</h1>
        </div>
      );
    }

    const movies = this.props.movielist.map((movie) => <MovieTile movieDetails={movie} key={movie.id}/>);
    return (
      <div>
        {movies}
      </div>
    );
  }
}

export default MovieList;