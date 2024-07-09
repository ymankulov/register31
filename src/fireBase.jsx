import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4Vi4HWi1o8xChWUyAoHjxQhbLfd1Qsso",
  authDomain: "register-9b01e.firebaseapp.com",
  projectId: "register-9b01e",
  storageBucket: "register-9b01e.appspot.com",
  messagingSenderId: "352083449485",
  appId: "1:352083449485:web:92e38ae536492fc75cb4c4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
