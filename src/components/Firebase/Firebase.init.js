// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmWvDM3qkTRTqljbyrrOKhnfl8K0H0LC8",
    authDomain: "csehacks.firebaseapp.com",
    projectId: "csehacks",
    storageBucket: "csehacks.appspot.com",
    messagingSenderId: "242429513968",
    appId: "1:242429513968:web:b004ccc0b75a8d40a9f235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;