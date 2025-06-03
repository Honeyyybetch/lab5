// src/services/lessons.js
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const getLessons = async () => {
  const lessonsRef = collection(db, "lessons");
  const snapshot = await getDocs(lessonsRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};