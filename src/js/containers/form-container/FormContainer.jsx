import React, { Component } from 'react';
import SearchField from './../../components/search-field/SearchField.jsx';
import SearchFilter from './../../components/search-filter/SearchFilter.jsx';
import SearchButton from './../../components/search-button/SearchButton.jsx';
import Sorter from './../../components/sorter/Sorter.jsx';
import MovieCounter from './../../components/movie-counter/MovieCounter.jsx';
import './formcontainer.style.less';

class FormContainer extends Component {

  state = {
    sortby: 'DATE',
    searchby: 'TITLE'
  };

  getSorterState = (value) => {
    console.log('value', value);
    return value;
  };

  render() {
    const movielist = this.props.movielist;
    return (
      <div>
        <div className='search-container'>
          <SearchField />
          <div className='filter-bar'>
            <SearchFilter searchby={this.state.searchby}/>
            <SearchButton />
          </div>
        </div>
        <div className='sort-container'>
          <MovieCounter resultcounter={movielist.length}/>
          <Sorter sortby={this.state.sortby} changeHandler={this.getSorterState}/>
        </div>
      </div>
    );
  };
}

export default FormContainer;