// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBuqVerrm1mfU70967HmTnJ5I96FSk4nCM",
  authDomain: "nameteba-v1.firebaseapp.com",
  projectId: "nameteba-v1",
  storageBucket: "nameteba-v1.appspot.com",
  messagingSenderId: "477061219597",
  appId: "1:477061219597:web:011d0e23652c826dd8dc44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase and Firestore
const db = getFirestore(app)
export {db}

// Get the Auth instance
const auth = getAuth();

// Sign-up function
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed up:", user);
    return user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

// Sign-in function
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed in:", user);
    return user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};