/** @format */

import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCNwyAUXCni1-KBs-yYZf5xx01wHdKJm-A',
  authDomain: 'ecommerce-coder-9c0be.firebaseapp.com',
  projectId: 'ecommerce-coder-9c0be',
  storageBucket: 'ecommerce-coder-9c0be.appspot.com',
  messagingSenderId: '553734873223',
  appId: '1:553734873223:web:a3cdb8e1940c89b3795822',
  measurementId: 'G-16PELZ28GY',
}
const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => app
export const Firebase = firebase
export const getFirestore = () => firebase.firestore(app)
