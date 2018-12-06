import React, { Component } from 'react';
import MovieList from '../movie-list/MovieList.jsx';
import FormContainer from '../form-container/FormContainer.jsx';
import Footer from './../../components/footer/Footer.jsx';
import './app.style.less'

const movies = require('../../../../__mocks__/movies.js').data;

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <FormContainer />
        </div>
        <div>
          <MovieList movielist={movies}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;