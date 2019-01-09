import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { searchPhraseChange } from '../../actions/actionCreator';
import { bindActionCreators } from 'redux';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './searchfield.style.less';

class SearchField extends Component {

  handleChange = (event) => {
    this.props.searchPhraseChange(event.target.value);
  }

  render () {
    return (
      <form>
        <FormGroup controlId = 'formBasicText'>
          <ControlLabel className='movie-search-label'>FIND YOUR MOVIE</ControlLabel>
          <FormControl
            className = 'movie-search-field'
            type = 'text'
            placeholder = { this.props.lastSearchPhrase || 'What are you looking for?' }
            onChange = {this.handleChange}
          />
        </FormGroup>
      </form>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      searchPhraseChange
    }, dispatch)
};

const mapStateToProps = (state) => {
  return {
    phrase: state.search.phrase,
    lastSearchPhrase: state.search.lastSearchPhrase
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
