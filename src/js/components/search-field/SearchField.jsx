import React, { Component } from 'react';
import { render } from 'react-dom';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './searchfield.style.less';

class SearchField extends Component {

  state = {
    value: ''
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render () {
    return (
      <form>
        <FormGroup controlId = 'formBasicText'>
          <ControlLabel className='movie-search-label'>FIND YOUR MOVIE</ControlLabel>
          <FormControl
            className = 'movie-search-field'
            type = 'text'
            value = {this.state.value}
            placeholder = 'What are you looking for?'
            onChange = {this.handleChange}
          />
        </FormGroup>
      </form>
    );
  }
}

export default SearchField;