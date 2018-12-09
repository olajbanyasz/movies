import React from 'react';
import './description.style.less';

const Description = (props)  => (
  <div className='movie-description'>
    <div className='movie-description-text'>
      {props.description}
    </div>
  </div>
);

export default Description;