import React, { Component } from 'react';
import MovieTile from './../movie-tile/MovieTile.jsx';
import './movielist.style.less';

class MovieList extends Component {

  render() {

    if (!this.props.movies.length) {
      return (
        <div className='no-films-found'>
          <h1>No films found</h1>
        </div>
      );
    }

    const movies = this.props.movies.map((movie) => <MovieTile movieDetails={movie} key={movie.id}/>);
    return (
      <div className='movie-list'>
        {movies}
      </div>
    );
  }
}

export default MovieList;