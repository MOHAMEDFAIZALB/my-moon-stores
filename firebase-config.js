// Firebase configuration for compat mode (works with CDN scripts)
const firebaseConfig = {
  apiKey: "AIzaSyCEqngd0JJHerYSEMyARyYRk_zKPMY-5Hk",
  authDomain: "my-moon-store.firebaseapp.com",
  projectId: "my-moon-store",
  storageBucket: "my-moon-store.firebasestorage.app",
  messagingSenderId: "271449536268",
  appId: "1:271449536268:web:a594a0d8a8d72b3afefb29",
  measurementId: "G-YQ8HZGW136"
};

// Initialize Firebase (compat version for CDN)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firestore
window.firebaseDB = firebase.firestore();

// Initialize Storage
window.firebaseStorage = firebase.storage();

console.log("Firebase initialized successfully");
console.log("DB:", window.firebaseDB);
console.log("Storage:", window.firebaseStorage);
