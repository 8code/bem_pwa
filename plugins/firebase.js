import firebase from 'firebase/app'
import 'firebase/firestore'

export default ({ env, store }, inject) => {
  const firebaseConfig = {
    apiKey: "AIzaSyDMdSD5HDPkbBa_dKoTGrY5Lj-0da4ksZo",
    authDomain: "aplikasi-maba.firebaseapp.com",
    databaseURL: "https://aplikasi-maba.firebaseio.com",
    projectId: "aplikasi-maba",
    storageBucket: "aplikasi-maba.appspot.com",
    messagingSenderId: "235964714752",
    appId: "1:235964714752:web:ed188a7914ee5f232f2de5",
    measurementId: "G-PXHVCJ8ZV7"
  }

  if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
  }

  inject('firebase', firebase)
}