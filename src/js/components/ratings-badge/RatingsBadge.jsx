import React from 'react';
import './ratingsbadge.style.less';

const RatingsBadge = (props)  => (
  <div className='ratings-badge'>
    {props.ratings}
  </div>
);

export default RatingsBadge;