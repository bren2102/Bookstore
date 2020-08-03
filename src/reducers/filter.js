import { CHANGE_FILTER } from '../actions/index';

function filter(state = [], action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return [...state.filter(book => book.category === action.filter)];
      // (action.filter === 'All') ? [...state] :
    default:
      return state;
  }
}

export default filter;
