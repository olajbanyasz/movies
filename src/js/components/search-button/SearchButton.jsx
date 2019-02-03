import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMovies, persistLastSearchPhrase } from '../../actions/actionCreator';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import './searchbutton.style.less';

class SearchButton extends Component {
  clickHandler = () => {
    this.props.persistLastSearchPhrase(this.props.phrase);
    this.props.loadMovies();
  };

  render() {
    return (
      <div className='search-button'>
        <Button type='button' onClick={this.clickHandler}>SEARCH</Button>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      loadMovies, persistLastSearchPhrase
    }, dispatch)
};

const mapStateToProps = (state) => {
  return {
    phrase: state.search.phrase,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
