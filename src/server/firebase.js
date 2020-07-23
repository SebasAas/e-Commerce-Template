/* eslint-disable linebreak-style */
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAeechUZ7f_Izt-adm7C2VU9G1yu_HZOnM',
  authDomain: 'e-commerce-sitio.firebaseapp.com',
  databaseURL: 'https://e-commerce-sitio.firebaseio.com',
  projectId: 'e-commerce-sitio',
  storageBucket: 'e-commerce-sitio.appspot.com',
  messagingSenderId: '418370788241',
  appId: '1:418370788241:web:e66c674f39933b55785830',
  measurementId: 'G-4WD24DBFSX',
});

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
