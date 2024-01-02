// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIrKPy8Uv34ysAB-4gRJ1FJrfJPAl70Es",
  authDomain: "login-react-5567c.firebaseapp.com",
  projectId: "login-react-5567c",
  storageBucket: "login-react-5567c.appspot.com",
  messagingSenderId: "801534584105",
  appId: "1:801534584105:web:ef44883ecf0dd2e2960338",
  measurementId: "G-FTDRC34ZJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)