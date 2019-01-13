import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import MovieList from '../movie-list/MovieList.jsx';
import FormContainer from '../form-container/FormContainer.jsx';
import BigMovieTile from '../big-movie-tile/BigMovieTile.jsx';
import Footer from './../../components/footer/Footer.jsx';
import ErrorBoundary from './../../components/error-boundary/ErrorBoundary.jsx';
import PageNotFound from './../../components/page-not-found/PageNotFound.jsx';
import NoFilmsFound from './../../components/no-films-found/NoFilmsFound.jsx';
import { resetStore, selectMovie, loadMovies, searchPhraseChange, persistLastSearchPhrase } from '../../actions/actionCreator';
import './app.style.less'

export class App extends Component {

  state = {
    hasError: null
  };

  componentDidCatch (error) {
    this.setState({
      hasError: error
    });
  };

  getSelectedMovie = (movies, selectedId) => {
    return movies.filter(movie => movie.id === Number(selectedId))[0];
  };

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Switch>

              <Route exact path='/' render={() => {
                this.props.resetStore();
                return (
                  <div>
                    <FormContainer
                      movies={this.props.movies}
                      searchby={this.props.searchby}
                      sortby={this.props.sortby}
                    />
                    <NoFilmsFound />
                  </div>
                )}}
              />

              <Route path='/search/:query' render={(props) => {
                const searchPhrase = props.match.params.query;

                if (this.props.lastSearchPhrase !== searchPhrase) {
                  this.props.searchPhraseChange(searchPhrase);
                  this.props.persistLastSearchPhrase(searchPhrase);
                  this.props.loadMovies();
                }

                return (
                  <div>
                    <FormContainer
                      movies={this.props.movies}
                      searchby={this.props.searchby}
                      sortby={this.props.sortby}
                    />
                    <ErrorBoundary error={this.state.hasError}>
                      <MovieList />
                    </ErrorBoundary>
                  </div>
                )}}
              />

              <Route path='/film/:id' render={(props) => {
                const selectedMovie = this.getSelectedMovie(this.props.movies, props.match.params.id);
                this.props.selectMovie(selectedMovie);
                return (
                  <ErrorBoundary error={this.state.hasError}>
                    <BigMovieTile />
                    <MovieList />
                  </ErrorBoundary>
                )}}
              />

              <Route component={PageNotFound} />

            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    resetStore,
    selectMovie,
    loadMovies,
    searchPhraseChange,
    persistLastSearchPhrase
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.data,
    searchby: state.search.searchby,
    sortby: state.sortby,
    isLoading: state.movies.status === 'LOADING',
    lastSearchPhrase: state.search.lastSearchPhrase,
    phrase: state.search.phrase
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);