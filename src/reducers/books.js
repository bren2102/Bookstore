import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

function books(state = [], action) {
  switch (action.type) {
    case REMOVE_BOOK:
    console.log("TEST TEST T")
      return [...state.filter(book => book.id !== action.remove)];
    case CREATE_BOOK:
      return [
        ...state,
        action.book,
      ];
    default:
      return state;
  }
}

export default books;
