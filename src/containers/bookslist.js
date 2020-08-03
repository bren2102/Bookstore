import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVEBOOK, CHANGEFILTER } from '../actions/index';
import CategoryFilter from './categoyfilter';
import BookStore from './bookstore';

const BooksList = props => {
  const { books, removeBook, categoryFilter, filter} = props;
  const [listOfBooks, setBooks] = useState(filter);

  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = (category = "All") => {
    if(category === "All"){
      return listOfBooks;
    }
    categoryFilter(category.target.value);
    console.log(filter);

    return setBooks(filter);
  };

  return (
    <div id="bookslist">
      <CategoryFilter handleFilterChange={ handleFilterChange }/>
      <BookStore bookslist={ handleFilterChange() } deleteBook={ handleRemoveBook }/>
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
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
