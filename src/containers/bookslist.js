import React,{ useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVEBOOK, CHANGEFILTER } from '../actions/index';
import CategoryFilter from './categoyfilter';
import BookStore from './bookstore';

const BooksList = props => {
  const { books, removeBook} = props;
  const [listOfBooks, setBooks] = useState(books);

  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = (category = "All") => {
    if(category === "All"){
      return listOfBooks;
    }
    console.log(category.target.value);

    return setBooks((category.target.value === 'All') ? books : books.filter(book => book.category === category.target.value));
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
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
