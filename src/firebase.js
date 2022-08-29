
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCTVNc-Z2d-20NeqQlEMMqZZcHOE5su3AU",
    authDomain: "bikes2.firebaseapp.com",
    projectId: "bikes2",
    storageBucket: "bikes2.appspot.com",
    messagingSenderId: "539832405812",
    appId: "1:539832405812:web:64b84cf8e1f93e92001f61"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const auth= firebase.auth()

  export {auth}