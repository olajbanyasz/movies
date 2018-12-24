import React, { Component } from 'react';
import SearchField from './../../components/search-field/SearchField.jsx';
import SearchFilter from './../../components/search-filter/SearchFilter.jsx';
import SearchButton from './../../components/search-button/SearchButton.jsx';
import Sorter from './../../components/sorter/Sorter.jsx';
import MovieCounter from './../../components/movie-counter/MovieCounter.jsx';
import './formcontainer.style.less';

class FormContainer extends Component {
  render() {
    return (
      <div className='app-header'>
        <div className='search-container'>
          <SearchField />
          <div className='filter-bar'>
            <SearchFilter searchby={this.props.searchby} />
            <SearchButton />
          </div>
        </div>
        <div className='sort-container'>
          <MovieCounter resultcounter={this.props.movies.length}/>
          <Sorter sortby={this.props.sortby} />
        </div>
      </div>
    );
  };
}

export default FormContainer;