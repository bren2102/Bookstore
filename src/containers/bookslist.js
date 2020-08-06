import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVEBOOK, CHANGEFILTER } from '../actions/index';
import CategoryFilter from '../components/categoyfilter';
import Book from '../components/book';

const BooksList = props => {
  const { books, removeBook, checkData} = props;
  const [listOfBooks, setBooks] = useState(books);

  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = (category = 'All') => {
    if (category === 'All') {
      return listOfBooks;
    }
    return setBooks((category.target.value === 'All') ? books : books.filter(book => book.category === category.target.value));
  };
  console.log(checkData);
  return (
    <div id="bookslist">
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table style={{
        width: '100%',
      }}
      >
        <tbody>
          {handleFilterChange().map(book => (
            <tr key={book.id}>
              <Book
                id={book.id}
                title={book.title}
                category={book.category}
                remove={handleRemoveBook}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.books
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(REMOVEBOOK(book));
  },
  categoryFilter: filter => {
    dispatch(CHANGEFILTER(filter));
  },

});

BooksList.propTypes = {
  books: PropTypes.objectOf(typeof ('array')).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
