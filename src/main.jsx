import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './App.css'



// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
)
