import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Provider,
} from 'react-redux';
import reduxThunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import combineReducers from './reducers/index';

const initialState = {
  books: [
    {
      id: 0,
      title: 'You have not added a book yet',
      category: 'This is a category',
    },
  ],
};

const store = createStore(combineReducers,
  { books: initialState.books },
  applyMiddleware(reduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
