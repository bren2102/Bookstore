export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const CREATEBOOK = book => ({
  type: CREATE_BOOK, book
})

export const REMOVEBOOK = remove => ({
  type: REMOVE_BOOK, remove
})

export default CREATEBOOK;
