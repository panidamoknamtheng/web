//firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth"; 
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
    apiKey: "AIzaSyAQ6Eg6mfztMhW3ZvQ4624WLqxXCe-KcFI",
    authDomain: "project-fee39.firebaseapp.com",
    databaseURL: "https://project-fee39-default-rtdb.firebaseio.com",
    projectId: "project-fee39",
    storageBucket: "project-fee39.appspot.com",
    messagingSenderId: "868707177641",
    appId: "1:868707177641:web:369eec62cc9986d76245b8",
    measurementId: "G-W15MX4Y32Y"
  };


  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export const authentication = getAuth();
  const app = initializeApp(firebaseConfig);


  export { firebase };