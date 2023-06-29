import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'boney-james-aa5b2.firebaseapp.com',
  projectId: 'boney-james-aa5b2',
  storageBucket: 'boney-james-aa5b2.appspot.com',
  messagingSenderId: '763607710411',
  appId: '1:763607710411:web:bbd594ecb19dfd40fc394e',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
