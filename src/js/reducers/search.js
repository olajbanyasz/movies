import SEARCHBY from '../actions/actionTypes';
import defaultState from '../default-state/';

function search ( state = defaultState.search, action) {
  switch (action.type) {
    case 'SEARCHBY':
      return {
        ...state,
        searchby: action.searchby
      };
    case 'SEARCH_PHRASE_CHANGE':
      return {
        ...state,
        phrase: action.phrase
      };
    case 'PERSIST_LAST_SEARCH_PHRASE': {
      return {
        ...state,
        lastSearchPhrase: action.lastSearchPhrase
      }
    }
    case 'RESET_STORE':
      return {
        ...state,
        lastSearchPhrase: ''
      };
    default: 
      return state;
  }
}

export default search;