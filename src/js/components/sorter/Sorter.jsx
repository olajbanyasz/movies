import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortMovies } from '../../actions/actionCreator';
import { bindActionCreators } from 'redux';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import './sorter.style.less';

class Sorter extends Component {

  changeHandler = (sortby) => {
    this.props.sortMovies(sortby);
  };

  render () {
    return (
      <div className="sorter">
        <span>Sort by</span>
        <ButtonToolbar className='sorter-buttons'>
          <ToggleButtonGroup
           type='radio'
           name='sorter'
           onChange={this.changeHandler}
           defaultValue={this.props.sortby}
           className='sorter-button-group'
          >
            <ToggleButton value={'DATE'} className='sort-by-date'>release date</ToggleButton>
            <ToggleButton value={'RATING'} className='sort-by-rating'>ratings</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </div> 
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      sortMovies
    }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    sortby: state.sortby
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorter);
