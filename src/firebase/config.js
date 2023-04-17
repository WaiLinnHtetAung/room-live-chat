import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCpJnOcoO2Q0fDQY7g1ixYdPpJ11qN0S-o",
    authDomain: "vue-blog-system-ee209.firebaseapp.com",
    projectId: "vue-blog-system-ee209",
    storageBucket: "vue-blog-system-ee209.appspot.com",
    messagingSenderId: "106043013584",
    appId: "1:106043013584:web:e8a72dbc630d380f9161d5"
  };

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let timestamp = firebase.firestore.FieldVale.serverTimestamp;

export {db, timestamp}