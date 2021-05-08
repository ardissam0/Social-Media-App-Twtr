import firebase from "firebase";
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDVLxNKCoTwthlLkjuAV2AYOjOIwmKnd88",
    authDomain: "social-media-app-7d095.firebaseapp.com",
    databaseURL: "https://social-media-app-7d095.firebaseio.com",
    projectId: "social-media-app-7d095",
    storageBucket: "social-media-app-7d095.appspot.com",
    messagingSenderId: "673734190777",
    appId: "1:673734190777:web:4fd4d3d2a71f3c18af5d68",
    measurementId: "G-J1XC4XEPPL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;