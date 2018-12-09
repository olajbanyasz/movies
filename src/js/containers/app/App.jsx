import React, { Component } from 'react';
import MovieList from '../movie-list/MovieList.jsx';
import FormContainer from '../form-container/FormContainer.jsx';
import BigMovieTile from '../big-movie-tile/BigMovieTile.jsx';
import Footer from './../../components/footer/Footer.jsx';
import ErrorBoundary from './../../components/error-boundary/ErrorBoundary.jsx';
import './app.style.less'

const movies = require('../../../../__mocks__/movies.js').data;

class App extends Component {

  state = {
    movies: movies,
    searchby: 'TITLE',
    sortby: 'DATE'
  };

  changeHandler = (state) => {
    this.setState(state, () => this.sortMovies());
  }

  sortMovies = () => {
    const sortby = {
      'DATE': 'release_date',
      'RATING': 'vote_average'
    }[this.state.sortby];

    const prepareData = (data) => {
      if (sortby === 'release_date') {
        return data.split('-').join('');
      }
      return data
    };

    return this.state.movies.sort((a,b) => prepareData(a[sortby]) - prepareData(b[sortby]));
  };

  render() {
    return (
      <div className='app'>
        <div>
          <FormContainer
            movies={this.state.movies}
            searchby={this.state.searchby}
            sortby={this.state.sortby}
            changeHandler={this.changeHandler}
          />
        </div>
        <div>
          <BigMovieTile movieDetails={this.sortMovies()[0]}></BigMovieTile>
        </div>
        <div>
           <ErrorBoundary>
             <MovieList movies={this.sortMovies()}/>
           </ErrorBoundary>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;