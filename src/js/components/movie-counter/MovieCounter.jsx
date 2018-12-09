import React from 'react';
import './moviecounter.style.less';

const getCounterText = (result) => `${result} ${result === 1 ? 'movie' : 'movies'} found`;

const MovieCounter = React.memo(function MovieCounter(props) {

  return (
    <div className='movie-counter'>
      {getCounterText(props.resultcounter)}
    </div>
  );
  
});

export default MovieCounter;