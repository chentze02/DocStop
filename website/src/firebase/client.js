// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNemJmiQgksQp85lMNkyh0ifqjzeJ0czM",
  authDomain: "ai-video-creation-dc71c.firebaseapp.com",
  projectId: "ai-video-creation-dc71c",
  storageBucket: "ai-video-creation-dc71c.appspot.com",
  messagingSenderId: "834890365767",
  appId: "1:834890365767:web:f614c1188a9f75a25a2a62"
};

// Initialize Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);