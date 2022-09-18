import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBPalBwU-1saZ883F75V-N1USEIYwXylkU",
  authDomain: "e-commerce-coder-martin-ore.firebaseapp.com",
  projectId: "e-commerce-coder-martin-ore",
  storageBucket: "e-commerce-coder-martin-ore.appspot.com",
  messagingSenderId: "428589152498",
  appId: "1:428589152498:web:8dd3fc0cfcd4def66af86b"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </>
);

reportWebVitals();
