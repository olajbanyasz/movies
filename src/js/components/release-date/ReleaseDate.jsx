import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import './releasedate.style.less';

class ReleaseDate extends Component {
  render() {
    return (
      <Badge className='release-date'>
        {this.getReleaseYear(this.props.releaseDate)}
      </Badge>
    );
  }
      
  getReleaseYear(date) { 
    return date.split('-')[0];
  }
}

export default ReleaseDate;