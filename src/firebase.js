import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlD7i_FoqkYEtfZI5gKchRqIGsu0t2vfs",
  authDomain: "photo-course-2931c.firebaseapp.com",
  projectId: "photo-course-2931c",
  storageBucket: "photo-course-2931c.firebasestorage.app",
  messagingSenderId: "742766210059",
  appId: "1:742766210059:web:7f070ce6093fde331b6b0e",
  measurementId: "G-Q4NYH2TDET"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
  loginHint: 'Виберіть акаунт для входу'
});

// Для мобільних додатків додати:
googleProvider.addScope('email');
googleProvider.addScope('profile');