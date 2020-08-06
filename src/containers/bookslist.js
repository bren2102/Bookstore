import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVEBOOK, CHANGEFILTER } from '../actions/index';
import CategoryFilter from '../components/categoyfilter';
import Book from '../components/book';
import { db } from '../firebase';

const BooksList = props => {
  const { books, removeBook} = props;
  const [listOfBooks, setBooks] = useState(books);

  useEffect(() => {
    db.child("books").on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let allBooks = {...data};
      let newBooks = Object(allBooks);
      setBooks(newBooks);
    });
  }, []);

  const handleRemoveBook = book => {
    removeBook(book);
  };


  const handleFilterChange = (category = 'All') => {
    let allKeys = Object.keys(listOfBooks);
    let newState = [];
    let prevState = [];

    db.child("books").on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let allBooks = {...data};
      prevState.push(allBooks);
    });

    if (category === 'All') {
      return allKeys;
    } else {
      let filteredKeys = allKeys.filter(key => listOfBooks[key].category === category.target.value);
      filteredKeys.map(key => db.child("books").on('value', querySnapShot => {
        let prevData = querySnapShot.val()[key] ? querySnapShot.val()[key] : {};
        let newData = {...prevData};
        newState.push(newData);
      }));

      if(allKeys.length < Object.keys(prevState[0]).length){
        setBooks(prevState[0]);
      } else {
        setBooks(newState);
      }

      return allKeys;
    }
  };


  return (
    <div id="bookslist">
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table style={{
        width: '100%',
      }}
      >
        <tbody>
          {handleFilterChange().map(key => (
            <tr key={key}>
              <Book
                id={listOfBooks[key].id}
                title={listOfBooks[key].title}
                category={listOfBooks[key].category}
                keyBook={key}
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
  books: state.books
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
