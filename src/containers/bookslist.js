import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/book';
import { REMOVEBOOK, CHANGEFILTER } from '../actions/index';
import CategoryFilter from './categoyfilter';

const BooksList = props => {
  let { books, removeBook, categoryFilter, filter } = props;
  let newState = books;
  const handleRemoveBook = book => {
    removeBook(book);
  };

  let x = false;

  const handleFilterChange = category => {
    // x = true; 
    // books = [...filter.filter(book => book.category === categoryFilter(category.target.value))];
    // console.log(category.target.value);
    // console.log(books);
    // return x;
    return categoryFilter(category.target.value);
  };


  return (
  console.log(handleFilterChange),

    <div id="bookslist">
      <CategoryFilter handleFilterChange={ handleFilterChange }/>
      <table style={{
        width: '100%',
      }}
      >
        <tbody>
          {newState.map(book => (
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
  filter: state.filter
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
  books: PropTypes.objectOf(PropTypes.array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
