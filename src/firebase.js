import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCSKOKAOeLZkCgl8kEZ0Mg2aXib__iQCPM",
    authDomain: "curd-8bc79.firebaseapp.com",
    projectId: "curd-8bc79",
    storageBucket: "curd-8bc79.appspot.com",
    messagingSenderId: "483454329199",
    appId: "1:483454329199:web:0d03d6c0a2f4d8952cc89a"
  };

  const app = firebase.initializeApp(firebaseConfig)
  export const db = firebase.firestore()