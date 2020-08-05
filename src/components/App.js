/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BooksList from '../containers/bookslist';
import BooksForm from '../containers/booksform';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <header>
          <div>
            <h1>Bookstore CMS</h1>
            <ul>
              <li>BOOKS</li>
              <li>CATEGORY</li>
            </ul>
          </div>
          <span><FontAwesomeIcon icon={faUser} id="profileImg" /></span>
        </header>
        <BooksList />
        <BooksForm />
      </div>
    );
  }
}

export default App;
