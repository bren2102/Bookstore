import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/book';

const BookStore = props => {
  const { bookslist, deleteBook } = props;
  return (
    <div>
      <table style={{
        width: '100%',
      }}
      >
        <tbody>
          {bookslist.map(book => (
            <tr key={book.id}>
              <Book id={book.id} title={book.title} category={book.category} />
              <td>
                <button type="button" onClick={() => { deleteBook(book.id); }}>Remove Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

BookStore.propTypes = {
  bookslist: PropTypes.objectOf(typeof ('array')).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookStore;
