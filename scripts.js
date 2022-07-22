

  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyDs0ISJ0AnzI7Saqvq_xbMHvj42iAlDBqs",

    authDomain: "xhgsaaa.firebaseapp.com",

    projectId: "xhgsaaa",

    storageBucket: "xhgsaaa.appspot.com",

    messagingSenderId: "421328396948",

    appId: "1:421328396948:web:7a782a97f47c17b1e08a81"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

import firebase from "firebase/app";
import "firebase/performance";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};


// Initialize Performance Monitoring and get a reference to the service
const perf = firebase.performance();
