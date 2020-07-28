import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {
  Provider
} from 'react-redux'
import {
  createStore
} from 'redux'
import books from './reducers/books';

const initialState = {
  categories: [{
      name: 'Action'
    },
    {
      name: 'Biography'
    },
    {
      name: 'History'
    },
    {
      name: 'Horror'
    },
    {
      name: 'Kids'
    },
    {
      name: 'Learning'
    },
    {
      name: 'Sci-Fi'
    },
  ],
  books: [{
      id: Math.random(),
      title: 'The Hunger Games',
      category: 'Action'
    },
    {
      id: Math.random(),
      title: 'Harry Potter and the Order of the Phoenix',
      category: 'Action'
    },
    {
      id: Math.random(),
      title: 'To Kill a Mockingbird',
      category: 'Action'
    },
    {
      id: Math.random(),
      title: 'Pride and Prejudice',
      category: 'Action'
    },
    {
      id: Math.random(),
      title: 'Twilight',
      category: 'Action'
    }
  ]

}

const store = createStore(initialState, books);

ReactDOM.render( <
  React.StrictMode >
  <
  Provider store = {
    store
  } >
  <
  App / >
  <
  /Provider>, < /
  React.StrictMode > ,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
