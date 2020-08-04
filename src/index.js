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

let setId = Math.floor(Math.random() * 100);

const initialState = {
  books: [{
    id: setId += 5,
    title: 'The Hunger Games',
    category: 'Action',
  },
  {
    id: setId += 5,
    title: 'Harry Potter and the Order of the Phoenix',
    category: 'Sci-Fi',
  },
  {
    id: setId += 5,
    title: 'To Kill a Mockingbird',
    category: 'Biography',
  },
  {
    id: setId += 5,
    title: 'Pride and Prejudice',
    category: 'History',
  },
  {
    id: setId += 5,
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
