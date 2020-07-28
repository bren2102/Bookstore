import { CREATE_BOOK, DELETE_BOOK } from '../actions/index';

function books(state = [], action) {
  switch (action.type) {
    case DELETE_BOOK:
      return Object.assign({}, state, {
        DELETE_BOOK: action.filter
      })
    case CREATE_BOOK:
      return Object.assign({}, state, {
        books: [
          ...state.books,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    default:
      return state
  }
}

export default books;
