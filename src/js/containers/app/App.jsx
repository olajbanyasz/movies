import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieList from '../movie-list/MovieList.jsx';
import FormContainer from '../form-container/FormContainer.jsx';
import SortContainer from '../sort-container/SortContainer.jsx';
import BigMovieTile from '../big-movie-tile/BigMovieTile.jsx';
import Footer from './../../components/footer/Footer.jsx';
import ErrorBoundary from './../../components/error-boundary/ErrorBoundary.jsx';
import PageNotFound from './../../components/page-not-found/PageNotFound.jsx';
import NoFilmsFound from './../../components/no-films-found/NoFilmsFound.jsx';
import IsMoviesLoaded from './../../selectors/is-movies-loaded';
import IsMovieLoaded from './../../selectors/is-selected-movie-loaded';
import IsMoviesLoading from './../../selectors/is-movies-loading';
import IsMovieLoadFailed from './../../selectors/is-selected-movie-load-failed';
import { resetStore, selectMovie, loadMovies, loadOneMovie, searchPhraseChange, persistLastSearchPhrase } from '../../actions/actionCreator';
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

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Switch>

              <Route exact path='/' render={() => {
                this.props.resetStore();
                return <Redirect to='/home' />
                }}
              />

              <Route exact path='/home' render={() => {
                if (this.props.isLoadingSuccess) {
                  const link = '/search/' + this.props.lastSearchPhrase;
                  return <Redirect to={link} />
                }
                return (
                  <div>
                    <FormContainer
                      searchby={this.props.searchby}
                    />
                    <NoFilmsFound />
                  </div>
                )}}
              />

              <Route path='/search/:query' render={(props) => {
                const searchPhrase = props.match.params.query;
                if (searchPhrase !== this.props.lastSearchPhrase) {
                  this.props.persistLastSearchPhrase(searchPhrase);
                  this.props.loadMovies();
                }
                if (!this.props.isSelectedMovieLoadFailed && this.props.selectedMovieId) {
                  this.props.loadOneMovie(this.props.selectedMovieId);
                }
                if (this.props.isSelectedMovieLoaded && this.props.selectedMovieId) {
                  const link = '/film/' + this.props.selectedMovieId;
                  return <Redirect to={link} />
                }
                return (
                  <div>
                    <FormContainer searchby={this.props.searchby} />
                    <SortContainer sortby={this.props.sortby} />
                    <MovieList movies={this.props.movies}/>
                  </div>
                )}}
              />

              <Route path='/film/:id' render={(props) => {
                if (props.match.params.id != this.props.selectedMovieId) {
                  this.props.selectMovie(props.match.params.id);
                  this.props.loadOneMovie(props.match.params.id);
                }
                if (this.props.isSelectedMovieLoadFailed) {
                  return <Redirect to='/' />
                }
                return (
                  <div>
                    <BigMovieTile />
                    <MovieList movies={this.props.movies}/>
                  </div>
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
    loadOneMovie,
    searchPhraseChange,
    persistLastSearchPhrase
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.data,
    loadingStatus: state.movies.status,
    searchby: state.search.searchby,
    sortby: state.sortby,
    isLoading: IsMoviesLoading(state),
    isLoadingSuccess: IsMoviesLoaded(state),
    isSelectedMovieLoaded: IsMovieLoaded(state),
    isSelectedMovieLoadFailed: IsMovieLoadFailed(state),
    selectedMovieId: state.movies.selectedMovie,
    lastSearchPhrase: state.search.lastSearchPhrase,
    phrase: state.search.phrase
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);