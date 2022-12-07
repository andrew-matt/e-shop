import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { auth } from 'firebase-config';

export const authAPI = {
  initializeApp() {
    return new Promise(res => {
      onAuthStateChanged(auth, user => {
        if (user) {
          res({ userEmail: user.email, userId: user.uid });
        } else {
          res(null);
        }
      });
    });
  },
  async signUp(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;

    return { userEmail: user.email, userId: user.uid };
  },
  async signIn(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;

    return { userEmail: user.email, userId: user.uid };
  },
  signOut() {
    return new Promise((res, rej) => {
      try {
        signOut(auth).then(() => {
          res('success');
        });
      } catch (error) {
        rej(new Error('failure'));
      }
    });
  },
};
