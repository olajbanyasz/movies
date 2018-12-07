import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import './sorter.style.less';

class Sorter extends Component {

  state = {
    sortby: this.props.sortby
  };

  clickHandler = () => {
    if (event.target.value) {
      this.setState({sortby: event.target.value});
      this.props.changeHandler(this.state);
    }
  }

  render () {
    return (
      <div className="sorter" onClick={this.clickHandler}>
        <span>Sort by</span>
        <ButtonToolbar className='sorter-buttons'>
          <ToggleButtonGroup type="radio" name='sorter' defaultValue={this.state.sortby} >
            <ToggleButton value={'DATE'} className='sort-by-date'>release date</ToggleButton>
            <ToggleButton value={'RATING'} className='sort-by-rating'>ratings</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </div> 
    );
  }
}

export default Sorter;