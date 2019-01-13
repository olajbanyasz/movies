import React from 'react';
import { connect } from 'react-redux';
import './moviecounter.style.less';

const getCounterText = (result) => `${result} ${result === 1 ? 'movie' : 'movies'} found`;

function MovieCounter(props) {
  return (
    <div className='movie-counter'>
      {getCounterText(props.resultcounter)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    resultcounter: state.movies.data.length
  };
};

export default connect(mapStateToProps, null)(MovieCounter);