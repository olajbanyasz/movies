import React, { Component } from 'react';
import MovieTile from './../movie-tile/MovieTile.jsx';

class MovieList extends Component {

  render() {
    const movies = this.props.movielist.map((movie) => <MovieTile movieDetails={movie} key={movie.id}/>);
    return (
      <div>
        {movies}
      </div>
    );
  }
}

export default MovieList;