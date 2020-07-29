/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import BooksList from '../containers/bookslist';
import BooksForm from '../containers/booksform';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <BooksList />
        <BooksForm />
      </div>
    );
  }
}

export default App;
