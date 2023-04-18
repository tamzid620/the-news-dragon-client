// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4GKzm5JC5ZShDR2GmK5SyTceblCz9RYM",
  authDomain: "the-news-dragon-49a1f.firebaseapp.com",
  projectId: "the-news-dragon-49a1f",
  storageBucket: "the-news-dragon-49a1f.appspot.com",
  messagingSenderId: "367745396206",
  appId: "1:367745396206:web:1cff6b82dc1c146fe432ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;