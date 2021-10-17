import firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp =  {
  apiKey: "AIzaSyDTHwMas2XGLFawaRdKDnqLmg9Qx1zhKQM",
  authDomain: "todo-list-c2030.firebaseapp.com",
  projectId: "todo-list-c2030",
  storageBucket: "todo-list-c2030.appspot.com",
  messagingSenderId: "204388538745",
  appId: "1:204388538745:web:86b684ad3882919b6877a8",
  measurementId: "G-3VF4XGVFY2"
};

const db = firebase.initializeApp(firebaseApp).firestore();

export default db;