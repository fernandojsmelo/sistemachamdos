
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD7SyBW_JpR-akbmxDFjETiC-XjRHELvMA",
  authDomain: "tickets-bae4c.firebaseapp.com",
  projectId: "tickets-bae4c",
  storageBucket: "tickets-bae4c.appspot.com",
  messagingSenderId: "468438886598",
  appId: "1:468438886598:web:5a72c5bc8e06f5f8fecfc7",
  measurementId: "G-HFLH0EY1VX"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };