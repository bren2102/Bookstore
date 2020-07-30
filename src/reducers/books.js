import { CREATE_BOOK, DELETE_BOOK } from '../actions/index';

function books(state = [], action) {
  switch (action.type) {
    case DELETE_BOOK:
      return { ...state, DELETE_BOOK: action.filter };
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
