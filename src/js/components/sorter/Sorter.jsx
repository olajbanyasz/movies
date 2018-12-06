import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import './sorter.style.less';

class Sorter extends Component {

  render () {
    return (
      <div className="sorter">
        <span>Sort by</span>
        <ButtonToolbar className='sorter-buttons'>
          <ToggleButtonGroup type="radio" name='sorter' defaultValue={'DATE'}>
            <ToggleButton value={'DATE'} className='sort-by-date'>release date</ToggleButton>
            <ToggleButton value={'RATING'} className='sort-by-rating'>ratings</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </div> 
    );
  }
}

export default Sorter;