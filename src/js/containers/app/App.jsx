import React, { Component } from 'react';
import MovieList from '../movie-list/MovieList.jsx';
const movies = require('../../../../mocks/movies.js').data;

class App extends Component {
  render() {
    return (
      <div>
        <MovieList movielist={movies}/>
      </div>
    );
  }
}

export default App;