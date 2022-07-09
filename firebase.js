import  firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAawMnC6vfUa40ZNFsLN-ov7Pa4DjcUrM",

  authDomain: "dotdelivery-fbd89.firebaseapp.com",

  databaseURL: "https://dotdelivery-fbd89-default-rtdb.firebaseio.com",

  projectId: "dotdelivery-fbd89",

  storageBucket: "dotdelivery-fbd89.appspot.com",

  messagingSenderId: "612704185157",

  appId: "1:612704185157:web:11398ea2f7c7e27b532c2c",

  measurementId: "G-70L8BS287Y"

};

  let app;
  if(firebase.apps.length === 0){
      app = firebase.initializeApp(firebaseConfig)
  }else{
    app = firebase.app();
  }

const db = app.firestore();
const auth = firebase.auth();

export {db, auth }