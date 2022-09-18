import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
initializeApp({
	apiKey: "AIzaSyBPalBwU-1saZ883F75V-N1USEIYwXylkU",
  authDomain: "e-commerce-coder-martin-ore.firebaseapp.com",
  projectId: "e-commerce-coder-martin-ore",
  storageBucket: "e-commerce-coder-martin-ore.appspot.com",
  messagingSenderId: "428589152498",
  appId: "1:428589152498:web:8dd3fc0cfcd4def66af86b"
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
