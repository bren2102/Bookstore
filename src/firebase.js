import * as firebase from 'firebase';

const config = {
  apiKey: 'PASTE YOUR KEY HERE',
  authDomain: 'PASTE YOUR KEY HERE',
  databaseURL: 'PASTE YOUR KEY HERE',
  projectId: 'PASTE YOUR KEY HERE',
  storageBucket: 'PASTE YOUR KEY HERE',
  messagingSenderId: 'PASTE YOUR KEY HERE',
  appId: 'PASTE YOUR KEY HERE',
};
firebase.initializeApp(config);
export const db = firebase.database().ref();
export const todosRef = db.child('books');
