import React from 'react';
import BooksList from './bookslist';
import BooksForm from './booksform';

class App extends React.Component {
  render () {
    return (
      <div id="App">
        < BooksList />
        < BooksForm />
      </div>
    );
  }
}

export default App;