import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Provider,
} from 'react-redux';
import {
  createStore,
} from 'redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import combineReducers from './reducers/index';

const initialState = {
  books: [{
    id: Math.floor(Math.random() * 10) + 1,
    title: 'The Hunger Games',
    category: 'Action',
  },
  {
    id: Math.floor(Math.random() * 20) + 11,
    title: 'Harry Potter and the Order of the Phoenix',
    category: 'Sci-Fi',
  },
  {
    id: Math.floor(Math.random() * 30) + 21,
    title: 'To Kill a Mockingbird',
    category: 'Biography',
  },
  {
    id: Math.floor(Math.random() * 40) + 31,
    title: 'Pride and Prejudice',
    category: 'History',
  },
  {
    id: Math.floor(Math.random() * 50) + 41,
    title: 'Twilight',
    category: 'Kids',
  },
  ],
};

const store = createStore(combineReducers,
  {
    books: initialState.books,
    filter: initialState.books,
  });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
