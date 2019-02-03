import React, { Component } from 'react';
import ReleaseDate from './../../components/release-date/ReleaseDate.jsx';
import MovieTitle from './../../components/movie-title/MovieTitle.jsx';
import MoviePoster from './../../components/movie-poster/MoviePoster.jsx';
import MovieGenre from './../../components/movie-genre/MovieGenre.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMovie } from '../../actions/actionCreator';
import './movietile.style.less';

class MovieTile extends Component {

  render() {
    const movieDetails = this.props.movieDetails;
    const genres = movieDetails.genres ? movieDetails.genres.join(' & ') : '';
    return (
      <div className='movie-tile' onClick={() => this.props.selectMovie(movieDetails.id)}>
        <div>
          <MoviePoster url={movieDetails.poster_path}/>
        </div>
        <div className='movie-data-container'>
          <div className='title-row'>
            <MovieTitle title={movieDetails.title}/>
            <ReleaseDate releaseDate={movieDetails.release_date}/>
          </div>
          <MovieGenre genres={genres}/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectMovie
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(MovieTile);