// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACIwnnzpFbjgkJ40QjJZYh--GQeCtK1a8",
    authDomain: "vacarion.firebaseapp.com",
    projectId: "vacarion",
    storageBucket: "vacarion.appspot.com",
    messagingSenderId: "794993385159",
    appId: "1:794993385159:web:2e994844d877efff0928e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;