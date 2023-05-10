
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAiHdSVLlFrA9jq8Gl0m8fxUhc29UTIbGc",
    authDomain: "movil-app-9e2a4.firebaseapp.com",
    databaseURL: "https://movil-app-9e2a4-default-rtdb.firebaseio.com",
    projectId: "movil-app-9e2a4",
    storageBucket: "movil-app-9e2a4.appspot.com",
    messagingSenderId: "1007281233788",
    appId: "1:1007281233788:web:1c6dab7cb10891d5c5cef9",
    measurementId: "G-VX598645MG"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {
    firestore,
}