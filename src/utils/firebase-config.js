// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB059USS5m1eiRvSkprZqId41NZaeeDT9Q",
  authDomain: "netflix-gpt-cb2e9.firebaseapp.com",
  projectId: "netflix-gpt-cb2e9",
  storageBucket: "netflix-gpt-cb2e9.appspot.com",
  messagingSenderId: "1071415470025",
  appId: "1:1071415470025:web:a16b4830763074ce772a18",
  measurementId: "G-YD1ZPHQ0T0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth();
