// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: 'hackathon-b109f',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSENGER_SEND,
  appId: process.env.FIREBASE_APP_ID,
};

export const FIREBASE_APP =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const DB = getDatabase(FIREBASE_APP);
