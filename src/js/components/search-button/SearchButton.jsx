import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './searchbutton.style.less';

class SearchButton extends Component {
  render() {
    return (
      <div className='search-button'>
        <Button type='button'>SEARCH</Button>
      </div>
    );
  }
}

export default SearchButton;