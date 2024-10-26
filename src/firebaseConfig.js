// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCutwZGz_CQUGf6y3ptovP8eNzxtvPpz2I",
  authDomain: "text-box-12fe4.firebaseapp.com",
  databaseURL: "https://text-box-12fe4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "text-box-12fe4",
  storageBucket: "text-box-12fe4.appspot.com",
  messagingSenderId: "1002793865112",
  appId: "1:1002793865112:web:ea1451b1a65957601525ed",
  measurementId: "G-YRFJCDC462"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database, ref, set };
