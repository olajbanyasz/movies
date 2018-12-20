import { SEARCHBY } from '../actions/actionTypes';
import defaultState from '../default-state/';

function search ( state = defaultState.search, action) {
  switch (action.type) {
    case 'SEARCHBY':
      state = {
        ...state,
        searchby: action.searchby
      };
      return state;
    case'SEARCH_PHRASE_CHANGE':
      state = {
        ...state,
        phrase: action.phrase
      };
      return state;
    default: 
      return state;
  }
}

export default search;