// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0-9ZNhZk-sMrRigaHuIey_2AxIISLYpk",
  authDomain: "kitchen-of-salt-and-pepper.firebaseapp.com",
  projectId: "kitchen-of-salt-and-pepper",
  storageBucket: "kitchen-of-salt-and-pepper.appspot.com",
  messagingSenderId: "731377746675",
  appId: "1:731377746675:web:702d415ffde0aaed6e6d86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;