import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyBTJEkFnIBos-QYcG3_mxFfd4-5xNDXp40',
  authDomain: 'todolist-97d95.firebaseapp.com',
  databaseURL: 'https://todolist-97d95.firebaseio.com',
  projectId: 'todolist-97d95',
  storageBucket: 'todolist-97d95.appspot.com',
  messagingSenderId: '276911635533',
  appId: '1:276911635533:web:8608b8ffdfee448b'
});

export { firebaseConfig as firebase };
