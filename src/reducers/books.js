import { CREATEBOOK, DELETEBOOK } from '../actions/index';

function books(state = [], action) {
  switch (action.type) {
    case DELETEBOOK:
      return { ...state, DELETE_BOOK: action.filter };
    case CREATEBOOK:
      return [
        ...state,
        action.book,
      ];
    default:
      return state;
  }
}

export default books;
