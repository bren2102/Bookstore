import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVEBOOK, CHANGEFILTER } from '../actions/index';
import CategoryFilter from '../components/categoyfilter';
import Book from '../components/book';
import { db } from '../firebase';

const BooksList = props => {
  const { books, removeBook } = props;
  const [listOfBooks, setBooks] = useState(books);
  const [isFiltered, setFilter] = useState(false);

  useEffect(() => {
    db.child('books').on('value', querySnapShot => {
      const data = querySnapShot.val() ? querySnapShot.val() : {};
      const allBooks = { ...data };
      const newBooks = Object(allBooks);
      setBooks(newBooks);
    });
  }, []);

  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = (category = 'All') => {
    const allKeys = Object.keys(listOfBooks);
    const newState = [];
    const prevState = [];

    db.child('books').on('value', querySnapShot => {
      const data = querySnapShot.val() ? querySnapShot.val() : {};
      const allBooks = { ...data };
      prevState.push(allBooks);
    });

    if (category === 'All') {
      return allKeys;
    }
    const filteredKeys = allKeys.filter(key => listOfBooks[key].category === category.target.value);
    filteredKeys.map(key => db.child('books').on('value', querySnapShot => {
      const prevData = querySnapShot.val()[key] ? querySnapShot.val()[key] : {};
      const newData = { ...prevData };
      newState.push(newData);
    }));

    if (allKeys.length < Object.keys(prevState[0]).length) {
      setBooks(prevState[0]);
      setFilter(false);
    } else {
      setBooks(newState);
      setFilter(true);
    }

    return allKeys;
  };

  function Filtered(state) {
    const { isFiltered } = state;
    if (isFiltered === true) {
      return <button id="cleanButton" type="button" onClick={() => { handleFilterChange({ target: 'All' }); }}>Return</button>;
    }
    return <CategoryFilter handleFilterChange={handleFilterChange} />;
  }

  return (
    <div id="bookslist">
      <Filtered isFiltered={isFiltered} />
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
  books: state.books,
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
