import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCh1Y-aaLCsqgK8AIVm6uYXxUGM1WrRdko",
  authDomain: "my-task-manager-7fbfc.firebaseapp.com",
  projectId: "my-task-manager-7fbfc",
  storageBucket: "my-task-manager-7fbfc.firebasestorage.app",
  messagingSenderId: "729880563898",
  appId: "1:729880563898:web:8d0d4d8fce7664bb3af283",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth();
