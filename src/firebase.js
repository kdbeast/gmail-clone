// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3sl7IAfiIpFfnrmbYHqflumXPOc2Teyk",
  authDomain: "clone-750a8.firebaseapp.com",
  projectId: "clone-750a8",
  storageBucket: "clone-750a8.firebasestorage.app",
  messagingSenderId: "380890854871",
  appId: "1:380890854871:web:fac136d308f99d22db4792",
  measurementId: "G-XGHX779NBZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
// export const storage = getStorage(app);
// export const storageRef = ref(storage);
