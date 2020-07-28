import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './book';

const BooksList = props => {
  const { books } = props;

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

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array),
};

BooksList.defaultProps = {
  books: [],
};

export default connect(mapStateToProps)(BooksList);
