import React, { Component } from 'react';
import ReleaseDate from './../../components/release-date/ReleaseDate.jsx';
import MovieTitle from './../../components/movie-title/MovieTitle.jsx';
import MoviePoster from './../../components/movie-poster/MoviePoster.jsx';
import './movie.style.less';

class MovieTile extends Component {
  render() {
    const movieDetails = this.props.movieDetails;
    return (
      <div className='movie-tile'>
        <MoviePoster url={movieDetails.poster_path}/>
        <p>
          <MovieTitle title={movieDetails.title}/>
          <ReleaseDate releaseDate={movieDetails.release_date}/>
        </p>
      </div>
    );
  }
}

export default MovieTile;