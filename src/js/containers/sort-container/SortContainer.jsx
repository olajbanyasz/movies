import React, { Component } from 'react';
import Sorter from './../../components/sorter/Sorter.jsx';
import MovieCounter from './../../components/movie-counter/MovieCounter.jsx';
import './sortcontainer.style.less';

class SortContainer extends Component {
  render() {
    return (
      <div className='sort-container'>
        <MovieCounter />
        <Sorter />
      </div>
    );
  };
}

export default SortContainer;