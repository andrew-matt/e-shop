import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from 'firebase-config';

export const authAPI = {
  async initializeApp() {
    return new Promise(res => {
      onAuthStateChanged(auth, user => {
        if (user) {
          res({ userEmail: user.email, userId: user.uid });
        }
      });
    });
  },
  async logIn(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;

    return { userEmail: user.email, userId: user.uid };
  },
};
