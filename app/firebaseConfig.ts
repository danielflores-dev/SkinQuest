import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD46VFzknV1F32nj4298tb54KTK_CHLFiU",
  authDomain: "skinquest-9a34b.firebaseapp.com",
  projectId: "skinquest-9a34b",
  storageBucket: "skinquest-9a34b.firebasestorage.app",
  messagingSenderId: "599830677814",
  appId: "1:599830677814:web:50c6dce852eb73a68dcb97",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;