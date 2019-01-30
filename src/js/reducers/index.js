import { combineReducers } from 'redux';
import sortby from './sortby';
import movies from './movies';
import search from './search';

export default combineReducers({ sortby, movies, search });
