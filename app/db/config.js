import { initializeApp, getApps } from "firebase/app";

const firebaseConfig= {
  apiKey: "AIzaSyDqKjYZcr7rbgI0jJF-5jS77o5Z8nmJ7iM",
  authDomain: "avatar-37593.firebaseapp.com",
  projectId: "avatar-37593",
  storageBucket: "avatar-37593.appspot.com",
  messagingSenderId: "751644224984",
  appId: "1:751644224984:web:89c24a5d19ba3888d196ad",
  measurementId: "G-8461ZF6KB6"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;