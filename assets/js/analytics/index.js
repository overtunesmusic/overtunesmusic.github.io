// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcUeaAt1UxJF8CFYsSUClJcJNc-Ffx_VA",
  authDomain: "overtunes-music.firebaseapp.com",
  databaseURL: "https://overtunes-music-default-rtdb.firebaseio.com",
  projectId: "overtunes-music",
  storageBucket: "overtunes-music.appspot.com",
  messagingSenderId: "1045912076744",
  appId: "1:1045912076744:web:b260d7d6897788d6ce40fd",
  measurementId: "G-MX8Z715H46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);