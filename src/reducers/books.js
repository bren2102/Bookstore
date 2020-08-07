import { CREATE_BOOK } from '../actions/index';

function books(state = [], action) {
  switch (action.type) {
    // case REMOVE_BOOK:
    //   return [...state.filter(book => book.id !== action.remove)];
    case CREATE_BOOK:
      return action.payload;
    default:
      return state;
  }
}

export default books;
