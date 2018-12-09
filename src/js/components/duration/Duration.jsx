import React from 'react';
import './duration.style.less';

const Duration = (props)  => (
  <div className='duration'>
    {props.duration} mins
  </div>
);

export default Duration;