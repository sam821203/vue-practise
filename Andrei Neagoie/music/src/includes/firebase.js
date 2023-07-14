import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5YhTtZoaYmXsojwm7NRIOG95q9jBsoMI",
  authDomain: "music-app-e5a19.firebaseapp.com",
  projectId: "music-app-e5a19",
  storageBucket: "music-app-e5a19.appspot.com",
  appId: "1:540269698556:web:ac2baa261faed46ec3a679"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const userCollection = db.collection('users');

export {
  auth,
  db,
  userCollection
}