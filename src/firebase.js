import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyA4eIfSJbwznl9UixyFgI5fhGSrAKziFdA",
  authDomain: "inventory-management-app-1f120.firebaseapp.com",
  projectId: "inventory-management-app-1f120",
  storageBucket: "inventory-management-app-1f120.appspot.com",
  messagingSenderId: "608836287838",
  appId: "1:608836287838:web:b0642c2bd08b3392e8e3cf"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };