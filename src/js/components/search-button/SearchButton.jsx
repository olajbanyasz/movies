import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMovies } from '../../actions/actionCreator';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import './searchbutton.style.less';

class SearchButton extends Component {
  render() {
    return (
      <div className='search-button'>
        <Button type='button' onClick={this.props.loadMovies}>SEARCH</Button>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      loadMovies
    }, dispatch)
};

export default connect(null, mapDispatchToProps)(SearchButton);
