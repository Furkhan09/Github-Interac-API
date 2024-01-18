import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuUNl_pwDegl-WLTXybVLdnvGXwfwpWjc",
  authDomain: "github-interac-api.firebaseapp.com",
  projectId: "github-interac-api",
  storageBucket: "github-interac-api.appspot.com",
  messagingSenderId: "627946572431",
  appId: "1:627946572431:web:a8dfbe14302fb7488a7efa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
