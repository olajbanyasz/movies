import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import './searchfilter.style.less';

class SearchFilter extends Component {

  state = {
    searchby: null
  }

  changeHandler = (searchby) => {
    if (searchby !== this.state.searchby) {
      this.setState({searchby});
      this.props.changeHandler(searchby);
    }
  };

  render () {
    return (
      <div className="search-filter">
        <span>SEARCH BY</span>
        <ButtonToolbar className='search-filter-buttons'>
          <ToggleButtonGroup
            type="radio"
            name='searchfilter'
            defaultValue={this.props.searchby}
            onChange={this.changeHandler}
          >
            <ToggleButton value={'TITLE'} className='search-by-title'>TITLE</ToggleButton>
            <ToggleButton value={'GENRE'} className='search-by-genre'>GENRE</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </div> 
    );
  }
}

export default SearchFilter;