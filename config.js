import firebase from 'firebase';

require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyChFd5ac7gV9LVZNyis0gSXy-KMYHsFmoA",
    authDomain: "library-c1d80.firebaseapp.com",
    projectId: "library-c1d80",
    storageBucket: "library-c1d80.appspot.com",
    messagingSenderId: "431659197478",
    appId: "1:431659197478:web:18490e979a8a5fccfd72e7"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
