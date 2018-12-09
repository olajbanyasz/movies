import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import MovieTitle from './../../components/movie-title/MovieTitle.jsx';
import MoviePoster from './../../components/movie-poster/MoviePoster.jsx';
import MovieGenre from './../../components/movie-genre/MovieGenre.jsx';
import Description from './../../components/description/Description.jsx';
import RatingsBadge from './../../components/ratings-badge/RatingsBadge.jsx';
import Duration from './../../components/duration/Duration.jsx';
import './bigmovietile.style.less';

class BigMovieTile extends Component {
  
  getReleaseYear(date) { 
    return date.split('-')[0];
  };
  
  render() {
    const { movieDetails } = this.props;
    const genres = movieDetails.genres.join(' & ');
    return (
      <div className='big-movie-tile'>
        <div className='movie-poster-container'>
          <MoviePoster url={movieDetails.poster_path}/>
        </div>
        <div className='movie-details-container'>
          <div className='pull-right'>
            <Button className='search-button'>SEARCH</Button>
          </div>
          <div className='title-row'>
            <MovieTitle title={movieDetails.title}/>
            <RatingsBadge ratings={movieDetails.vote_average}/>
          </div>

          <MovieGenre genres={genres}/>
          <div className='duration-and-release'>
            <div className='release-date'>{this.getReleaseYear(movieDetails.release_date)}
            </div>
            <Duration duration={movieDetails.runtime}></Duration>
          </div>
          <Description description={movieDetails.overview}/>
        </div>
      </div>
    );
  }
}

export default BigMovieTile;