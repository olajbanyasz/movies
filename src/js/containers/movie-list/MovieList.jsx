import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMovie, loadMovies } from '../../actions/actionCreator';
import MovieTile from './../movie-tile/MovieTile.jsx';
import NoFilmsFound from './../../components/no-films-found/NoFilmsFound.jsx';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './movielist.style.less';

class MovieList extends Component {

  componentDidMount () {
    this.props.loadMovies();
  }

  sortMovies = (movies, sortby) => {
    const sortbyProperty = {
      'DATE': 'release_date',
      'RATING': 'vote_average'
    }[sortby];

    const prepareData = (data) => {
      if (sortbyProperty === 'release_date') {
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
    } else if (!this.props.movies || !this.props.movies.length) {
      return (
        <NoFilmsFound />
      );
    } else {
      const sortedMovies = this.sortMovies(this.props.movies, this.props.sortby);
      const movieList = sortedMovies.map((movie) => <Link to={'/film/' + movie.id} key={movie.title}><MovieTile movieDetails={movie}/></Link>);
      return (
        <Router>
          <div className='movie-list'>
            {movieList}
          </div>
        </Router>
      );
    }
  };
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.data,
    sortby: state.sortby,
    isLoading: state.movies.status === 'LOADING'
  };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectMovie,
    loadMovies
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);