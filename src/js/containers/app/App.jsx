import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import MovieList from '../movie-list/MovieList.jsx';
import FormContainer from '../form-container/FormContainer.jsx';
import BigMovieTile from '../big-movie-tile/BigMovieTile.jsx';
import Footer from './../../components/footer/Footer.jsx';
import ErrorBoundary from './../../components/error-boundary/ErrorBoundary.jsx';
import { loadMovies } from '../../actions/actionCreator';
import './app.style.less'

class App extends Component {

  state = {
    hasError: null
  };

  componentDidCatch (error) {
    this.setState({
      hasError: error
    });
  };

  async componentDidMount () {
    await this.props.loadMovies();
  };


  sortedMovies = (movies, sortby) => {
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
    return (
      <div className='app'>
        <div>
          <FormContainer
            movies={this.props.movies}
            searchby={this.props.searchby}
            sortby={this.props.sortby}
          />
        </div>
        <div>
           <ErrorBoundary error={this.state.hasError}>
             <MovieList movies={this.sortedMovies(this.props.movies, this.props.sortby)} isLoading={this.props.isLoading} />
           </ErrorBoundary>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      loadMovies
    }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.data,
    searchby: state.search.searchby,
    sortby: state.sortby,
    isLoading: state.movies.state === 'LOAD_MOVIES'
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);