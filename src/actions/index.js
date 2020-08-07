/* eslint-disable no-unused-vars */
import { todosRef } from '../firebase';

export const CREATE_BOOK = 'CREATE_BOOK';

export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const CREATEBOOK = book => async dispatch => {
  todosRef.push().set(book);
};

export const REMOVEBOOK = remove => async dispatch => {
  todosRef.child(remove).remove();
};

export const CHANGEFILTER = filter => ({
  type: CHANGE_FILTER, filter,
});

export default CREATEBOOK;
