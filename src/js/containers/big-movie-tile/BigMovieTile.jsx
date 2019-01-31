import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MovieTitle from './../../components/movie-title/MovieTitle.jsx';
import MoviePoster from './../../components/movie-poster/MoviePoster.jsx';
import MovieGenre from './../../components/movie-genre/MovieGenre.jsx';
import Description from './../../components/description/Description.jsx';
import RatingsBadge from './../../components/ratings-badge/RatingsBadge.jsx';
import Duration from './../../components/duration/Duration.jsx';
import './bigmovietile.style.less';

class BigMovieTile extends Component {

  componentDidMount () {
    this.props.loadMovie(this.props.movieId);
  }

  getReleaseYear(date) { 
    return date.split('-')[0];
  };
  
  render() {
    const movieDetails = this.props.movieDetails;
    const genres = movieDetails.genres.join(' & ');
    return (
      <div>
        <div className='big-movie-tile'>
          <div className='movie-poster-container'>
            <MoviePoster url={movieDetails.poster_path}/>
          </div>
          <div className='movie-details-container'>
            <div className='pull-right'>
              <Router>
                <Link to={'/'}>
                  <Button className='search-button'>SEARCH</Button>
                </Link> 
              </Router>
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
        <div className='films-by'>
          Films by {capitalize(this.props.searchby)} {this.props.phrase}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchby: state.search.searchby,
    phrase: state.search.lastSearchPhrase,
    movieDetails: state.movies.selectedMovie
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadMovie
  }, dispatch)
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export default connect(mapStateToProps, mapDispatchToProps)(BigMovieTile);