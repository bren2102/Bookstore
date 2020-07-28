import { CREATE_BOOK, DELETE_BOOK } from '../actions/index';

import Redux from 'redux';

const initialState = {
  books: []
}

function books(state = initialState, action) {
  switch (action.type) {
    case DELETE_BOOK:
      return Object.assign({}, state, {
        DELETE_BOOK: action.filter
      })
    case CREATE_BOOK:
      return Object.assign({}, state, {
        todos: [
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
