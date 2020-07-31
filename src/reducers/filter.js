import { CHANGE_FILTER } from '../actions/index';
import books from './books';

function filter(state = [], action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default filter;
