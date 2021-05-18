import firebase from 'firebase';
require("@firebase/firestore")

 var firebaseConfig = {
    apiKey: "AIzaSyCJQYcYXkymE96hcSn97TcX8JC6y_8x-b0",
    authDomain: "quiet-liberty-309007.firebaseapp.com",
    projectId: "quiet-liberty-309007",
    storageBucket: "quiet-liberty-309007.appspot.com",
    messagingSenderId: "777392928428",
    appId: "1:777392928428:web:bbf28498b5a7562fced109"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore();