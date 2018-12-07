import React, { Component } from 'react';
import MovieList from '../movie-list/MovieList.jsx';
import FormContainer from '../form-container/FormContainer.jsx';
import Footer from './../../components/footer/Footer.jsx';
import ErrorBoundary from './../../components/error-boundary/ErrorBoundary.jsx';
import './app.style.less'

const movies = require('../../../../__mocks__/movies.js').data;

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <FormContainer movielist={movies}/>
        </div>
        <div>
           <ErrorBoundary>
             <MovieList movielist={movies}/>
           </ErrorBoundary>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;