export const CREATE_BOOK = 'CREATE_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

export const CREATEBOOK = book => ({
  type: CREATE_BOOK, book
})

export const DELETEBOOK = book => ({
  type: DELETE_BOOK, book
})

export default CREATEBOOK;
