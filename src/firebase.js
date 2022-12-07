import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDD-wxR9leSA7w9z4nvs8BkyIXnGxXCtLY",
  authDomain: "livestream-unichat.firebaseapp.com",
  projectId: "livestream-unichat",
  storageBucket: "livestream-unichat.appspot.com",
  messagingSenderId: "848137294150",
  appId: "1:848137294150:web:cd023f714fe23fe275d547"
}).auth()
