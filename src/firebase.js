import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB7ui41xBfpIHW3kEZMxnce-WDyV4m6stw',
  authDomain: 'bookstore-36ea1.firebaseapp.com',
  databaseURL: 'https://bookstore-36ea1.firebaseio.com',
  projectId: 'bookstore-36ea1',
  storageBucket: 'bookstore-36ea1.appspot.com',
  messagingSenderId: '44707957004',
  appId: '1:44707957004:web:f75230c895edc3bec0e129',
};
firebase.initializeApp(config);
export const db = firebase.database().ref();
export const todosRef = db.child('books');
