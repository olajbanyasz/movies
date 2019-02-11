import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import './releasedate.style.less';

class ReleaseDate extends Component {
  render() {
    return (
      <div className='release-date'>
        <Badge className='release-date-badge'>
          {this.getReleaseYear(this.props.releaseDate)}
        </Badge>
      </div>
    );
  }
      
  getReleaseYear(date) { 
    return date ? date.split('-')[0] : '';
  }
}

export default ReleaseDate;