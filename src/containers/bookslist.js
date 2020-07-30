import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/book';
import { REMOVEBOOK } from '../actions/index';

const BooksList = props => {
  const { books, removeBook } = props;

  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <div id="bookslist">
      <table style={{
        width: '100%',
      }}
      >
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <Book id={book.id} title={book.title} category={book.category} />
              <td>
                <button type="button" onClick={() => { handleRemoveBook(book.id); }}>Remove Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(REMOVEBOOK(book));
  },
});

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
