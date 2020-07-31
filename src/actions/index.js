export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const CREATEBOOK = book => ({
  type: CREATE_BOOK, book,
});

export const REMOVEBOOK = remove => ({
  type: REMOVE_BOOK, remove,
});

export const CHANGEFILTER = filter => ({
  type: CHANGE_FILTER, filter,
});

export default CREATEBOOK;
