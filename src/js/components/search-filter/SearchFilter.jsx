import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBy } from '../../actions/actionCreator';
import { bindActionCreators } from 'redux';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import './searchfilter.style.less';

class SearchFilter extends Component {

  changeHandler = (searchby) => {
    this.props.searchBy(searchby);
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      searchBy
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchFilter);
