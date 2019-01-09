import React from 'react';
import './ratingsbadge.style.less';

const RatingsBadge = (props)  => (
  <div className='ratings-badge'>
    {props.ratings.toFixed(1)}
  </div>
);

export default RatingsBadge;