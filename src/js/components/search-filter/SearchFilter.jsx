import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import './searchfilter.style.less';

class SearchFilter extends Component {

  render () {
    return (
      <div className="search-filter">
        <span>SEARCH BY</span>
        <ButtonToolbar className='search-filter-buttons'>
          <ToggleButtonGroup type="radio" name='searchfilter' defaultValue={'TITLE'}>
            <ToggleButton value={'TITLE'} className='search-by-title'>TITLE</ToggleButton>
            <ToggleButton value={'GENRE'} className='search-by-genre'>GENRE</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </div> 
    );
  }
}

export default SearchFilter;