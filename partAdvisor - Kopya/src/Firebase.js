// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRutDFSGaq_1jsBNOcaO053ak6CJjuHwI",
  authDomain: "fir-bb645.firebaseapp.com",
  projectId: "fir-bb645",
  storageBucket: "fir-bb645.appspot.com",
  messagingSenderId: "330369797065",
  appId: "1:330369797065:web:faad64795503068491b618",
  measurementId: "G-04E6D7DRMV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
