import { CHANGE_FILTER } from '../actions/index';
import books from './books';

function filter(state = [], action) {
  switch (action.type) {
    case CHANGE_FILTER:
      if(action.filter === 'ALL'){
        return state;
      } else {
        return [...state.filter(book => book.category === action.filter)];
      }
    default:
      return state;
  }
}

export default filter;
