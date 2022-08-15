// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcaTo7iuTnIw0wD_pVbKyWyryENe2_4_Q",
  authDomain: "netflix-clone-579d9.firebaseapp.com",
  projectId: "netflix-clone-579d9",
  storageBucket: "netflix-clone-579d9.appspot.com",
  messagingSenderId: "781701555847",
  appId: "1:781701555847:web:a82e48289ba93655767a22",
  measurementId: "G-5R0ET16XLB"
};
 
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }