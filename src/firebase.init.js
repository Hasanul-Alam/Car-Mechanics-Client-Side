// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDo0Nu0lRpIxKdXxwiTn_5lNoG52mljVNk",
  authDomain: "car-mechanics-responsive-site.firebaseapp.com",
  projectId: "car-mechanics-responsive-site",
  storageBucket: "car-mechanics-responsive-site.appspot.com",
  messagingSenderId: "215878350555",
  appId: "1:215878350555:web:ff0a74d9fdb204a6a3fefe",
  measurementId: "G-52FZGKC4XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
