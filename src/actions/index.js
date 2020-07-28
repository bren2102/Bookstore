export const CREATE_BOOK = 'CREATE_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

export function CREATEBOOK(book) {
  return { type: CREATE_BOOK, book };
}

export function DELETEBOOK(book) {
  return { type: DELETE_BOOK, book };
}
