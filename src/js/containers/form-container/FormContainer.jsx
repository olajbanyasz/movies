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
    searchby: 'TITLE',
  };

  getSorterState = (value) => {
    this.setState({sortby: value}, () => this.props.changeHandler(this.state));
  };

  getSearchbyState = (value) => {
    this.setState({searchby: value}, () => this.props.changeHandler(this.state));
  };

  render() {
    return (
      <div>
        <div className='search-container'>
          <SearchField />
          <div className='filter-bar'>
            <SearchFilter searchby={this.state.searchby} changeHandler={this.getSearchbyState}/>
            <SearchButton />
          </div>
        </div>
        <div className='sort-container'>
          <MovieCounter resultcounter={this.props.movies.length}/>
          <Sorter sortby={this.state.sortby} changeHandler={this.getSorterState}/>
        </div>
      </div>
    );
  };
}

export default FormContainer;