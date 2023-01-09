// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpBe57bWdWmkVhMj4PzC2bHuso8OwJlUk",
  authDomain: "howtomoney-10e01.firebaseapp.com",
  projectId: "howtomoney-10e01",
  storageBucket: "howtomoney-10e01.appspot.com",
  messagingSenderId: "440119256513",
  appId: "1:440119256513:web:91b04e30d74d1193fa7b40",
  measurementId: "G-38PTEEN34G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
