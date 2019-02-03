import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMovie } from '../../actions/actionCreator';
import MovieTile from './../movie-tile/MovieTile.jsx';
import NoFilmsFound from './../../components/no-films-found/NoFilmsFound.jsx';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './movielist.style.less';

class MovieList extends Component {

  sortMovies = (movies, sortby) => {
    const sortbyProperty = {
      'DATE': 'release_date',
      'RATING': 'vote_average'
    }[sortby];

    const prepareData = (data) => {
      if (sortbyProperty === 'release_date') {
        data = data || '';
        return data.split('-').join('');
      }
      return data
    };

    return movies.sort((a,b) => prepareData(b[sortbyProperty]) - prepareData(a[sortbyProperty]));
  };

  render() {

    if (this.props.isLoading) {
      return (
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      );
    }
    if (!this.props.movies.length) {
      return (
        <NoFilmsFound />
      );
    }
    const sortedMovies = this.sortMovies(this.props.movies, this.props.sortby);
    const movieList = sortedMovies.map((movie, index) => {
      return (
          <MovieTile  movieDetails={movie} key={index}/>
      )});
    return (
      <Router>
        <div className='movie-list'>
          {movieList}
        </div>
      </Router>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    sortby: state.sortby,
    isLoading: state.movies.status === 'LOADING'
  };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectMovie
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);