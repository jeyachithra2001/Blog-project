import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBKx-oDFytAZ8-HdZukMk_NL1TK8p3Yam0",
  authDomain: "blog-app-f04ee.firebaseapp.com",
  projectId: "blog-app-f04ee",
  storageBucket: "blog-app-f04ee.firebasestorage.app",
  messagingSenderId: "295099403893",
  appId: "1:295099403893:web:cb6617bfcfcc07b095b23c",
  measurementId: "G-ZWTHNKM50E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth